import { OctagonX } from "lucide-react";

export function DontsCard({ donts }: { donts: string[] }) {
  return (
    <section aria-labelledby="donts-heading" className="rounded-lg border border-primary/30 bg-primary-soft p-5">
      <h2 id="donts-heading" className="mb-3 flex items-center gap-2 font-semibold text-primary">
        <OctagonX className="size-5" aria-hidden="true" />
        Do not
      </h2>
      <ul className="flex flex-col gap-2">
        {donts.map((d) => (
          <li key={d} className="flex gap-2 leading-relaxed">
            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            {d}
          </li>
        ))}
      </ul>
    </section>
  );
}
