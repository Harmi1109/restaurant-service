"use client";

import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import CartItem from "./CartItem";

export default function CartView() {
  const { lines, subtotal, dispatch } = useCart();

  if (lines.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-stone-300 p-10 text-center">
        <p className="text-lg font-medium">Your cart is empty</p>
        <p className="mb-6 mt-1 text-stone-600">Add something tasty from the menu.</p>
        <Button href="/menu">Browse the menu</Button>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
      <ul className="divide-y divide-stone-200">
        {lines.map((line) => (
          <CartItem key={line.item.id} line={line} />
        ))}
      </ul>

      <aside aria-label="Order summary" className="h-fit rounded-xl border border-stone-200 p-6">
        <h2 className="text-lg font-semibold">Order summary</h2>
        <p className="mt-4 flex justify-between text-lg">
          <span>Total</span>
          <strong>{formatPrice(subtotal)}</strong>
        </p>
        <Button className="mt-6 w-full">Checkout (demo)</Button>
        <Button
          variant="secondary"
          className="mt-3 w-full"
          onClick={() => dispatch({ type: "clear" })}
        >
          Clear cart
        </Button>
      </aside>
    </div>
  );
}