import React from 'react';
import { Heart, Facebook, Instagram, Youtube, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-temple-maroon text-temple-gold">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Academy Info */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">Temple Arts Academy</h3>
            <p className="text-temple-beige mb-4 leading-relaxed">
              Preserving and propagating the sacred traditions of South Indian classical arts 
              through dedicated teaching and authentic techniques.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 temple-arch rounded-full flex items-center justify-center diya-glow cursor-pointer">
                <Facebook className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 temple-arch rounded-full flex items-center justify-center diya-glow cursor-pointer">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 temple-arch rounded-full flex items-center justify-center diya-glow cursor-pointer">
                <Youtube className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-title text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-temple-beige hover:text-temple-gold transition-colors">Home</a></li>
              <li><a href="#about" className="text-temple-beige hover:text-temple-gold transition-colors">About Us</a></li>
              <li><a href="#courses" className="text-temple-beige hover:text-temple-gold transition-colors">Courses</a></li>
              <li><a href="#gallery" className="text-temple-beige hover:text-temple-gold transition-colors">Gallery</a></li>
              <li><a href="#schedule" className="text-temple-beige hover:text-temple-gold transition-colors">Schedule</a></li>
              <li><a href="#contact" className="text-temple-beige hover:text-temple-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-title text-xl font-bold mb-4">Our Courses</h4>
            <ul className="space-y-2">
              <li className="text-temple-beige">Tanjore Painting</li>
              <li className="text-temple-beige">Kerala Mural Art</li>
              <li className="text-temple-beige">Mysore Painting</li>
              <li className="text-temple-beige">Traditional Sketching</li>
              <li className="text-temple-beige">Gold Leaf Application</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-title text-xl font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-temple-gold" />
                <span className="text-temple-beige">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-temple-gold" />
                <span className="text-temple-beige">info@templearts.com</span>
              </div>
              <div className="text-temple-beige text-sm">
                <p>123, Temple Street, T. Nagar</p>
                <p>Chennai, Tamil Nadu - 600017</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Diyas */}
      <div className="border-t border-temple-gold/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 mb-4">
            {[...Array(9)].map((_, i) => (
              <div key={i} className={`w-3 h-3 temple-arch rounded-full ${i % 2 === 0 ? 'diya-glow' : ''}`}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-temple-gold/30 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-temple-beige text-sm mb-2 md:mb-0">
              © 2024 Temple Arts Academy. All rights reserved.
            </p>
            <p className="text-temple-beige text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-temple-gold" fill="currentColor" /> for preserving our heritage
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;