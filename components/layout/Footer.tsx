export default function Footer() {
  return (
    <footer className="mt-16 bg-cocoa text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2">
        <div>
          <p className="font-display text-2xl font-bold text-saffron">Spice Route</p>
          <p className="mt-2 max-w-xs text-sm">Fresh food, made to order, served with care.</p>
        </div>
        <div className="text-sm sm:text-right">
          <p className="font-semibold text-cream">Opening hours</p>
          <p className="mt-1">Open daily, 12:00 to 23:00</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-cream/60">
        &copy; {new Date().getFullYear()} Spice Route. Demo project.
      </div>
    </footer>
  );
}