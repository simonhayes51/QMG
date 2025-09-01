import events from "../../data/events.json";
import EventCard from "../../components/EventCard";

export const metadata = { title: "What's On — The Quizmaster General" };

export default function WhatsOn() {
  return (
    <section className="container-pad py-12">
      <h1 className="text-3xl font-bold">What's On</h1>
      <p className="text-white/70 mt-1">Weekly quizzes, bingo & themed nights.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {events.map((e, i) => <EventCard key={i} event={e} />)}
      </div>
    </section>
  );
}
