import { Link } from "wouter";
import { Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/">
              <div className="text-3xl font-bold tracking-tighter flex items-baseline mb-6 cursor-pointer">
                HMPC<span className="text-primary text-4xl leading-none">.</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Precision tiling. Enduring luxury. Elevating architectural spaces through uncompromising craftsmanship and premium materials.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-black transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-black transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-black transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display tracking-widest text-xl mb-6">Navigation</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">Home</span></Link></li>
              <li><Link href="/about"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">About Us</span></Link></li>
              <li><Link href="/products"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">Products</span></Link></li>
              <li><Link href="/services"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">Services</span></Link></li>
              <li><Link href="/gallery"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">Gallery</span></Link></li>
              <li><Link href="/contact"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">Contact</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display tracking-widest text-xl mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-muted-foreground text-sm">Commercial Installation</li>
              <li className="text-muted-foreground text-sm">Residential Luxury</li>
              <li className="text-muted-foreground text-sm">Bespoke Mosaics</li>
              <li className="text-muted-foreground text-sm">Surface Restoration</li>
              <li className="text-muted-foreground text-sm">Material Sourcing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display tracking-widest text-xl mb-6">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">124 Industrial Way, Design District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">contact@hmpc.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} HMPC Tiling. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
