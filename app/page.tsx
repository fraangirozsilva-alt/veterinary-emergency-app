import { EmergencyGrid } from "@/components/emergency-grid";
import { emergencies } from "@/lib/emergencies";

export default function HomePage() {
  const items = Object.entries(emergencies).map(([type, e]) => ({
    type,
    title: e.title,
    stepCount: e.steps.length,
  }));

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-8 max-w-2xl">
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-primary">Pet emergency guide</p>
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          What&apos;s happening to your pet?
        </h1>
        <p className="mt-3 text-pretty leading-relaxed text-muted">
          Choose an emergency for immediate first aid steps. These steps help stabilize your pet — always contact a
          veterinarian as soon as possible.
        </p>
      </div>
      <EmergencyGrid items={items} />
    </main>
  );
}
