import type { Metadata } from "next";
import CartView from "@/components/cart/CartView";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "Review the dishes in your cart and see your order total.",
};

export default function CartPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Your Cart</h1>
      <CartView />
    </div>
  );
}