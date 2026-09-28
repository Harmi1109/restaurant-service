import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import MenuCard from "@/components/menu/MenuCard";
import Gallery from "@/components/home/Gallery";
import { menuItems } from "@/data/menu";

export const metadata: Metadata = {
  title: "Spice Route | Restaurant",
  description: "Fresh, flavourful food. Order online or reserve a table at Spice Route.",
};

const perks = [
  { title: "Fresh daily", text: "Spices ground in-house and vegetables delivered every morning." },
  { title: "Made to order", text: "Every dish is cooked when you order, never reheated." },
  { title: "Made with care", text: "Simple recipes, generous portions and friendly service." },
];

export default function HomePage() {
  const featured = menuItems.slice(0, 3);
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-cocoa via-[#5a2a12] to-[#8a3b12] px-4 py-24 text-center text-cream sm:py-36">
        <div aria-hidden className="animate-float pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-saffron/30 blur-3xl" />
        <div aria-hidden className="animate-float-delayed pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-chili/40 blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.3em] text-saffron">
            Welcome to Spice Route
          </p>
          <h1 className="animate-fade-up mt-4 text-5xl font-bold leading-tight sm:text-7xl" style={{ animationDelay: "120ms" }}>
            Flavours worth <span className="text-shimmer">coming back for</span>
          </h1>
          <p className="animate-fade-up mx-auto mt-6 max-w-md text-lg text-cream/80" style={{ animationDelay: "240ms" }}>
            Browse our menu, build your order, or book a table for tonight.
          </p>
          <div className="animate-fade-up mt-10 flex flex-col justify-center gap-3 sm:flex-row" style={{ animationDelay: "360ms" }}>
            <Button href="/menu">View menu</Button>
            <Button href="/reservation" variant="light">Reserve a table</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">Popular dishes</h2>
        <p className="mb-8 mt-2 text-ink/70">Guest favourites, made fresh for you.</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/menu" variant="secondary">See the full menu</Button>
        </div>
      </section>

      <Gallery />

      <section className="bg-white px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
          {perks.map((perk, i) => (
            <div
              key={perk.title}
              className="animate-fade-up rounded-3xl bg-cream p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <h2 className="text-xl font-semibold text-chili">{perk.title}</h2>
              <p className="mt-2 text-ink/70">{perk.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}