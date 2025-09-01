"use client";
import Link from "next/link";
import { useState } from "react";
const nav=[
  {href:"/whats-on",label:"What's On"},
  {href:"/calendar",label:"Calendar"},
  {href:"/venues",label:"Venues"},
  {href:"/services",label:"Services"},
  {href:"/team",label:"The Team"},
  {href:"/reviews",label:"Reviews"},
  {href:"/gallery",label:"Gallery"},
  {href:"/contact",label:"Contact"}
];
export default function NavBar(){
  const [open,setOpen]=useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(10,31,68,.12)] bg-white/85 backdrop-blur">
      <div className="container-pad flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="roundel"/><span className="font-semibold tracking-wide">The Quizmaster General</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map(i => <Link key={i.href} href={i.href} className="no-underline hover:opacity-80">{i.label}</Link>)}
          <Link href="/contact" className="btn btn-primary no-underline">Book a Quiz</Link>
        </nav>
        <button onClick={()=>setOpen(!open)} className="md:hidden btn btn-ghost">Menu</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[rgba(10,31,68,.12)] bg-white">
          <div className="container-pad py-4 flex flex-col gap-3">
            {nav.map(i => <Link key={i.href} href={i.href} className="no-underline" onClick={()=>setOpen(false)}>{i.label}</Link>)}
            <Link href="/contact" className="btn btn-primary mt-2 no-underline">Book a Quiz</Link>
          </div>
        </div>
      )}
    </header>
  );
}
