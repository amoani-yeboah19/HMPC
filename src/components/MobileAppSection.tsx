import { motion } from "framer-motion";

export function MobileAppSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-border">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative h-[600px] flex justify-center lg:justify-end items-center">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full"></div>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-[300px] h-[600px]"
            >
              <img 
                src="/images/collection-2.webp"
                alt="HMPC Mobile App" 
                className="w-full h-full object-cover rounded-[3rem] border-8 border-gray-900 shadow-2xl"
              />
              
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 -left-12 bg-card border border-border p-4 rounded-xl shadow-xl flex items-center gap-3 backdrop-blur-md"
              >
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-sm font-medium">Order Shipped</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-32 -right-8 bg-card border border-border p-4 rounded-xl shadow-xl flex items-center gap-3 backdrop-blur-md"
              >
                <div className="w-8 h-8 bg-muted flex items-center justify-center rounded-md text-primary font-bold">3D</div>
                <span className="text-sm font-medium">View in AR</span>
              </motion.div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-[2px] w-8 bg-primary" />
                <span className="text-primary font-medium tracking-widest uppercase text-sm">HMPC Mobile</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display mb-6">Manage Your Tile Projects Anywhere</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl font-light">
                Browse our complete catalog, request custom quotes, track delivery status, and visualize tiles in your space using AR—all from your smartphone.
              </p>
              
              <ul className="space-y-4 mb-10">
                {['Instant quote generation', 'Real-time order tracking', 'Augmented Reality visualizer', 'Direct contact with consultants'].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black px-6 py-3 rounded-md flex items-center gap-3 hover:bg-gray-200 transition-colors font-semibold">
                  <span>App Store</span>
                </button>
                <button className="bg-transparent border border-white text-white px-6 py-3 rounded-md flex items-center gap-3 hover:bg-white/10 transition-colors font-semibold">
                  <span>Google Play</span>
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
