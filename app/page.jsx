import Link from "next/link";
import FeatureCard from "../components/FeatureCard";
import Stat from "../components/Stat";
export default function Home(){
  return (
    <div>
      <section className="relative bg-hero-grad">
        <div className="container-pad relative py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur">
              <div className="roundel" /> <span className="text-xs tracking-widest">BRITPOP QUIZZES • MUSIC BINGO • THEMED NIGHTS</span>
            </div>
            <h1 className="mt-5 text-5xl md:text-6xl font-extrabold leading-tight" style={{fontFamily:"var(--font-display)"}}>
              Turn quiet nights into <span style={{color:'var(--red)'}}>sell‑outs</span>.
            </h1>
            <p className="mt-4 opacity-80 text-lg">High‑energy quiz shows for pubs and venues — picture rounds, music intros, boozy bingo & proper prizes.</p>
            <div className="equalizer" aria-hidden><div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div></div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary no-underline">Book a Quiz</Link>
              <Link href="/calendar" className="btn btn-ghost no-underline">See Calendar</Link>
            </div>
          </div>
        </div>
        <div className="diag-bot h-10" style={{background:'#0F1730'}}></div>
      </section>

      <section style={{background:'#0F1730'}}>
        <div className="container-pad py-10 grid gap-4 md:grid-cols-3">
          <Stat kicker="WEEKLY ATTENDEES" value="500+" sub="Across our venues" />
          <Stat kicker="MUSIC CLIPS" value="200+" sub="From 60s to Britpop" />
          <Stat kicker="PICTURE ROUNDS" value="300+" sub="Clever, cheeky, fresh" />
        </div>
      </section>

      <section className="bg-ink-900">
        <div className="container-pad grid gap-4 md:grid-cols-3">
          <FeatureCard title="Quiz Nights that Pop" desc="Britpop/mod flavour with picture & music rounds that keep crowds hooked." icon="🎸" />
          <FeatureCard title="Music Bingo" desc="Fast, chaotic and glorious — perfect for Fridays." icon="🎶" />
          <FeatureCard title="Themed Specials" desc="Football, 90s, Movies, Eurovision, Christmas — you name it." icon="🏆" />
        </div>
      </section>

      <section className="bg-ink-900">
        <div className="container-pad py-10">
          <h3 className="text-xl font-semibold">Trusted by brilliant venues</h3>
          <div className="mt-6 marquee">
            <div className="marquee-track">
              {[0,1].map(k => (
                <div key={k} className="flex items-center gap-8 pr-8">
                  {Array.from({length:10}).map((_,i)=>(
                    <img key={i+k*10} src={`/assets/v${i+1}.jpg`} alt={`Venue ${i+1}`} className="h-12 w-auto object-contain opacity-90"/>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-800">
        <div className="container-pad py-10 text-center">
          <h3 className="text-2xl font-bold">Ready to make your slow night the biggest night?</h3>
          <div className="mt-4">
            <Link href="/contact" className="btn btn-primary no-underline">Book a Quiz</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
