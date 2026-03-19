const logos = ["DPIIT", "#startupindia", "NVIDIA", "Razorpay", "IVCA", "Vanguard", "DPIIT", "#startupindia", "NVIDIA", "Razorpay", "IVCA", "Vanguard"];

export default function BackedBy() {
  return (
    <section className="py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-2xl py-5 px-8 overflow-hidden">
          <p className="text-center text-[10px] font-black text-wu-dark/38 uppercase tracking-[0.2em] mb-5">Backed By</p>
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white/50 to-transparent z-10"/>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/50 to-transparent z-10"/>
            <div className="animate-marquee whitespace-nowrap">
              {logos.map((l, i) => (
                <span key={i} className="inline-block mx-10 font-display font-black text-lg text-wu-dark/32 hover:text-wu-blue transition-colors cursor-default select-none">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
