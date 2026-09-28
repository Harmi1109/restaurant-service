"use client";

import { useState } from "react";
import type { Category, MenuItem } from "@/data/menu";
import MenuCard from "./MenuCard";

type Props = { items: MenuItem[]; categories: readonly Category[] };

export default function MenuBrowser({ items, categories }: Props) {
  const [active, setActive] = useState<Category | "All">("All");
  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <>
      <div role="group" aria-label="Filter by category" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2">
        {(["All", ...categories] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            aria-pressed={active === cat}
            onClick={() => setActive(cat)}
            className={`shrink-0 rounded-full border px-5 py-2 text-sm font-medium transition duration-200 active:scale-95 ${
              active === cat
                ? "border-chili bg-chili text-white shadow-md shadow-chili/25"
                : "border-ink/15 bg-white text-ink/80 hover:border-chili hover:text-chili"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-ink/60">No dishes in this category yet.</p>
      ) : (
        <div key={active} className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </div>
      )}
    </>
  );
}