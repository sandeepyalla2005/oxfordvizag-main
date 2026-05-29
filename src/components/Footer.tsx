"use client";

import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white/95 font-poppins relative overflow-hidden pt-28 pb-10">
      
      {/* Large Curved Top SVG Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8 sm:h-16 fill-bg-soft">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,90.2,27.35,176.49,51,248.8,69.94,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Floating particles inside footer */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-brand-gold/30 rounded-full animate-float pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-3 h-3 bg-brand-red/20 rounded-full animate-float-slow pointer-events-none" />

      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none animate-pulse-orb" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="#home" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 flex items-center justify-center bg-white shadow-lg shadow-brand-blue/10">
                <img
                  src="/logo.jpg"
                  alt="Adarsh Oxford School Logo"
                  className="w-full h-full object-cover scale-105"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-montserrat font-extrabold text-xl tracking-tight text-white leading-none">
                  ADARSH OXFORD
                </span>
                <span className="font-poppins font-bold text-[9px] sm:text-[10px] text-brand-gold tracking-widest leading-none mt-1.5 uppercase">
                  A Way and a Vision
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Empowering future global leaders through academic excellence, innovation, and holistic development in a state-of-the-art light-filled campus.
            </p>
            <div className="flex items-center gap-3 mt-2">
              {[
                {
                  name: "Facebook",
                  href: "https://facebook.com",
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                    </svg>
                  ),
                },
                {
                  name: "Instagram",
                  href: "https://instagram.com",
                  svg: (
                    <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  name: "Twitter",
                  href: "https://twitter.com",
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  name: "Youtube",
                  href: "https://youtube.com",
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.553a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.553 9.388.553 9.388.553s7.518 0 9.388-.553a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ),
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={social.name}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h3 className="font-montserrat font-bold text-base tracking-wide text-white border-l-2 border-brand-gold pl-3">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              {[
                { name: "About Us", href: "#about" },
                { name: "Why Oxford", href: "#why-choose-us" },
                { name: "Academics", href: "#academics" },
                { name: "Admissions", href: "#contact" },
                { name: "Facilities", href: "#facilities" },
                { name: "Campus Life", href: "#campus-life" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-gold hover:translate-x-1 inline-block transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="font-montserrat font-bold text-base tracking-wide text-white border-l-2 border-brand-gold pl-3">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span>
                  Adarsh Oxford Campus, Seethamadhara, Visakhapatnam, Andhra Pradesh 530013
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <a href="tel:+918978783153" className="hover:text-brand-gold transition-colors">
                  +91 89787 83153
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <a href="mailto:info@oxfordschool.edu.in" className="hover:text-brand-gold transition-colors">
                  info@oxfordschool.edu.in
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="font-montserrat font-bold text-base tracking-wide text-white border-l-2 border-brand-gold pl-3">
              Newsletter
            </h3>
            <p className="text-white/70 text-xs leading-relaxed">
              Stay updated with academic bulletins, achievements, and open registration.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                required
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-brand-gold w-full transition-all"
              />
              <button
                type="submit"
                className="p-3 bg-brand-gold hover:bg-amber-500 text-brand-navy font-bold rounded-xl transition-all flex items-center justify-center shrink-0 hover:scale-105"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <div className="rounded-xl overflow-hidden border border-white/10 aspect-video relative group shadow-lg">
              <div className="absolute inset-0 bg-slate-900/50 flex flex-col items-center justify-center text-center p-3 opacity-100 group-hover:bg-slate-900/30 transition-all duration-300">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold mb-1">
                  Adarsh Oxford Campus
                </span>
                <span className="text-[11px] font-semibold text-white/90">
                  Seethamadhara, Vizag
                </span>
              </div>
              <div
                className="w-full h-full bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-500"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop')",
                }}
              />
            </div>
          </div>

        </div>

        {/* Legal / Copyright details */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-10 text-xs text-white/50">
          <p>© {currentYear} Oxford School of Excellence. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#contact" className="hover:text-brand-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="#contact" className="hover:text-brand-gold transition-colors">
              Terms & Conditions
            </Link>
            <Link href="#contact" className="hover:text-brand-gold transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
