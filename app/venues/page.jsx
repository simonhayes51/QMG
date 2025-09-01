import venues from "../../data/venues.json";
import VenueCard from "../../components/VenueCard";

export const metadata = { title: "Venues — The Quizmaster General" };

export default function Venues() {
  return (
    <section className="container-pad py-12">
      <h1 className="text-3xl font-bold">Venues</h1>
      <p className="text-white/70 mt-1">Some of the brilliant pubs and bars we work with.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {venues.map((v, i) => <VenueCard key={i} venue={v} />)}
      </div>
    </section>
  );
}
