import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { emergencies, getEmergency } from "@/lib/emergencies";
import { DontsCard } from "@/components/donts-card";
import { StepList } from "@/components/step-list";

type Props = { params: Promise<{ type: string }> };

export function generateStaticParams() {
  return Object.keys(emergencies).map((type) => ({ type }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const emergency = getEmergency((await params).type);
  return emergency
    ? { title: `${emergency.title} — PetFirst`, description: `First aid steps for ${emergency.title.toLowerCase()} in pets.` }
    : {};
}

export default async function EmergencyPage({ params }: Props) {
  const { type } = await params;
  const emergency = getEmergency(type);
  if (!emergency) notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <Link href="/" className="mb-6 inline-flex items-center gap-1 text-sm text-muted hover:text-foreground">
        <ArrowLeft className="size-4" aria-hidden="true" />
        All emergencies
      </Link>
      <h1 className="mb-6 text-3xl font-semibold tracking-tight">{emergency.title}</h1>

      <div className="flex flex-col gap-6">
        <DontsCard donts={emergency.donts} />
        <StepList key={type} steps={emergency.steps} />
        <p className="text-sm leading-relaxed text-muted">
          This guide is for first aid only and does not replace professional veterinary care.
        </p>
      </div>
    </main>
  );
}
