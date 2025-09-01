export default function Testimonial({ quote, name, venue }) {
  return (
    <div className="card p-6">
      <p className="text-lg">“{quote}”</p>
      <p className="mt-4 text-white/70">— {name}{venue ? `, ${venue}` : ""}</p>
    </div>
  );
}
