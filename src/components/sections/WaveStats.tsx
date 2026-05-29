"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Users, GraduationCap, Award, BookOpen } from "lucide-react";

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

function Counter({ target, suffix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 30));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function WaveStats() {
  const stats = [
    { icon: GraduationCap, value: 5000, suffix: "+", label: "Students Enrolled", color: "text-brand-blue" },
    { icon: Users, value: 150, suffix: "+", label: "Expert Faculty", color: "text-brand-gold" },
    { icon: Award, value: 25, suffix: "+", label: "Years of Excellence", color: "text-brand-cyan" },
    { icon: BookOpen, value: 100, suffix: "%", label: "Board Results", color: "text-brand-blue" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-brand-navy via-brand-navy-mid to-brand-blue relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center text-white glass-card rounded-2xl py-8 px-4 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white/10 group-hover:scale-110 transition-transform ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-montserrat font-extrabold text-white mb-1">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-white/70 font-semibold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
