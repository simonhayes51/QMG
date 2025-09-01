import Image from "next/image";
import Link from "next/link";
import Testimonial from "../components/Testimonial";
import testimonials from "../data/testimonials.json";
export default function HomePage(){
  return (<div>
    <section className="relative">
      <div className="relative h-[360px] w-full">
        <Image src="/assets/banner.jpg" alt="Union Jack banner" fill priority className="object-cover" />
        <div className="absolute inset-0 hero-stripe" />
      </div>
      <div className="container-pad -mt-24 relative">
        <div className="card p-6 md:p-10">
          <div className="flex items-center gap-6">
            <Image src="/assets/logo_qmg.png" alt="The Quizmaster General" width={140} height={140} />
            <div>
              <div className="section-tag">North East • Pub Quizzes • Music Bingo • Themed Nights</div>
              <h1 className="mt-3 text-3xl md:text-5xl font-extrabold font-display">
                Make your venue&apos;s <span style={{color:'var(--red)'}}>busiest night</span> a quiz night.
              </h1>
              <p className="mt-3 opacity-80">Picture rounds, live music intros, boozy bingo & proper prizes.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary no-underline">Book a Quiz</Link>
                <Link href="/whats-on" className="btn btn-ghost no-underline">See What&apos;s On</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="container-pad py-10">
      <h2 className="text-2xl font-bold">Trusted by brilliant venues across the North East</h2>
      <div className="mt-6 marquee">
        <div className="marquee-track">
          {Array.from({length:2}).map((_,k)=> (
            <div key={k} className="flex items-center gap-8 pr-8">
              {Array.from({length:10}).map((__,i)=> (
                <div key={i+k*10} className="h-16 w-[180px] flex items-center justify-center card px-3">
                  <Image src={`/assets/v${i+1}.jpg`} alt={`Venue ${i+1}`} width={160} height={64} className="max-h-12 w-auto object-contain" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container-pad pb-12">
      <h2 className="text-2xl font-bold">Why venues book us</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {testimonials.map((t,i)=>(<Testimonial key={i} {...t} />))}
      </div>
    </section>
  </div>);
}
