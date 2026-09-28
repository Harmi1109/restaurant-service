import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "light";

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chili disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-chili text-white shadow-md shadow-chili/30 hover:-translate-y-0.5 hover:bg-chili-dark hover:shadow-lg",
  secondary: "border border-ink/15 bg-white text-ink hover:border-chili hover:text-chili",
  light: "border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20",
};

type Props = { variant?: Variant; href?: string } & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ variant = "primary", href, className = "", ...props }: Props) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {props.children}
      </Link>
    );
  }
  return <button type="button" className={classes} {...props} />;
}