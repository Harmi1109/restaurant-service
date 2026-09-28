import Image from "next/image";
import Link from "next/link";
import type { MenuItem } from "@/data/menu";
import { formatPrice } from "@/lib/format";

export default function MenuCard({ item, index = 0 }: { item: MenuItem; index?: number }) {
  return (
    <article
      className="animate-fade-up group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-chili/10"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <Link href={`/menu/${item.slug}`} className="block focus-visible:outline-2 focus-visible:outline-chili">
        <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-110"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
          <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-sm font-semibold text-chili shadow">
            {formatPrice(item.price)}
          </span>
        </div>
        <div className="p-5">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-saffron">
            {item.category}
          </p>
          <div className="flex items-center gap-2">
            <span
              role="img"
              aria-label={item.isVeg ? "Vegetarian" : "Non-vegetarian"}
              className={`inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border-2 ${item.isVeg ? "border-leaf" : "border-chili"}`}
            >
              <span className={`h-2 w-2 rounded-full ${item.isVeg ? "bg-leaf" : "bg-chili"}`} />
            </span>
            <h2 className="text-xl font-semibold">{item.name}</h2>
          </div>
          <p className="mt-2 line-clamp-2 text-sm text-ink/70">{item.description}</p>
          <p className="mt-4 text-sm font-semibold text-chili">
            View dish <span aria-hidden className="inline-block transition duration-300 group-hover:translate-x-1.5">&rarr;</span>
          </p>
        </div>
      </Link>
    </article>
  );
}