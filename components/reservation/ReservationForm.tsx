"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Button from "@/components/ui/Button";
import FormField from "@/components/ui/FormField";

type Values = { name: string; phone: string; date: string; time: string; guests: string };
type Errors = Partial<Record<keyof Values, string>>;

const initialValues: Values = { name: "", phone: "", date: "", time: "", guests: "2" };

function validate(v: Values): Errors {
  const errors: Errors = {};
  const today = new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD in local time

  if (v.name.trim().length < 2) errors.name = "Please enter your full name.";

  if (!/^[6-9]\d{9}$/.test(v.phone.replace(/\s/g, "")))
    errors.phone = "Enter a valid 10-digit mobile number.";

  if (!v.date) errors.date = "Please choose a date.";
  else if (v.date < today) errors.date = "Date cannot be in the past.";

  if (!v.time) errors.time = "Please choose a time.";
  else if (v.time < "12:00" || v.time > "22:30")
    errors.time = "We take bookings between 12:00 and 22:30.";

  const guests = Number(v.guests);
  if (!Number.isInteger(guests) || guests < 1 || guests > 10)
    errors.guests = "Guests must be between 1 and 10.";

  return errors;
}

export default function ReservationForm() {
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof Values]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div role="status" className="rounded-xl border border-green-300 bg-green-50 p-6">
        <h2 className="text-xl font-semibold text-green-800">Table requested!</h2>
        <p className="mt-2 text-green-900">
          Thanks {values.name}. We have noted a table for {values.guests} on {values.date} at{" "}
          {values.time}. (Demo only, no data was sent.)
        </p>
        <Button
          variant="secondary"
          className="mt-4"
          onClick={() => {
            setValues(initialValues);
            setSubmitted(false);
          }}
        >
          Make another reservation
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <FormField id="name" label="Full name" value={values.name} onChange={handleChange} error={errors.name} autoComplete="name" />
      <FormField id="phone" label="Mobile number" type="tel" inputMode="numeric" value={values.phone} onChange={handleChange} error={errors.phone} autoComplete="tel" />
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="date" label="Date" type="date" value={values.date} onChange={handleChange} error={errors.date} />
        <FormField id="time" label="Time" type="time" value={values.time} onChange={handleChange} error={errors.time} />
      </div>
      <FormField id="guests" label="Number of guests" type="number" min={1} max={10} value={values.guests} onChange={handleChange} error={errors.guests} />
      <Button type="submit" className="w-full sm:w-auto">
        Reserve a table
      </Button>
    </form>
  );
}