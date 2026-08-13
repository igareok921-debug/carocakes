import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revenim în curând | CaroCakes",
  description: "CaroCakes este temporar în mentenanță.",
  robots: {
    index: false,
    follow: false
  }
};

export default function MaintenancePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12 text-center">
      <section className="glass w-full max-w-xl rounded-[2rem] px-7 py-12 sm:px-12">
        <div className="mx-auto mb-7 h-px w-24 gold-line" />
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--cocoa)]">
          CaroCakes
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight text-[var(--ganache)] sm:text-5xl">
          Revenim în curând
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-7 text-[var(--cocoa)] sm:text-lg">
          Lucrăm la câteva îmbunătățiri pentru tine. Site-ul este temporar indisponibil,
          dar ne vom întoarce cât mai curând.
        </p>
        <div className="mx-auto mt-8 h-px w-24 gold-line" />
      </section>
    </main>
  );
}
