"use client";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#goals",  label: "Goals" },
  { href: "#invest", label: "Invest" },
  { href: "#how",    label: "How it Works" },
  { href: "#why",    label: "Why Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-blue-100/60 backdrop-blur-2xl border-b border-white/60 shadow-sm"
        : "bg-blue-200/40 backdrop-blur-xl border-b border-white/50"
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-lg shadow-blue-400/40 bg-wu-btn group-hover:scale-105 transition-transform"
            style={{background:"linear-gradient(135deg,#1A73E8,#0d52c8)"}}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M2 12L5 6.5L8 9.5L13 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="13" cy="3" r="1.6" fill="white"/>
            </svg>
          </div>
          <span className="font-display font-black text-xl text-wu-dark tracking-tight">wealthup</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}
              className="relative text-sm font-semibold text-wu-dark/60 hover:text-wu-blue transition-colors group">
              {l.label}
              <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-wu-blue rounded-full group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-5 py-2 rounded-full text-sm font-bold border-2 border-wu-blue/50 text-wu-blue bg-white/40 backdrop-blur-md hover:bg-wu-blue hover:text-white hover:border-wu-blue transition-all duration-200">
            Login
          </button>
          <button className="px-5 py-2 rounded-full text-sm font-bold text-white shadow-lg shadow-blue-400/40 hover:shadow-xl hover:-translate-y-px transition-all duration-200"
            style={{background:"linear-gradient(135deg,#1A73E8,#0d52c8)"}}>
            Get Started
          </button>
        </div>

        <button className="md:hidden p-2 rounded-lg bg-white/30 backdrop-blur-md border border-white/60" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {menuOpen
              ? <path d="M4 4L16 16M16 4L4 16" stroke="#0D1B3E" strokeWidth="2" strokeLinecap="round"/>
              : <><line x1="2" y1="5" x2="18" y2="5" stroke="#0D1B3E" strokeWidth="2" strokeLinecap="round"/><line x1="2" y1="10" x2="18" y2="10" stroke="#0D1B3E" strokeWidth="2" strokeLinecap="round"/><line x1="2" y1="15" x2="18" y2="15" stroke="#0D1B3E" strokeWidth="2" strokeLinecap="round"/></>
            }
          </svg>
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-white/70 backdrop-blur-xl border-b border-white/70 ${menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 py-5 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold text-wu-dark/70 hover:text-wu-blue transition-colors">{l.label}</a>
          ))}
          <div className="flex gap-3 pt-3 border-t border-blue-100">
            <button className="flex-1 py-2.5 rounded-full text-sm font-bold border-2 border-wu-blue text-wu-blue">Login</button>
            <button className="flex-1 py-2.5 rounded-full text-sm font-bold text-white" style={{background:"linear-gradient(135deg,#1A73E8,#0d52c8)"}}>Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
