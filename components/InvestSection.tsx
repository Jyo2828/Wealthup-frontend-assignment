"use client";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const investments = [
  {
    title: "Mutual Funds",
    icon: "📈",
    description:
      "Professionally managed portfolios designed to grow your wealth over the long term. Diversified across sectors and asset classes to balance risk and returns.",
  },
  {
    title: "Bonds",
    icon: "🔒",
    description:
      "Stable income-generating investments for predictable and steady returns. Ideal for investors seeking lower volatility and consistent cash flow.",
  },
  {
    title: "Invoice Discounting",
    icon: "🧾",
    description:
      "Access short-term investment opportunities backed by verified business invoices. Earn attractive returns while supporting real business transactions.",
  },
];

export default function InvestSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="invest" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-black text-wu-dark mb-3 tracking-tight">
              Multiple ways to grow your wealth
            </h2>
            <p className="text-wu-dark/50 text-base">
              Diversified investment options selected and optimized by WealthUp.
            </p>
          </div>
        </AnimatedSection>

        {/* Floating cards row — fixed height, no overlap */}
        <AnimatedSection delay={1}>
          <div className="grid grid-cols-3 gap-6 mb-6 items-end" style={{ height: "160px" }}>

            {/* Card 1 – Mutual Funds (dark, tilted left) */}
            <button
              onClick={() => setActive(0)}
              className={`relative justify-self-start self-end flex flex-col justify-end gap-2 rounded-2xl px-5 py-4 w-44 h-32 cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                active === 0 ? "shadow-2xl shadow-wu-dark/30 scale-105" : "shadow-lg"
              }`}
              style={{
                background: "linear-gradient(135deg,#1A3A72,#0D1B3E)",
                transform: `rotate(-8deg)${active === 0 ? " scale(1.05)" : ""}`,
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-base">📈</div>
              <span className="text-white font-display font-black text-base leading-tight">
                Mutual<br />Funds
              </span>
            </button>

            {/* Card 2 – Bonds (white glass, centered, slight tilt) */}
            <button
              onClick={() => setActive(1)}
              className={`justify-self-center self-end flex flex-col justify-end gap-2 rounded-2xl px-5 py-4 w-40 h-24 cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                active === 1 ? "shadow-xl shadow-wu-blue/20 scale-105" : "shadow-md"
              }`}
              style={{
                background: "rgba(255,255,255,0.72)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.92)",
                transform: `rotate(3deg)${active === 1 ? " scale(1.05)" : ""}`,
              }}
            >
              <div className="w-7 h-7 rounded-full bg-wu-blue/10 border border-wu-blue/15 flex items-center justify-center text-sm">🔒</div>
              <span className="text-wu-dark font-display font-black text-base">Bonds</span>
            </button>

            {/* Card 3 – Invoice Discounting (white glass, right, tilted right) */}
            <button
              onClick={() => setActive(2)}
              className={`justify-self-end self-end flex flex-col justify-end gap-2 rounded-2xl px-5 py-4 w-44 h-24 cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                active === 2 ? "shadow-xl shadow-wu-blue/20 scale-105" : "shadow-md"
              }`}
              style={{
                background: "rgba(255,255,255,0.72)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.92)",
                transform: `rotate(8deg)${active === 2 ? " scale(1.05)" : ""}`,
              }}
            >
              <div className="w-7 h-7 rounded-full bg-wu-blue/10 border border-wu-blue/15 flex items-center justify-center text-sm">🧾</div>
              <span className="text-wu-dark font-display font-black text-sm leading-tight">
                Invoice<br />Discounting
              </span>
            </button>
          </div>
        </AnimatedSection>

        {/* Curved connector SVG between floating cards and detail cards */}
        <AnimatedSection delay={1}>
          <div className="relative h-8 -mb-1">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 900 32"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M 150 4 Q 450 28 750 8"
                stroke="#1A73E8"
                strokeWidth="1.5"
                strokeDasharray="5 5"
                opacity="0.35"
              />
              <circle cx="150" cy="4"  r="3" fill="#1A73E8" opacity="0.4" />
              <circle cx="450" cy="26" r="3" fill="#1A73E8" opacity="0.4" />
              <circle cx="750" cy="8"  r="3" fill="#1A73E8" opacity="0.4" />
            </svg>
          </div>
        </AnimatedSection>

        {/* Detail cards row */}
        <AnimatedSection delay={2}>
          <div className="grid grid-cols-3 rounded-2xl overflow-hidden border border-white/50 shadow-xl shadow-blue-200/30"
            style={{ background: "rgba(255,255,255,0.20)", backdropFilter: "blur(16px)" }}>
            {investments.map((inv, i) => (
              <button
                key={inv.title}
                onClick={() => setActive(i)}
                className={`text-left p-7 flex flex-col gap-4 transition-all duration-300 border-r border-white/30 last:border-r-0 relative ${
                  active === i ? "" : "hover:bg-white/20"
                }`}
                style={
                  active === i
                    ? { background: "linear-gradient(135deg,#1A3A72,#0D1B3E)" }
                    : {}
                }
              >
                {/* Active top accent */}
                {active === i && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-wu-blue" />
                )}

                {/* Icon + title */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${
                    active === i ? "bg-white/15" : "bg-white/60 border border-white/80 shadow-sm"
                  }`}>
                    {inv.icon}
                  </div>
                  <h3 className={`font-display font-black text-base leading-tight ${
                    active === i ? "text-white" : "text-wu-dark"
                  }`}>
                    {inv.title}
                  </h3>
                </div>

                {/* Description */}
                <p className={`text-sm leading-relaxed ${
                  active === i ? "text-blue-200/80" : "text-wu-dark/52"
                }`}>
                  {inv.description}
                </p>
              </button>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}