import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryItems = [
  { id: 1, src: "/images/gallery-1.webp", title: "Luxury Bathroom", category: "Residential" },
  { id: 2, src: "/images/gallery-2.webp", title: "Grand Hotel Lobby", category: "Hospitality" },
  { id: 3, src: "/images/gallery-3.webp", title: "Modern Kitchen", category: "Residential" },
  { id: 4, src: "/images/gallery-4.webp", title: "Tech Corp HQ", category: "Commercial" },
  { id: 5, src: "/images/gallery-5.webp", title: "Oceanfront Terrace", category: "Residential" },
  { id: 6, src: "/images/hero.webp", title: "Penthouse Floors", category: "Residential" },
  { id: 7, src: "/images/collection-1.webp", title: "Retail Showroom", category: "Commercial" },
  { id: 8, src: "/images/collection-2.webp", title: "Boutique Spa", category: "Hospitality" },
  { id: 9, src: "/images/collection-3.webp", title: "Plaza Exterior", category: "Commercial" },
];

const categories = ["All", "Residential", "Commercial", "Hospitality"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = galleryItems.filter(
    item => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="pt-24 pb-20">
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-display mb-6">Project Gallery</h1>
            <p className="text-xl text-muted-foreground font-light mb-12">
              A showcase of precision and luxury. View our completed installations across various sectors.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 text-sm font-bold uppercase tracking-wider border-b-2 transition-all ${
                    activeCategory === cat 
                      ? "border-primary text-primary" 
                      : "border-transparent text-muted-foreground hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <AnimatePresence>
              {filteredItems.map((item, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  className="group relative aspect-square overflow-hidden bg-card cursor-pointer"
                >
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-colors duration-300 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100">
                    <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.category}
                    </span>
                    <h3 className="text-white text-2xl font-display transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
