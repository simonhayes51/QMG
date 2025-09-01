export const metadata = { title: "The Team — The Quizmaster General" };

const team = [
  { name: "Alreet Pete", role: "Host", bio: "Sexy, sophisticated, cricket playing teacher & drummer. One of the best in the business.", photo: "/img/pete.jpg" },
  { name: "The QMG", role: "Head Quizmaster", bio: "Bringing the noise, prizes and loyalty to venues across the North East.", photo: "/img/qmg.jpg" }
];

export default function Team() {
  return (
    <section className="container-pad py-12">
      <h1 className="text-3xl font-bold">The Team</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {team.map((m, i) => (
          <div key={i} className="card p-6 flex items-center gap-4">
            <div className="h-20 w-20 rounded-lg bg-white/10"></div>
            <div>
              <h3 className="font-semibold">{m.name}</h3>
              <p className="text-white/70 text-sm">{m.role}</p>
              <p className="text-white/80 mt-2">{m.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
