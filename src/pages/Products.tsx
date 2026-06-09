import { useState } from "react";
import { motion } from "framer-motion";
import { TileCard } from "@/components/TileCard";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const allProducts = [
  { id: 1, title: "Nero Marquina", category: "Floor Tiles", image: "/images/collection-1.png" },
  { id: 2, title: "Hexagon Noir", category: "Wall Tiles", image: "/images/collection-2.png" },
  { id: 3, title: "Slate Aggregate", category: "Outdoor Tiles", image: "/images/collection-3.png" },
  { id: 4, title: "Brass Inlay", category: "Decorative Tiles", image: "/images/collection-4.png" },
  { id: 5, title: "Calacatta Gold", category: "Bathroom Tiles", image: "/images/gallery-1.png" },
  { id: 6, title: "Travertine Raw", category: "Floor Tiles", image: "/images/gallery-2.png" },
  { id: 7, title: "Concrete Finish", category: "Wall Tiles", image: "/images/gallery-3.png" },
  { id: 8, title: "Terrazzo Spec", category: "Floor Tiles", image: "/images/gallery-4.png" },
  { id: 9, title: "Limestone Planks", category: "Outdoor Tiles", image: "/images/gallery-5.png" },
  { id: 10, title: "Penny Round", category: "Bathroom Tiles", image: "/images/collection-1.png" },
  { id: 11, title: "Chevron Oak", category: "Floor Tiles", image: "/images/collection-2.png" },
  { id: 12, title: "Grout & Sealant", category: "Tiling Accessories", image: "/images/collection-3.png" },
];

const categories = ["All", "Floor Tiles", "Wall Tiles", "Bathroom Tiles", "Outdoor Tiles", "Decorative Tiles", "Tiling Accessories"];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20">
      <section className="py-20 border-b border-border bg-card">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-display mb-6">Our Collection</h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl">
              Explore our curated selection of premium tiles and materials, engineered for exceptional spaces.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          {/* Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-sm font-medium uppercase tracking-wider border transition-colors ${
                    activeCategory === cat 
                      ? "bg-primary text-black border-primary" 
                      : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                type="text" 
                placeholder="Search collections..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border rounded-none focus-visible:ring-primary h-12"
              />
            </div>
          </div>

          {/* Grid */}
          {filteredProducts.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product) => (
                <TileCard key={product.id} {...product} />
              ))}
            </motion.div>
          ) : (
            <div className="py-20 text-center text-muted-foreground border border-dashed border-border">
              <p>No products found matching your criteria.</p>
              <button 
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="mt-4 text-primary uppercase text-sm font-bold tracking-wider hover:text-white transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
