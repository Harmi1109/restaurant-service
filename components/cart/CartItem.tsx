"use client";

import Image from "next/image";
import { useCart, type CartLine } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";

export default function CartItem({ line }: { line: CartLine }) {
  const { dispatch } = useCart();
  const { item, quantity } = line;

  return (
    <li className="flex gap-4 py-4">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
        <Image src={item.image} alt={item.name} fill sizes="80px" className="object-cover" />
      </div>
      <div className="flex-1">
        <h2 className="font-semibold">{item.name}</h2>
        <p className="text-sm text-stone-600">{formatPrice(item.price)} each</p>
        <div className="mt-2 flex items-center gap-3">
          <button
            type="button"
            aria-label={`Decrease quantity of ${item.name}`}
            onClick={() => dispatch({ type: "decrease", id: item.id })}
            className="h-9 w-9 rounded-md border border-stone-300 text-lg"
          >
            -
          </button>
          <span aria-live="polite" className="w-6 text-center">{quantity}</span>
          <button
            type="button"
            aria-label={`Increase quantity of ${item.name}`}
            onClick={() => dispatch({ type: "increase", id: item.id })}
            className="h-9 w-9 rounded-md border border-stone-300 text-lg"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: "remove", id: item.id })}
            className="ml-auto text-sm text-red-600 underline"
          >
            Remove
          </button>
        </div>
      </div>
      <p className="font-semibold">{formatPrice(item.price * quantity)}</p>
    </li>
  );
}
