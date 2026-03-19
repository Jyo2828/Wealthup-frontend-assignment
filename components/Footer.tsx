const cols = [
  { h:"Product",  links:["Mutual Funds","Bonds","Invoice Discounting","Goal Planning"] },
  { h:"Company",  links:["About Us","Careers","Blog","Press Kit"] },
  { h:"Legal",    links:["Privacy Policy","Terms of Service","Disclaimer","SEBI Registration"] },
];

export default function Footer() {
  return (
    <footer className="mt-10" style={{background:"rgba(13,27,62,0.86)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderTop:"1px solid rgba(255,255,255,0.08)"}}>
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-10 grid md:grid-cols-5 gap-10">

        <div className="md:col-span-2 space-y-4">
          <a href="#" className="flex items-center gap-2 w-fit group">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/50 group-hover:scale-105 transition-transform"
              style={{background:"linear-gradient(135deg,#1A73E8,#0d52c8)"}}>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M2 14L6 7.5L10 11L15 4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="15" cy="4" r="1.7" fill="white"/>
              </svg>
            </div>
            <span className="font-display font-black text-2xl text-white tracking-tight">wealthup</span>
          </a>
          <p className="text-slate-400/80 text-sm leading-relaxed max-w-xs">
            Helping you achieve your life goals through personalised goal-based investing. Smart, simple, and tax-efficient.
          </p>
          <div>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Stay updated</p>
            <div className="flex gap-2">
              <input type="email" placeholder="you@email.com"
                className="flex-1 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors"
                style={{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)"}}/>
              <button className="px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-colors shadow-lg shadow-blue-900/40"
                style={{background:"linear-gradient(135deg,#1A73E8,#0d52c8)"}}>→</button>
            </div>
          </div>
        </div>

        {cols.map(col => (
          <div key={col.h}>
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-5">{col.h}</h4>
            <ul className="space-y-3">
              {col.links.map(link => (
                <li key={link}><a href="#" className="text-sm text-slate-400/80 hover:text-white transition-colors duration-200">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{borderTop:"1px solid rgba(255,255,255,0.07)"}}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-slate-600">© 2025 WealthUp Technologies Pvt. Ltd. All rights reserved.</p>
          <p className="text-[11px] text-slate-600 text-center sm:text-right">SEBI Registered. Investments are subject to market risk.</p>
        </div>
      </div>
    </footer>
  );
}
