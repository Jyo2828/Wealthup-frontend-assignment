"use client";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  { n:"01", icon:"🔍", title:"Define Your Goal",
    desc:"Start by defining what you want to achieve — buying a car, travelling, or building long-term wealth. Tell us the goal amount and timeline, and we'll create a personalised investment plan.", sc:"goal" },
  { n:"02", icon:"⚙️", title:"Setup Your Investment Account",
    desc:"Complete a simple and secure account setup with quick KYC verification. This allows you to invest seamlessly through regulated platforms and start building your portfolio.", sc:"kyc" },
  { n:"03", icon:"📊", title:"Start Investing & Track Progress",
    desc:"Begin with our recommended plans. Monitor your portfolio in real-time, track goal progress, and get personalised insights to stay on course.", sc:"chart" },
];

function PhoneMockup({ screen }: { screen: string }) {
  return (
    <div className="w-32 h-52 bg-wu-dark rounded-3xl border-4 border-wu-dark shadow-2xl shadow-wu-dark/40 flex flex-col overflow-hidden flex-shrink-0">
      <div className="w-8 h-1.5 bg-slate-700 rounded-full mx-auto mt-2"/>
      <div className="flex-1 px-2.5 py-2 flex flex-col gap-1.5">
        {screen === "goal" && <>
          <div className="bg-wu-blue/20 rounded-lg h-9 flex items-center justify-center text-lg mt-1">🎯</div>
          <div className="h-1.5 bg-wu-blue/35 rounded-full w-3/4 mx-auto"/>
          <div className="h-1.5 bg-wu-blue/20 rounded-full w-1/2 mx-auto"/>
          <div className="mt-1 space-y-1">{[80,60,90,50].map((w,i)=><div key={i} className="h-1 bg-wu-blue/25 rounded-full" style={{width:`${w}%`}}/>)}</div>
          <div className="mt-auto bg-wu-blue rounded-lg py-1.5 text-center"><span className="text-white text-[8px] font-bold">Set Goal →</span></div>
        </>}
        {screen === "kyc" && <>
          <div className="bg-green-400/20 rounded-lg h-9 flex items-center justify-center text-lg mt-1">✅</div>
          {["Name","PAN","DOB"].map(f=>(
            <div key={f} className="bg-wu-blue/10 rounded px-1.5 py-1 flex items-center gap-1">
              <span className="text-[7px] text-blue-300">{f}</span>
              <div className="flex-1 h-px bg-wu-blue/25"/>
              <span className="text-[7px] text-green-400">✓</span>
            </div>
          ))}
          <div className="mt-auto bg-green-500 rounded-lg py-1.5 text-center"><span className="text-white text-[8px] font-bold">Verified ✓</span></div>
        </>}
        {screen === "chart" && <>
          <div className="flex items-end gap-0.5 h-16 pt-2 mt-1">
            {[30,50,40,70,55,85,75].map((h,i)=>(
              <div key={i} className="flex-1 rounded-t" style={{height:`${h}%`,background:i===6?"#1A73E8":"rgba(26,115,232,0.3)"}}/>
            ))}
          </div>
          <div className="bg-wu-blue/15 rounded px-1.5 py-1.5">
            <div className="text-[7px] text-blue-300">Portfolio value</div>
            <div className="text-[10px] font-black text-white">₹ 2.4L</div>
          </div>
        </>}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section id="how" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-xs font-black text-wu-blue uppercase tracking-widest mb-3">Process</p>
            <h2 className="font-display text-4xl font-black text-wu-dark mb-3 tracking-tight">How it Works?</h2>
            <p className="text-wu-dark/50 text-sm">India&apos;s most intelligent investment planning platform</p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 space-y-3">
            {steps.map((step, i) => (
              <AnimatedSection key={step.title} delay={(i+1) as 1|2|3}>
                <div onClick={() => setActive(i)}
                  className={`rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden ${
                    active === i ? "glass-strong shadow-lg shadow-blue-200/40" : "glass hover:shadow-md"
                  }`}>
                  <div className="p-5 flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-all duration-200 border ${
                      active===i ? "border-transparent shadow-md shadow-blue-300/40" : "border-wu-blue/18 bg-wu-blue/10"
                    }`}
                    style={active===i?{background:"linear-gradient(135deg,#1A73E8,#0d52c8)"}:{}}>
                      {step.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`font-display font-black text-base ${active===i?"text-wu-dark":"text-wu-dark/65"}`}>{step.title}</h3>
                        <span className="text-xs font-black text-wu-dark/15 font-mono ml-2">{step.n}</span>
                      </div>
                      <div className={`overflow-hidden transition-all duration-400 ${active===i?"max-h-28 opacity-100 mt-2":"max-h-0 opacity-0"}`}>
                        <p className="text-sm text-wu-dark/52 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                  {active===i && (
                    <div className="px-5 pb-4 flex gap-1.5">
                      {steps.map((_,j) => (
                        <div key={j} className={`h-1 rounded-full transition-all duration-300 bg-wu-blue ${j<=i?"opacity-100":"opacity-25"} ${j===i?"flex-[2]":"flex-1"}`}/>
                      ))}
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={2} className="lg:col-span-2">
            <div className="glass rounded-3xl p-10 flex flex-col items-center justify-center min-h-72 relative overflow-hidden">
              <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/25"/>
              <PhoneMockup screen={steps[active].sc}/>
              <div className="mt-5 text-center">
                <p className="text-xs font-black text-wu-blue">{steps[active].n}</p>
                <p className="text-sm font-bold text-wu-dark mt-1">{steps[active].title}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
