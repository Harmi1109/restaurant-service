import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/menu/AddToCartButton";
import { getItemBySlug, menuItems } from "@/data/menu";
import { formatPrice } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return menuItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getItemBySlug(slug);
  if (!item) return { title: "Dish not found" };
  return { title: item.name, description: item.description };
}

export default async function ItemPage({ params }: Props) {
  const { slug } = await params;
  const item = getItemBySlug(slug);
  if (!item) notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <nav aria-label="Breadcrumb" className="mb-4 text-sm">
        <Link href="/menu" className="text-orange-700 hover:underline">
          ← Back to menu
        </Link>
      </nav>

      <article className="grid gap-8 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image
            src={item.image}
            alt={item.name}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-medium text-stone-500">
            {item.category} · {item.isVeg ? "🟢 Veg" : "🔴 Non-veg"}
          </p>
          <h1 className="mt-1 text-3xl font-bold">{item.name}</h1>
          <p className="mt-3 text-2xl font-semibold text-orange-700">{formatPrice(item.price)}</p>
          <p className="my-6 text-stone-700">{item.description}</p>
          <AddToCartButton item={item} />
        </div>
      </article>
    </div>
  );
}