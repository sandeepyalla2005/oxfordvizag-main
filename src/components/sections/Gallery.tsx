"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [filter, setFilter] = useState("all");

  const categories = ["all", "campus", "academics", "sports", "events"];

  const images = [
    {
      id: 1,
      category: "campus",
      title: "State of the Art Buildings",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 2,
      category: "academics",
      title: "Advanced Biology Experiments",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 3,
      category: "sports",
      title: "Inter-School Tennis Finals",
      image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 4,
      category: "academics",
      title: "Creative Scratch Coding Lab",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 5,
      category: "events",
      title: "Annual Performing Arts Gala",
      image: "https://images.unsplash.com/photo-1460518451285-cd7ba78a256a?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 6,
      category: "campus",
      title: "Bright Central Reading Hall",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const filteredImages = filter === "all" ? images : images.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="section-tag">Photo Gallery</span>
          <h2 className="section-title mt-4 mb-4">
            Life at <span>OXFORD</span>
          </h2>
          <div className="blue-divider mx-auto mb-4" />
          <p className="text-[#455A64] text-base max-w-2xl mx-auto">
            A visual journey through our vibrant campus, academics, sports, and events.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-semibold text-xs uppercase tracking-wider px-5 py-2 rounded-full border transition-all duration-300 ${
                filter === cat
                  ? "bg-[#1565C0] text-white border-[#1565C0] shadow-sm"
                  : "bg-white border-[#BBDEFB] text-[#455A64] hover:border-[#1565C0] hover:text-[#1565C0]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filtered Grid */}
        <div className="relative min-h-[400px]">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-4 border-white group cursor-pointer"
                >
                  {/* Subtle dark-tint overlay for text contrast */}
                  <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-brand-navy/40 transition-all duration-300 z-10" />
                  
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{
                      backgroundImage: `url('${img.image}')`,
                    }}
                  />

                  {/* Absolute Text Banner */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[9px] uppercase font-extrabold tracking-widest text-brand-gold bg-brand-gold/10 border border-brand-gold/25 rounded px-2 py-0.5 inline-block">
                      {img.category}
                    </span>
                    <h3 className="font-montserrat font-bold text-base mt-2 leading-tight">
                      {img.title}
                    </h3>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
