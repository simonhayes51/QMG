import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative">
      <div className="container-pad py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-wide text-white/70">North East • Pub Quizzes • Music Bingo • Themed Nights</span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Make your venue's{" "}
            <span className="text-brand">busiest night</span>{" "}
            a quiz night.
          </h1>
          <p className="mt-4 text-white/80 text-lg">We run packed, high‑energy quiz nights that keep people coming back: picture rounds, live music intros, boozy bingo & epic prizes.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">Book a Quiz</Link>
            <Link href="/whats-on" className="btn btn-ghost">See What's On</Link>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[380px] bg-gradient-to-b from-brand/10 to-transparent" />
    </section>
  );
}
