import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md px-4 py-24 text-center">
      <h1 className="text-4xl font-bold">404: Page not found</h1>
      <p className="mb-6 mt-3 text-stone-600">Sorry, that dish or page is not on our menu.</p>
      <Button href="/menu">Back to the menu</Button>
    </div>
  );
}