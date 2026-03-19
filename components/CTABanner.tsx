import AnimatedSection from "./AnimatedSection";

export default function CTABanner() {
  return (
    <section className="py-6 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-blue-900/25"
            style={{background:"linear-gradient(120deg,#0D1B3E 0%,#1a3a72 50%,#1A73E8 100%)"}}>
            {/* decorative orbs */}
            <div className="pointer-events-none absolute -top-14 -right-14 w-52 h-52 rounded-full bg-white/[0.05]"/>
            <div className="pointer-events-none absolute -bottom-10 left-1/3 w-40 h-40 rounded-full bg-white/[0.05]"/>
            {/* frosted edge */}
            <div className="pointer-events-none absolute inset-0 border border-white/10 rounded-3xl"/>

            <div className="relative z-10">
              <p className="text-[10px] font-black text-blue-200/90 uppercase tracking-[0.2em] mb-2">Ready to grow?</p>
              <h2 className="font-display text-2xl md:text-3xl font-black text-white mb-1.5">Your Goals Deserve a Plan</h2>
              <p className="text-blue-200/75 text-sm">Start your personalised investment roadmap in minutes.</p>
            </div>

            <button className="relative z-10 flex items-center gap-2.5 bg-white/92 backdrop-blur-md text-wu-dark font-black px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-sm whitespace-nowrap group">
              Create your investment plan
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform duration-200">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="#1A73E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
