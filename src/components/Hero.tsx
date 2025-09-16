import React from 'react';
import { Button } from '@/components/ui/button';
import { Palette, Award, Users } from 'lucide-react';
import templeHero from '@/assets/temple-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={templeHero} 
          alt="Traditional South Indian Temple" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-temple-maroon/60"></div>
      </div>

      {/* Temple Arch Frame */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-64 h-16 temple-arch rounded-full opacity-80"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Scroll frame for main content */}
          <div className="scroll-frame bg-temple-beige/95 border-4 border-temple-gold">
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-temple-maroon mb-6">
              Traditional South Indian
              <span className="block text-temple-gold">Art Academy</span>
            </h1>
            
            <p className="font-body text-xl md:text-2xl text-temple-maroon/80 mb-8 leading-relaxed">
              Master the sacred arts of Tanjore, Kerala Murals, and Mysore Paintings 
              under the guidance of traditional masters
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="temple" size="lg" className="text-lg px-8 py-6">
                <Palette className="w-5 h-5 mr-2" />
                Explore Courses
              </Button>
              <Button variant="stone" size="lg" className="text-lg px-8 py-6">
                <Users className="w-5 h-5 mr-2" />
                Book Trial Class
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 temple-arch rounded-full flex items-center justify-center">
                  <Award className="w-10 h-10 text-temple-gold" />
                </div>
                <h3 className="font-title text-2xl font-bold text-temple-maroon">15+ Years</h3>
                <p className="text-temple-maroon/70">Experience</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 temple-arch rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-temple-gold" />
                </div>
                <h3 className="font-title text-2xl font-bold text-temple-maroon">500+</h3>
                <p className="text-temple-maroon/70">Students Trained</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 temple-arch rounded-full flex items-center justify-center">
                  <Palette className="w-10 h-10 text-temple-gold" />
                </div>
                <h3 className="font-title text-2xl font-bold text-temple-maroon">5</h3>
                <p className="text-temple-maroon/70">Art Forms</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-8 left-8 w-16 h-16 temple-arch rounded-full diya-glow"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 temple-arch rounded-full diya-glow"></div>
    </section>
  );
};

export default Hero;