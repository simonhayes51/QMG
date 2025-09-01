export default function EventCard({ event }) {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{event.title}</h3>
        <span className="rounded bg-brand/20 px-2 py-1 text-xs text-brand">Weekly</span>
      </div>
      <p className="mt-2 text-white/80">{event.venue} • {event.town}</p>
      <p className="text-white/60 text-sm">{event.day} · {event.time}</p>
    </div>
  );
}
