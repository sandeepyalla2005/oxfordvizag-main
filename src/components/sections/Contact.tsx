"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Clock, Send, GraduationCap } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    grade: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        grade: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="section-tag">Contact Us</span>
          <h2 className="section-title mt-4 mb-4">
            Get in <span>Touch With Us</span>
          </h2>
          <div className="blue-divider mx-auto mb-4" />
          <p className="text-[#455A64] text-base max-w-2xl mx-auto">
            Have questions about admissions, fees, academic programs, or facilities? We&apos;re here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 sm:p-10 rounded-3xl border border-white shadow-xl relative overflow-hidden"
            >
              <h3 className="font-montserrat font-bold text-xl text-brand-navy mb-6">
                Admission Enquiry Form
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-brand-blue/5 border border-brand-blue/20 rounded-2xl p-6 text-center flex flex-col items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h4 className="font-montserrat font-bold text-base text-brand-navy">
                    Enquiry Submitted Successfully!
                  </h4>
                  <p className="text-xs text-brand-navy/70 max-w-xs leading-relaxed">
                    Thank you for choosing Adarsh Oxford. Our admissions counselor will contact you at your provided phone number within the next 24 working hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-brand-navy/60 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="bg-brand-navy/5 border border-brand-navy/10 rounded-xl px-4 py-3 text-sm text-brand-navy focus:outline-none focus:border-brand-blue focus:bg-white w-full transition-all"
                        placeholder="Parent / Guardian Name"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-brand-navy/60 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-brand-navy/5 border border-brand-navy/10 rounded-xl px-4 py-3 text-sm text-brand-navy focus:outline-none focus:border-brand-blue focus:bg-white w-full transition-all"
                        placeholder="10-digit number"
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-brand-navy/60 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-brand-navy/5 border border-brand-navy/10 rounded-xl px-4 py-3 text-sm text-brand-navy focus:outline-none focus:border-brand-blue focus:bg-white w-full transition-all"
                        placeholder="parent@email.com"
                      />
                    </div>

                    {/* Target Grade */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-brand-navy/60 uppercase tracking-wider">
                        Admission Grade
                      </label>
                      <select
                        required
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="bg-brand-navy/5 border border-brand-navy/10 rounded-xl px-4 py-3 text-sm text-brand-navy/80 focus:outline-none focus:border-brand-blue focus:bg-white w-full transition-all"
                      >
                        <option value="">Select Grade</option>
                        <option value="kg">Pre-Primary</option>
                        <option value="primary">Primary (1 - 5)</option>
                        <option value="middle">Middle School (6 - 8)</option>
                        <option value="high">High School (9 - 12)</option>
                      </select>
                    </div>

                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-brand-navy/60 uppercase tracking-wider">
                      Additional Message / Details
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-brand-navy/5 border border-brand-navy/10 rounded-xl px-4 py-3 text-sm text-brand-navy focus:outline-none focus:border-brand-blue focus:bg-white w-full transition-all resize-none"
                      placeholder="Share details like competitive exam preparation requirements, sports preferences, boarding needs, etc."
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-brand-gold to-amber-500 hover:from-amber-600 hover:to-brand-gold text-white font-poppins font-extrabold text-base rounded-xl py-4 shadow-lg shadow-brand-gold/15 hover:shadow-brand-gold/25 transition-all transform hover:-translate-y-0.5 hover:scale-[1.02] flex items-center justify-center gap-2 group mt-2"
                  >
                    Submit Enquiry Form
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                </form>
              )}
            </motion.div>
          </div>

          {/* Right Column: Info & Map Card */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Info Items */}
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: MapPin,
                  title: "Campus Address",
                  detail: "Adarsh Oxford Campus, Seethamadhara, Visakhapatnam, AP - 530013",
                },
                {
                  icon: Phone,
                  title: "Admissions Phone",
                  detail: "+91 89787 83153",
                },
                {
                  icon: Mail,
                  title: "Admissions Email",
                  detail: "admissions@adarshoxford.edu.in",
                },
                {
                  icon: Clock,
                  title: "Visitor Working Hours",
                  detail: "Monday - Saturday: 08:30 AM - 04:30 PM",
                },
              ].map((item, idx) => {
                const InfoIcon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0 shadow-sm">
                      <InfoIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-sm text-brand-navy leading-none">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-brand-navy/70 mt-1.5 leading-relaxed font-normal">
                        {item.detail}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Premium Simulated Map Container */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-video relative group"
            >
              {/* Overlay with subtle blur and details */}
              <div className="absolute inset-0 bg-slate-900/60 flex flex-col items-center justify-center text-center p-4 z-10 transition-colors group-hover:bg-slate-900/40">
                <div className="w-10 h-10 rounded-xl bg-brand-gold flex items-center justify-center text-brand-navy mb-2 shadow-lg">
                  <MapPin className="w-5 h-5 fill-current" />
                </div>
                <h4 className="font-montserrat font-bold text-sm text-white">
                  Adarsh Oxford Campus
                </h4>
                <p className="text-[10px] text-white/80 uppercase tracking-widest mt-1">
                  Seethamadhara, Visakhapatnam
                </p>
              </div>

              {/* Simulated Map visual */}
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')",
                }}
              />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
