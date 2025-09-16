import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-temple-maroon border-b-4 border-temple-gold">
      {/* Top contact bar */}
      <div className="bg-temple-maroon/90 py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6 text-temple-gold">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@templearts.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-temple-gold">
            <MapPin className="w-4 h-4" />
            <span>Chennai, Tamil Nadu</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="py-4 px-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="temple-arch p-3 rounded-lg">
            <h1 className="text-temple-gold font-heading text-2xl font-bold">
              Temple Arts Academy
            </h1>
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-temple-gold hover:text-temple-beige transition-colors duration-300 font-title">
              Home
            </a>
            <a href="#about" className="text-temple-gold hover:text-temple-beige transition-colors duration-300 font-title">
              About
            </a>
            <a href="#courses" className="text-temple-gold hover:text-temple-beige transition-colors duration-300 font-title">
              Courses
            </a>
            <a href="#gallery" className="text-temple-gold hover:text-temple-beige transition-colors duration-300 font-title">
              Gallery
            </a>
            <a href="#schedule" className="text-temple-gold hover:text-temple-beige transition-colors duration-300 font-title">
              Schedule
            </a>
            <a href="#contact" className="text-temple-gold hover:text-temple-beige transition-colors duration-300 font-title">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <Button variant="diya" size="lg" className="hidden md:block">
            Enroll Now
          </Button>
        </div>
      </nav>

      {/* Decorative bottom border */}
      <div className="h-1 bg-gradient-to-r from-temple-gold via-temple-beige to-temple-gold"></div>
    </header>
  );
};

export default Header;