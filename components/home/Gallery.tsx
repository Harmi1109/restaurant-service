import Image from "next/image";

const spaces = [
  { src: "/images/space-interior.jpeg", alt: "Warm and welcoming dining hall", caption: "Our dining hall" },
  { src: "/images/space-dining.jpeg", alt: "Tables set for dinner", caption: "Cosy seating" },
  { src: "/images/space-entrance.jpeg", alt: "Restaurant entrance", caption: "Come on in" },
  { src: "/images/space-kitchen.jpg", alt: "Restaurant table setting", caption: "Made with care" },
];

export default function Gallery() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16" aria-labelledby="space-heading">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-saffron">Visit us</p>
      <h2 id="space-heading" className="mt-2 text-3xl font-bold">Our space</h2>
      <p className="mb-8 mt-2 max-w-md text-ink/70">
        A relaxed, warm place to share a meal with family and friends.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {spaces.map((space, i) => (
          <figure
            key={space.src}
            className={`animate-fade-up group relative aspect-[4/3] overflow-hidden rounded-3xl bg-stone-200 shadow-sm ${
              i === 0 ? "sm:col-span-2 lg:row-span-2 lg:aspect-auto" : ""
            }`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <Image
              src={space.src}
              alt={space.alt}
              fill
              sizes={i === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <figcaption className="absolute bottom-4 left-5 font-display text-lg font-semibold text-white">
              {space.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}