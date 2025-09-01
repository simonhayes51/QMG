export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container-pad py-10 grid md:grid-cols-3 gap-8 text-white/70">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-brand" />
            <h3 className="font-semibold">The Quizmaster General</h3>
          </div>
          <p className="mt-3 max-w-sm">North East's leading quiz provider: weekly pub quizzes, music bingo, themed nights, and private events.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <p className="mt-3">North Shields, UK</p>
          <p>Email: hello@thequizmastergeneral.com</p>
          <p>Instagram / Facebook: @TheQuizmasterGeneral</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="mt-3 space-y-2">
            <li><a href="/whats-on">What's On</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Book Us</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-white/50 text-sm">© {new Date().getFullYear()} The Quizmaster General</div>
    </footer>
  );
}
