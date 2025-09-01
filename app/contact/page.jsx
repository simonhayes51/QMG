
export const metadata = { title: "Contact — The Quizmaster General" };

const FORMSPREE_URL = "https://formspree.io/f/your-id"; // replace with your real Formspree endpoint or use mailto fallback

export default function Contact() {
  return (
    <section className="container-pad py-12">
      <h1 className="text-3xl font-bold">Book Us</h1>
      <p className="text-white/70 mt-1">Tell us about your venue or event and we'll get back to you.</p>
      <form action={FORMSPREE_URL} method="post" className="mt-6 grid gap-4 max-w-xl">
        <input className="card p-3" name="name" placeholder="Your name" required />
        <input className="card p-3" name="email" type="email" placeholder="Email" required />
        <input className="card p-3" name="venue" placeholder="Venue name" />
        <input className="card p-3" name="location" placeholder="Town/City" />
        <textarea className="card p-3" name="message" rows="5" placeholder="What are you looking for? Dates, format, capacity, budget…" required />
        <button className="btn btn-primary w-fit" type="submit">Send Enquiry</button>
        <p className="text-white/60 text-sm">No server needed. Swap FORMSPREE_URL for your own endpoint, or use <a className="underline" href="mailto:hello@thequizmastergeneral.com?subject=Booking Enquiry">mailto</a>.</p>
      </form>
    </section>
  );
}
