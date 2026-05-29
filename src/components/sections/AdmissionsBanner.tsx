"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function AdmissionsBanner() {
  const steps = [
    "Fill Online Application Form",
    "Submit Required Documents",
    "Attend School Interaction",
    "Receive Admission Confirmation",
  ];

  return (
    <section id="admissions" className="py-16 sm:py-20 bg-[#0D47A1] relative overflow-hidden">

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full border-4 border-white -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full border-4 border-white translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full border-2 border-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 text-xs font-bold px-4 py-2 rounded-sm mb-6 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-900 animate-pulse" />
              Admissions Open — Session 2026-27
            </div>

            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-white leading-tight mb-4">
              Secure Your Child's
              <span className="block text-yellow-300">Future Today!</span>
            </h2>

            <p className="text-white/80 text-base leading-relaxed mb-8">
              Limited seats available. Join Adarsh Oxford English Medium School — where every child discovers their potential and every dream takes flight.
            </p>

            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <div className="w-7 h-7 rounded-full bg-yellow-400 text-blue-900 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-white text-xs font-semibold">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="font-montserrat font-bold text-[#0D1B2A] text-xl mb-6">
              Quick Enquiry Form
            </h3>

            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#455A64] block mb-1.5">Student Name *</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-[#BBDEFB] rounded-lg px-3 py-2.5 text-sm text-[#0D1B2A] focus:outline-none focus:border-[#1565C0] focus:ring-1 focus:ring-[#1565C0] transition-all placeholder-[#90A4AE]"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#455A64] block mb-1.5">Applying for Class *</label>
                  <select className="w-full border border-[#BBDEFB] rounded-lg px-3 py-2.5 text-sm text-[#0D1B2A] focus:outline-none focus:border-[#1565C0] focus:ring-1 focus:ring-[#1565C0] transition-all">
                    <option>Pre-KG / LKG / UKG</option>
                    <option>Grade 1 – 5</option>
                    <option>Grade 6 – 8</option>
                    <option>Grade 9 – 10</option>
                    <option>Grade 11 – 12</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#455A64] block mb-1.5">Parent Name *</label>
                <input
                  type="text"
                  placeholder="Parent / Guardian Name"
                  className="w-full border border-[#BBDEFB] rounded-lg px-3 py-2.5 text-sm text-[#0D1B2A] focus:outline-none focus:border-[#1565C0] focus:ring-1 focus:ring-[#1565C0] transition-all placeholder-[#90A4AE]"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#455A64] block mb-1.5">Mobile Number *</label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full border border-[#BBDEFB] rounded-lg px-3 py-2.5 text-sm text-[#0D1B2A] focus:outline-none focus:border-[#1565C0] focus:ring-1 focus:ring-[#1565C0] transition-all placeholder-[#90A4AE]"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center mt-2"
              >
                Submit Enquiry
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-xs text-[#78909C]">
                Or call us directly: <a href="tel:+918978783153" className="text-[#1565C0] font-bold hover:underline">+91 89787 83153</a>
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
