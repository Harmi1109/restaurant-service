import type { InputHTMLAttributes } from "react";

type Props = {
  id: string;
  label: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function FormField({ id, label, error, ...props }: Props) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-stone-800">
        {label}
      </label>
      <input
        id={id}
        name={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`w-full rounded-lg border px-4 py-3 text-base focus:outline-2 focus:outline-orange-600 ${
          error ? "border-red-500" : "border-stone-300"
        }`}
        {...props}
      />
      {error && (
        <p id={errorId} role="alert" className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
