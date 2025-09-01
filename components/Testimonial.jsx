export default function Testimonial({quote,name,venue}){
  return (<div className="card p-6">
    <p className="text-lg leading-relaxed">“{quote}”</p>
    <p className="mt-4 opacity-70">— {name}{venue?`, ${venue}`:''}</p>
  </div>);
}
