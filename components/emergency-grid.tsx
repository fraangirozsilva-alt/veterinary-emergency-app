"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";

type Item = { type: string; title: string; stepCount: number };

export function EmergencyGrid({ items }: { items: Item[] }) {
  const [query, setQuery] = useState("");
  const filtered = items.filter((i) => i.title.toLowerCase().includes(query.trim().toLowerCase()));

  return (
    <section aria-label="Emergencies">
      <label htmlFor="emergency-search" className="sr-only">
        Search emergencies
      </label>
      <div className="relative mb-6">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden="true" />
        <input
          id="emergency-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search e.g. choking, poisoning..."
          className="w-full rounded-lg border border-border bg-card py-3 pl-10 pr-4 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-lg border border-dashed border-border p-6 text-center text-muted">
          No matching emergency. Call your vet immediately.
        </p>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <li key={item.type}>
              <Link
                href={`/emergency/${item.type}`}
                className="group flex h-full items-center justify-between gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary"
              >
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="mt-1 text-sm text-muted">{item.stepCount} steps</p>
                </div>
                <ArrowRight
                  className="size-5 text-muted transition-transform group-hover:translate-x-1 group-hover:text-primary"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
