"use client";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const goals = [
  { icon: "🚗", label: "Car",    base: 20, sip: 24, max: 50  },
  { icon: "✈️", label: "Travel", base: 5,  sip: 8,  max: 20  },
  { icon: "🏠", label: "Home",   base: 80, sip: 95, max: 200 },
  { icon: "🎯", label: "Custom", base: 30, sip: 36, max: 100 },
];

function fmt(v: number) {
  if (v >= 100) return `₹ ${(v / 100).toFixed(1)}Cr`;
  if (v >= 1)   return `₹ ${v.toFixed(1)}L`;
  return `₹ ${Math.round(v * 100)}k`;
}

export default function HeroSection() {
  const [ag, setAg] = useState(0);
  const [price, setPrice] = useState(20);
  const [years, setYears] = useState(6);
  const g = goals[ag];
  const lump = price * 0.565;
  const sip  = g.sip * (price / g.base) * (6 / years);

  return (
    <section id="goals" className="pt-24 pb-14 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="space-y-6">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2.5 glass rounded-full px-4 py-2">
                <div className="flex -space-x-2">
                  {["#4F8EF7","#34D399","#F59E0B","#F472B6"].map((c,i) => (
                    <div key={i} style={{backgroundColor:c}} className="w-6 h-6 rounded-full border-2 border-white"/>
                  ))}
                </div>
                <span className="text-xs font-bold text-wu-dark/70">Trusted by 2,000+ users</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={1}>
              <h1 className="font-display text-5xl lg:text-[3.4rem] font-black text-wu-dark leading-[1.1] tracking-tight">
                Plan your life<br/>
                goals.{" "}
                <span className="text-wu-blue">We&apos;ll plan</span><br/>
                <span className="text-wu-blue">the investments.</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <p className="text-wu-dark/55 text-base leading-relaxed max-w-md">
                WealthUp helps you achieve goals through<br/>personalised goal-based investing.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={3}>
              <div className="grid grid-cols-2 gap-3 max-w-[248px]">
                {goals.map((goal, i) => (
                  <button key={goal.label} onClick={() => { setAg(i); setPrice(goal.base); setYears(6); }}
                    className={`flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 ${
                      ag === i
                        ? "text-white shadow-lg shadow-blue-400/35 border border-wu-blue"
                        : "glass text-wu-dark hover:shadow-md"
                    }`}
                    style={ag === i ? {background:"linear-gradient(135deg,#1A73E8,#0d52c8)"} : {}}>
                    <span className="text-xl">{goal.icon}</span>{goal.label}
                  </button>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={4}>
              <button className="flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-wu-dark/30 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 text-sm"
                style={{background:"linear-gradient(135deg,#0D1B3E,#1a3a72)"}}>
                Start Planning Free
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </AnimatedSection>
          </div>

          {/* Right */}
          <AnimatedSection delay={2}>
            <div className="space-y-4">
              {/* Glass calculator card */}
              <div className="glass-strong rounded-3xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-2xl">{g.icon}</span>
                  <h3 className="font-display font-black text-wu-dark text-lg">
                    {ag===0?"Buy a car":ag===1?"Plan travel":ag===2?"Buy a home":"Custom goal"}
                  </h3>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-xs font-semibold text-wu-dark/50 mb-2">
                    <span>Goal amount</span>
                    <span className="text-wu-dark font-black">{fmt(price)}</span>
                  </div>
                  <input type="range" min={1} max={g.max} value={price}
                    onChange={e => setPrice(+e.target.value)} className="w-full accent-wu-blue"/>
                </div>

                <div className="glass-blue rounded-2xl px-5 py-4 flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-wu-dark/48 mb-0.5">Lump Sum needed</p>
                    <p className="font-display font-black text-2xl text-wu-dark">{fmt(lump)}</p>
                  </div>
                  <span className="text-2xl">💰</span>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-xs font-semibold text-wu-dark/50 mb-2">
                    <span>Time to goal</span>
                    <span className="text-wu-dark font-black">{years} years</span>
                  </div>
                  <input type="range" min={1} max={20} value={years}
                    onChange={e => setYears(+e.target.value)} className="w-full accent-wu-blue"/>
                </div>

                <div className="glass-blue rounded-2xl px-5 py-4 flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs text-wu-dark/48 mb-0.5">Monthly SIP</p>
                    <p className="font-display font-black text-2xl text-wu-dark">{fmt(sip)}</p>
                  </div>
                  <span className="text-2xl">📅</span>
                </div>

                <button className="w-full py-3 rounded-2xl text-white text-sm font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-200 group"
                  style={{background:"linear-gradient(135deg,#0D1B3E,#1a3a72)"}}>
                  Let&apos;s get your {g.label.toLowerCase()} <span className="group-hover:translate-x-1 transition-transform">{g.icon}</span>
                </button>
              </div>

              {/* Illustration */}
              <div className="glass rounded-3xl p-6 flex items-center justify-center min-h-40 overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{backgroundImage:"radial-gradient(circle at 20% 50%, #1A73E8 0%, transparent 60%), radial-gradient(circle at 80% 50%, #00B4D8 0%, transparent 60%)"}}/>
                <svg viewBox="0 0 360 140" className="w-full max-w-xs animate-float" fill="none">
                  {ag===0 && <>
                    <rect x="20" y="56" width="320" height="52" rx="14" fill="#1A73E8"/>
                    <path d="M84 56 C102 24 138 12 180 12 C222 12 258 24 276 56Z" fill="#1561C8"/>
                    <rect x="100" y="20" width="60" height="32" rx="6" fill="#BFDBFE" opacity=".85"/>
                    <rect x="170" y="20" width="60" height="32" rx="6" fill="#BFDBFE" opacity=".85"/>
                    <circle cx="90" cy="110" r="22" fill="#0D1B3E"/><circle cx="90" cy="110" r="13" fill="#94A3B8"/><circle cx="90" cy="110" r="5" fill="#CBD5E1"/>
                    <circle cx="270" cy="110" r="22" fill="#0D1B3E"/><circle cx="270" cy="110" r="13" fill="#94A3B8"/><circle cx="270" cy="110" r="5" fill="#CBD5E1"/>
                    <rect x="318" y="68" width="15" height="11" rx="3" fill="#FDE68A"/>
                    <rect x="22" y="68" width="11" height="11" rx="2" fill="#FCA5A5"/>
                  </>}
                  {ag===1 && <>
                    <ellipse cx="180" cy="75" rx="80" ry="42" fill="#1A73E8"/>
                    <path d="M100 75 Q140 50 180 56 Q220 50 260 75" fill="#1561C8"/>
                    <rect x="142" y="62" width="76" height="26" rx="8" fill="#BFDBFE" opacity=".7"/>
                    <circle cx="80" cy="105" r="18" fill="#E2E8F0"/><circle cx="280" cy="105" r="18" fill="#E2E8F0"/>
                    <path d="M44 88 L96 78" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M264 78 L316 88" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round"/>
                  </>}
                  {ag===2 && <>
                    <rect x="88" y="60" width="184" height="74" rx="4" fill="#1A73E8"/>
                    <path d="M64 72 L180 14 L296 72Z" fill="#1561C8"/>
                    <rect x="112" y="92" width="52" height="42" rx="4" fill="#BFDBFE" opacity=".5"/>
                    <rect x="196" y="92" width="52" height="32" rx="4" fill="#BFDBFE" opacity=".5"/>
                    <line x1="88" y1="134" x2="272" y2="134" stroke="#0D1B3E" strokeWidth="3" strokeLinecap="round"/>
                  </>}
                  {ag===3 && <>
                    <circle cx="180" cy="72" r="56" fill="#1A73E8" opacity=".2"/>
                    <circle cx="180" cy="72" r="40" fill="#1A73E8" opacity=".38"/>
                    <circle cx="180" cy="72" r="24" fill="#1A73E8"/>
                    <path d="M165 72 L175 82 L198 58" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="250" cy="32" r="18" fill="#34D399" opacity=".7"/>
                    <circle cx="108" cy="108" r="14" fill="#F59E0B" opacity=".7"/>
                  </>}
                </svg>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
