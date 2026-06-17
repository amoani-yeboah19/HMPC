import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/">
          <div className="text-2xl font-bold tracking-tighter flex items-baseline cursor-pointer">
            HMPC<span className="text-primary text-3xl leading-none">.</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path}>
              <div
                className={`text-sm font-medium tracking-wide uppercase relative cursor-pointer ${
                  location === link.path ? "text-primary" : "text-foreground hover:text-primary transition-colors"
                }`}
              >
                {link.name}
                {location === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            </Link>
          ))}
          <Link href="/contact">
            <div className="ml-2 cursor-pointer bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-black transition-all hover:shadow-[0_0_30px_-8px_hsl(48,100%,50%)]">
              Get a Quote
            </div>
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-6">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <div
                    className={`text-lg font-medium uppercase tracking-wider cursor-pointer ${
                      location === link.path ? "text-primary" : "text-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </div>
                </Link>
              ))}
              <Link href="/contact">
                <div
                  className="mt-2 cursor-pointer bg-primary px-6 py-3 text-center text-sm font-bold uppercase tracking-widest text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Quote
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
