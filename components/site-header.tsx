import Link from "next/link";
import { HeartPulse, Phone } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-card/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <HeartPulse className="size-4" aria-hidden="true" />
          </span>
          PetFirst
        </Link>
        <a
          href="tel:+18884264435"
          className="flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Phone className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">Poison Control</span>
          <span className="font-mono">(888) 426-4435</span>
        </a>
      </div>
    </header>
  );
}
