import Hero from "../components/Hero";
import EventCard from "../components/EventCard";
import Testimonial from "../components/Testimonial";
import events from "../data/events.json";
import testimonials from "../data/testimonials.json";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <section className="container-pad py-12">
        <h2 className="text-2xl font-bold">What's On</h2>
        <p className="text-white/70 mt-1">Our regular weekly fixtures around the North East.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {events.map((e, i) => <EventCard key={i} event={e} />)}
        </div>
        <div className="mt-8">
          <a className="btn btn-ghost" href="/whats-on">See full schedule</a>
        </div>
      </section>
      <section className="container-pad py-12">
        <h2 className="text-2xl font-bold">Why venues book us</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => <Testimonial key={i} {...t} />)}
        </div>
      </section>
      <section className="container-pad py-12">
        <div className="card p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">Ready to boost mid‑week trade?</h3>
            <p className="text-white/70">Book The Quizmaster General for a trial night or recurring weekly slot.</p>
          </div>
          <a href="/contact" className="btn btn-primary">Enquire Now</a>
        </div>
      </section>
    </div>
  );
}
