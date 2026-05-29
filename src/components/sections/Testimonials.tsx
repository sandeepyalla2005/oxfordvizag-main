"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const list = [
    {
      quote:
        "The academic transition at Adarsh Oxford has been remarkable for my son. The instructors teach conceptually rather than encouraging rote memorization. The bright, airy labs and child-safe facilities give us absolute peace of mind.",
      author: "Mrs. Sunita Sharma",
      role: "Parent of Class 8 Student",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    },
    {
      quote:
        "What truly differentiates Adarsh Oxford is its elite coding and robotics initiatives. My daughter built her own smart waste recycling program in class. The focus on public debate alongside academics builds high confidence in kids.",
      author: "Dr. Rajesh K. Varma",
      role: "Parent of Class 10 Student",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    },
    {
      quote:
        "I was admitted to Stanford University with a major scholarship, which was a lifelong dream. The counselors at Adarsh Oxford worked individually with me, refining my research projects and essay compositions. I owe them so much.",
      author: "Devendra Kumar",
      role: "Class of 2026 Alumnus",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % list.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + list.length) % list.length);
  };

  return (
    <section
      id="testimonials"
      className="py-24 sm:py-28 bg-gradient-to-br from-bg-soft via-bg-ice to-white relative overflow-hidden"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 flex flex-col gap-3">
          <span className="text-sm font-bold text-brand-blue tracking-widest uppercase">
            Parent & Student Trust
          </span>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-brand-navy tracking-tight leading-tight">
            Loved by Parents, Trusted by Top Universities
          </h2>
          <p className="text-brand-navy/70 text-base max-w-xl mx-auto leading-relaxed">
            Read direct experiences from parents and elite alumni who have walked our halls and achieved outstanding heights.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative flex flex-col items-center">
          
          {/* Decorative Quote Icon Background */}
          <div className="absolute -top-10 left-4 text-brand-blue/5 pointer-events-none hidden sm:block">
            <Quote className="w-36 h-36 rotate-180" />
          </div>

          <div className="min-h-[280px] w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-card p-8 sm:p-12 rounded-3xl border border-white shadow-xl relative z-10 flex flex-col gap-6"
              >
                {/* Star rating */}
                <div className="flex gap-1 text-brand-gold">
                  {[...Array(list[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-brand-navy/80 font-poppins text-base sm:text-lg md:text-xl italic leading-relaxed font-medium">
                  &ldquo;{list[activeIndex].quote}&rdquo;
                </p>

                {/* Profile row */}
                <div className="flex items-center gap-4 border-t border-brand-navy/5 pt-6 mt-2">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${list[activeIndex].avatar}')`,
                      }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-montserrat font-bold text-sm sm:text-base text-brand-navy">
                      {list[activeIndex].author}
                    </h4>
                    <span className="font-poppins text-xs text-brand-navy/60">
                      {list[activeIndex].role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 mt-8 relative z-20">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white hover:bg-brand-blue border border-brand-navy/10 hover:border-brand-blue text-brand-navy hover:text-white flex items-center justify-center shadow-md transition-all transform hover:-translate-x-0.5"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-navy/40">
              {list.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeIndex === idx ? "bg-brand-blue w-6" : "bg-brand-navy/20"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white hover:bg-brand-blue border border-brand-navy/10 hover:border-brand-blue text-brand-navy hover:text-white flex items-center justify-center shadow-md transition-all transform hover:translate-x-0.5"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
