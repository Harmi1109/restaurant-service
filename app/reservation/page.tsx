import type { Metadata } from "next";
import ReservationForm from "@/components/reservation/ReservationForm";

export const metadata: Metadata = {
  title: "Reserve a Table",
  description: "Book a table at Spice Route. Choose your date, time and party size.",
};

export default function ReservationPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-8">
      <h1 className="text-3xl font-bold">Reserve a Table</h1>
      <p className="mb-6 mt-2 text-stone-600">We will hold your table for 15 minutes.</p>
      <ReservationForm />
    </div>
  );
}