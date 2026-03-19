import AnimatedSection from "./AnimatedSection";

const features = [
  { icon:"✋", title:"Handpicked Investments", desc:"Every investment carefully selected by our expert team through rigorous research and analysis.", stat:"500+", sl:"Curated funds" },
  { icon:"🚀", title:"Capitalizing on Opportunities", desc:"We proactively identify market opportunities to maximise your portfolio growth continuously.", stat:"3x", sl:"Faster growth" },
  { icon:"🧾", title:"Optimized for Tax Efficiency", desc:"Strategies using ELSS, indexation benefits and smart exit planning to maximise after-tax returns.", stat:"30%", sl:"Tax savings" },
];

export default function WhySection() {
  return (
    <section id="why" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-xs font-black text-wu-blue uppercase tracking-widest mb-3">Why WealthUp?</p>
            <h2 className="font-display text-4xl font-black text-wu-dark mb-4 tracking-tight">
              Why Your Wealth Grows<br/>Faster With WealthUp
            </h2>
            <p className="text-wu-dark/50 text-sm max-w-lg mx-auto leading-relaxed">
              A smarter approach combining expert-curated opportunities, dynamic portfolio adjustments, and tax-efficient strategies.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={(i+1) as 1|2|3}>
              <div className="glass rounded-3xl p-7 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-200/40 transition-all duration-300 h-full flex flex-col group cursor-default">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 border border-wu-blue/20 transition-colors duration-300 group-hover:border-wu-blue"
                  style={{background:"rgba(26,115,232,0.1)"}}>
                  {f.icon}
                </div>
                <h3 className="font-display font-black text-wu-dark text-lg mb-3">{f.title}</h3>
                <p className="text-wu-dark/52 text-sm leading-relaxed flex-1">{f.desc}</p>
                <div className="mt-6 pt-5 border-t border-white/60 flex items-baseline gap-2">
                  <span className="font-display font-black text-3xl text-wu-blue">{f.stat}</span>
                  <span className="text-xs text-wu-dark/40 font-semibold">{f.sl}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
