"use client";

import { Mail, Phone, MapPin, ChevronRight, Award } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B2540] text-slate-300 font-poppins pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        
        {/* ================= MAIN 4-COLUMN GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: School Emblem & Brief Description */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link href="#home" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-white/10 flex items-center justify-center bg-white shadow-sm">
                <img
                  src="/logo.jpg"
                  alt="Adarsh Oxford School Logo"
                  className="w-full h-full object-cover scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-montserrat font-extrabold text-[17px] tracking-tight text-white leading-none">
                  ADARSH OXFORD
                </span>
                <span className="font-poppins font-bold text-[8.5px] text-[#F57F17] tracking-widest leading-none mt-1.5 uppercase">
                  English Medium School
                </span>
              </div>
            </Link>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Dedicated to delivering world-class CBSE education in Seethamadhara, Visakhapatnam. Nurturing future leaders through values-based conceptual pedagogy.
            </p>

            <div className="text-xs flex items-center gap-2 text-slate-400">
              <Award className="w-4 h-4 text-[#F57F17] shrink-0" />
              <span>CBSE Affiliation Number: 130132</span>
            </div>

            {/* Clean inline SVG social links */}
            <div className="flex items-center gap-2.5 mt-1">
              {[
                {
                  name: "Facebook",
                  href: "https://facebook.com",
                  svg: (
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                    </svg>
                  ),
                },
                {
                  name: "Instagram",
                  href: "https://instagram.com",
                  svg: (
                    <svg className="w-3.5 h-3.5 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  name: "Youtube",
                  href: "https://youtube.com",
                  svg: (
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.553a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.553 9.388.553 9.388.553s7.518 0 9.388-.553a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ),
                },
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded border border-slate-700 hover:border-[#F57F17] hover:bg-[#F57F17] hover:text-white flex items-center justify-center transition-colors text-slate-400"
                  aria-label={soc.name}
                >
                  {soc.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Academic Divisions */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="font-montserrat font-bold text-xs tracking-wider text-white uppercase border-l-2 border-[#F57F17] pl-3">
              Divisions
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-400">
              {[
                { name: "Kindergarten", href: "#academics" },
                { name: "Primary Section", href: "#academics" },
                { name: "Secondary Section", href: "#academics" },
                { name: "Senior Secondary", href: "#academics" },
              ].map((item) => (
                <li key={item.name} className="flex items-center gap-1 group">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#F57F17] transition-colors" />
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Parent & Mandatory Resources */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="font-montserrat font-bold text-xs tracking-wider text-white uppercase border-l-2 border-[#F57F17] pl-3">
              Admissions &amp; Info
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-400">
              {[
                { name: "Online Fee Payment Portal", href: "#contact" },
                { name: "Admission Enquiry 2026-27", href: "#contact" },
                { name: "Download School circulars", href: "#events-news" },
                { name: "CBSE Mandatory Disclosures", href: "#about" },
                { name: "E-Prospectus / Handbooks", href: "#events-news" },
              ].map((item) => (
                <li key={item.name} className="flex items-center gap-1 group">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#F57F17] transition-colors" />
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Credentials & Maps */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="font-montserrat font-bold text-xs tracking-wider text-white uppercase border-l-2 border-[#F57F17] pl-3">
              Reach Campus
            </h3>
            <ul className="flex flex-col gap-3.5 text-xs text-slate-400">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-[#F57F17] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Adarsh Oxford Campus, Seethamadhara, Visakhapatnam, AP - 530013
                </span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-[#F57F17] shrink-0" />
                <a href="tel:+918978783153" className="hover:text-white transition-colors">
                  +91 89787 83153
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-[#F57F17] shrink-0" />
                <a href="mailto:info@adarshoxford.edu.in" className="hover:text-white transition-colors">
                  admissions@adarshoxford.edu.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ================= COPYRIGHT / LEGAL LINE ================= */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 text-[10.5px] text-slate-500 font-medium">
          <p>© {currentYear} Adarsh Oxford School. All Rights Reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="#contact" className="hover:text-white transition-colors">
              Mandatory Disclosures
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
