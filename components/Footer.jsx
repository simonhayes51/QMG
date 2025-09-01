export default function Footer(){
  return (
    <footer className="mt-16 border-t border-[rgba(10,31,68,.12)]">
      <div className="container-pad py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3"><div className="roundel"/><h3 className="font-semibold">The Quizmaster General</h3></div>
          <p className="mt-3 max-w-sm">Weekly pub quizzes, music bingo, themed nights & private events across the North East.</p>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-3">North Shields, UK</p>
          <p>Email: hello@thequizmastergeneral.com</p>
          <p>Instagram / Facebook: @TheQuizmasterGeneral</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2">
            <li><a href="/whats-on" className="no-underline">What's On</a></li>
            <li><a href="/calendar" className="no-underline">Calendar</a></li>
            <li><a href="/contact" className="no-underline">Book Us</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[rgba(10,31,68,.12)] py-4 text-center text-sm">© {new Date().getFullYear()} The Quizmaster General</div>
    </footer>
  );
}
