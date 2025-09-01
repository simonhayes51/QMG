"use client";
import { useMemo, useState } from "react";
function startOfMonth(d){ return new Date(d.getFullYear(), d.getMonth(), 1); }
function endOfMonth(d){ return new Date(d.getFullYear(), d.getMonth()+1, 0); }
const WEEKDAYS=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
export default function CalendarGrid({events=[]}){
  const [cursor,setCursor]=useState(new Date());
  const byDay = useMemo(()=>{
    const m={}; events.forEach(e=>{ (m[e.date] ||= []).push(e); });
    Object.values(m).forEach(list=>list.sort((a,b)=>a.time.localeCompare(b.time)));
    return m;
  },[events]);
  const first=startOfMonth(cursor), last=endOfMonth(cursor);
  const firstWeekday=(first.getDay()+6)%7, daysInMonth=last.getDate();
  const total=Math.ceil((firstWeekday+daysInMonth)/7)*7;
  const cells=[];
  for(let i=0;i<total;i++){
    const d=new Date(first); d.setDate(d.getDate()-firstWeekday+i);
    const iso=d.toISOString().slice(0,10);
    cells.push({date:d, iso, inMonth: d.getMonth()===cursor.getMonth(), events: byDay[iso]||[]});
  }
  const monthLabel=first.toLocaleString('en-GB',{month:'long',year:'numeric'});
  return (<div>
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <button className="btn btn-ghost" onClick={()=>setCursor(new Date(cursor.getFullYear(),cursor.getMonth()-1,1))}>‹ Prev</button>
        <button className="btn btn-ghost" onClick={()=>setCursor(new Date())}>Today</button>
        <button className="btn btn-ghost" onClick={()=>setCursor(new Date(cursor.getFullYear(),cursor.getMonth()+1,1))}>Next ›</button>
      </div>
      <h2 className="text-xl font-bold">{monthLabel}</h2>
    </div>
    <div className="mt-4 grid grid-cols-7 gap-2">
      {WEEKDAYS.map(d=><div key={d} className="text-xs uppercase tracking-wider opacity-70 text-center">{d}</div>)}
      {cells.map((c,i)=>(
        <div key={i} className={`card p-2 min-h-[110px] ${c.inMonth?'':'opacity-40'}`}>
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold">{c.date.getDate()}</div>
            {c.events.length>0 && <span className="badge badge-red">{c.events.length}</span>}
          </div>
          <div className="mt-2 space-y-1">
            {c.events.slice(0,3).map((e,idx)=>(
              <a key={idx} href={e.url||"#"} className="block text-xs no-underline" title={`${e.title} • ${e.venue} ${e.time}`}>
                <span className="badge badge-blue mr-1">{e.time}</span>{e.title}
              </a>
            ))}
            {c.events.length>3 && <div className="text-xs opacity-60">+{c.events.length-3} more…</div>}
          </div>
        </div>
      ))}
    </div>
  </div>);
}
