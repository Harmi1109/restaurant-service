"use client";

import { createContext, useContext, useReducer, type Dispatch, type ReactNode } from "react";
import type { MenuItem } from "@/data/menu";

export type CartLine = { item: MenuItem; quantity: number };

type Action =
  | { type: "add"; item: MenuItem }
  | { type: "increase"; id: string }
  | { type: "decrease"; id: string }
  | { type: "remove"; id: string }
  | { type: "clear" };

function reducer(state: CartLine[], action: Action): CartLine[] {
  switch (action.type) {
    case "add": {
      const exists = state.some((l) => l.item.id === action.item.id);
      if (exists) {
        return state.map((l) =>
          l.item.id === action.item.id ? { ...l, quantity: l.quantity + 1 } : l
        );
      }
      return [...state, { item: action.item, quantity: 1 }];
    }
    case "increase":
      return state.map((l) => (l.item.id === action.id ? { ...l, quantity: l.quantity + 1 } : l));
    case "decrease":
      return state.flatMap((l) =>
        l.item.id === action.id ? (l.quantity > 1 ? [{ ...l, quantity: l.quantity - 1 }] : []) : [l]
      );
    case "remove":
      return state.filter((l) => l.item.id !== action.id);
    case "clear":
      return [];
  }
}

type CartContextValue = {
  lines: CartLine[];
  totalItems: number;
  subtotal: number;
  dispatch: Dispatch<Action>;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, dispatch] = useReducer(reducer, []);
  const totalItems = lines.reduce((sum, l) => sum + l.quantity, 0);
  const subtotal = lines.reduce((sum, l) => sum + l.quantity * l.item.price, 0);

  return (
    <CartContext.Provider value={{ lines, totalItems, subtotal, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}