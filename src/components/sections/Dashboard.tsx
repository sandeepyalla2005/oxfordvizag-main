"use client";

import { motion } from "framer-motion";
import { CreditCard, GraduationCap, FileText, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const actions = [
    {
      icon: CreditCard,
      title: "Online Fee Payment",
      desc: "Pay academic tuition and hostel fees securely online via our portal.",
      label: "Pay Fees Online",
      href: "#contact",
      color: "border-l-4 border-blue-600",
      iconBg: "bg-blue-50 text-blue-600",
    },
    {
      icon: GraduationCap,
      title: "Admission Enquiry 2026-27",
      desc: "Submit enrollment inquiry form for classes Pre-KG to Grade XII.",
      label: "Enquire Online",
      href: "#contact",
      color: "border-l-4 border-[#F57F17]",
      iconBg: "bg-amber-50 text-[#F57F17]",
    },
    {
      icon: FileText,
      title: "Latest School Circulars",
      desc: "Access the updated curriculum directives and official school notices.",
      label: "View Circulars",
      href: "#events-news",
      color: "border-l-4 border-emerald-600",
      iconBg: "bg-emerald-50 text-emerald-600",
    },
    {
      icon: BookOpen,
      title: "E-Prospectus & Magazine",
      desc: "Download our official school handbook and yearly magazine editions.",
      label: "Download Handbook",
      href: "#events-news",
      color: "border-l-4 border-rose-600",
      iconBg: "bg-rose-50 text-rose-600",
    },
  ];

  return (
    <section className="relative z-10 w-full -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {actions.map((act, idx) => (
          <motion.div
            key={act.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between ${act.color} group`}
          >
            <div>
              <div className={`w-12 h-12 rounded-lg ${act.iconBg} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                <act.icon className="w-6 h-6 font-semibold" />
              </div>
              <h3 className="font-montserrat font-bold text-base text-[#0B2540] mb-2 group-hover:text-[#1565C0] transition-colors">
                {act.title}
              </h3>
              <p className="font-poppins text-xs text-slate-500 leading-relaxed mb-5">
                {act.desc}
              </p>
            </div>
            <Link
              href={act.href}
              className="inline-flex items-center justify-center w-full bg-slate-50 hover:bg-[#1565C0] text-[#0B2540] hover:text-white font-poppins font-bold text-xs py-2.5 rounded transition-all duration-300 border border-slate-100 group-hover:border-transparent"
            >
              {act.label}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
