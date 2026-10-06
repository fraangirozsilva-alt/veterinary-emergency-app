"use client";

import { useState } from "react";
import { Check, RotateCcw } from "lucide-react";

export function StepList({ steps }: { steps: string[] }) {
  const [done, setDone] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <section aria-labelledby="steps-heading" className="rounded-lg border border-border bg-card p-5">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 id="steps-heading" className="font-semibold">
          What to do
        </h2>
        <div className="flex items-center gap-3 text-sm text-muted">
          <span aria-live="polite">
            {done.size} of {steps.length} done
          </span>
          {done.size > 0 && (
            <button
              type="button"
              onClick={() => setDone(new Set())}
              className="inline-flex items-center gap-1 hover:text-foreground"
            >
              <RotateCcw className="size-3.5" aria-hidden="true" />
              Reset
            </button>
          )}
        </div>
      </div>
      <ol className="flex flex-col gap-2">
        {steps.map((step, i) => {
          const isDone = done.has(i);
          return (
            <li key={step}>
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-pressed={isDone}
                className={`flex w-full items-start gap-4 rounded-md p-3 text-left transition-colors ${
                  isDone ? "bg-safe-soft" : "hover:bg-background"
                }`}
              >
                <span
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full font-mono text-sm font-semibold ${
                    isDone ? "bg-safe text-primary-foreground" : "bg-foreground text-card"
                  }`}
                >
                  {isDone ? <Check className="size-4" aria-label="Done" /> : i + 1}
                </span>
                <span className={`pt-1 leading-relaxed ${isDone ? "text-muted line-through" : ""}`}>{step}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
