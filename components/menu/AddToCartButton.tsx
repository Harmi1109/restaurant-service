"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import type { MenuItem } from "@/data/menu";

export default function AddToCartButton({ item }: { item: MenuItem }) {
  const { dispatch } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    dispatch({ type: "add", item });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div>
      <Button onClick={handleAdd} className="w-full sm:w-auto">
        Add to cart
      </Button>
      <p role="status" className="mt-2 h-5 text-sm text-green-700">
        {added ? `${item.name} added to your cart` : ""}
      </p>
    </div>
  );
}