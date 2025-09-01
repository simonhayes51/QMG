export const metadata = { title: "Gallery — The Quizmaster General" };

export default function Gallery() {
  return (
    <section className="container-pad py-12">
      <h1 className="text-3xl font-bold">Gallery</h1>
      <p className="text-white/70">Drop your favourite crowd shots and posters into <code>/public/gallery</code> and they'll appear here.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[...Array(6)].map((_,i)=> <div key={i} className="aspect-video bg-white/10 rounded-lg" />)}
      </div>
    </section>
  );
}
