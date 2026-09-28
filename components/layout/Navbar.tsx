"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/reservation", label: "Reserve" },
  { href: "/cart", label: "Cart" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-display text-2xl font-bold text-chili">
          Spice Route
        </Link>

        <button
          type="button"
          className="rounded-full border border-ink/15 px-4 py-2 text-sm font-medium md:hidden"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          id="main-nav"
          aria-label="Main"
          className={`${open ? "block" : "hidden"} absolute left-0 top-full w-full border-b border-ink/10 bg-cream md:static md:block md:w-auto md:border-0 md:bg-transparent`}
        >
          <ul className="flex flex-col gap-1 p-4 md:flex-row md:items-center md:gap-2 md:p-0">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive(link.href)
                      ? "bg-chili text-white shadow-md shadow-chili/25"
                      : "text-ink/80 hover:bg-chili/10 hover:text-chili"
                  }`}
                >
                  {link.label}
                  {link.href === "/cart" && totalItems > 0 && (
                    <span className="rounded-full bg-saffron px-2 py-0.5 text-xs font-bold text-white">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}