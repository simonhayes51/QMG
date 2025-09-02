export const metadata = { title: "Contact — The Quizmaster General" };
const id = process.env.NEXT_PUBLIC_FORMSPREE_ID;
export default function Contact(){
  const hasFormspree = !!id;
  const action = hasFormspree ? `https://formspree.io/f/${id}` : undefined;
  return (
    <section className="container-pad py-12">
      <h1 className="text-3xl font-bold">Book Us</h1>
      <p className="opacity-80 mt-1">Tell us about your venue or event and we'll get back to you.</p>
      {hasFormspree ? (
        <form action={action} method="post" className="mt-6 grid gap-4 max-w-xl">
          <input className="glass p-3 bg-white/10 placeholder-white/60" name="name" placeholder="Your name" required />
          <input className="glass p-3 bg-white/10 placeholder-white/60" name="email" type="email" placeholder="Email" required />
          <input className="glass p-3 bg-white/10 placeholder-white/60" name="venue" placeholder="Venue name" />
          <input className="glass p-3 bg-white/10 placeholder-white/60" name="location" placeholder="Town/City" />
          <textarea className="glass p-3 bg-white/10 placeholder-white/60" name="message" rows="5" placeholder="What are you looking for? Dates, format, capacity, budget…" required />
          <button className="btn btn-primary w-fit" type="submit">Send Enquiry</button>
        </form>
      ) : (
        <div className="mt-6 glass p-6 max-w-xl">
          <p className="opacity-80">Email isn’t wired yet. Click below to email us directly and we’ll reply fast.</p>
          <a className="btn btn-primary mt-4 inline-flex" href="mailto:hello@thequizmastergeneral.com?subject=Booking%20enquiry">Email Us</a>
          <p className="text-xs opacity-60 mt-4">(To enable the form, set <code>NEXT_PUBLIC_FORMSPREE_ID</code> and rebuild.)</p>
        </div>
      )}
    </section>
  );
}
