import type { Metadata } from "next";
import MenuBrowser from "@/components/menu/MenuBrowser";
import { categories, menuItems } from "@/data/menu";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore South Indian, main course, fast food and Italian dishes at Spice Route.",
};

export default function MenuPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-cocoa to-[#5a2a12] px-4 py-14 text-cream">
        <div className="animate-fade-up mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-saffron">Spice Route</p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Our Menu</h1>
          <p className="mt-3 max-w-md text-cream/75">Freshly prepared, made to order.</p>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <MenuBrowser items={menuItems} categories={categories} />
      </div>
    </>
  );
}