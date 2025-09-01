export const metadata = { title: "Services — The Quizmaster General" };

const services = [
  { title: "Weekly Pub Quiz", desc: "A proven, high‑retention quiz format with picture, music & specialist rounds."},
  { title: "Music Bingo", desc: "Fast‑paced, boozy bingo with party anthems and instant wins."},
  { title: "Corporate & Private", desc: "Team‑building, fundraisers and private parties tailored to your crowd."},
  { title: "Themed Nights", desc: "Football, 00s, Movie, Eurovision, Christmas specials and more."}
];

export default function Services() {
  return (
    <section className="container-pad py-12">
      <h1 className="text-3xl font-bold">Services</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {services.map((s, i) => (
          <div key={i} className="card p-6">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-white/80 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
