export default function VenueCard({ venue }) {
  return (
    <div className="card p-5">
      <h3 className="font-semibold">{venue.name}</h3>
      <p className="text-white/80">{venue.town}</p>
      <p className="text-white/60 text-sm">{venue.night} at {venue.time}</p>
    </div>
  );
}
