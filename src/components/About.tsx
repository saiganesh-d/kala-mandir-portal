import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Star, BookOpen } from 'lucide-react';
import teacherPortrait from '@/assets/teacher-portrait.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-temple-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-temple-maroon mb-4">
              About Our Guru
            </h2>
            <div className="w-32 h-1 bg-temple-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Teacher Photo in Lotus Frame */}
            <div className="relative">
              <div className="temple-arch p-4 rounded-lg">
                <img 
                  src={teacherPortrait} 
                  alt="Smt. Lakshmi Devi - Traditional Art Teacher" 
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 temple-arch rounded-full diya-glow"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 temple-arch rounded-full diya-glow"></div>
            </div>

            {/* Content */}
            <div className="scroll-frame">
              <h3 className="font-title text-3xl font-bold text-temple-maroon mb-6">
                Smt. Lakshmi Devi
              </h3>
              
              <p className="font-body text-lg text-temple-maroon/80 mb-6 leading-relaxed">
                With over 15 years of experience in traditional South Indian art forms, 
                Smt. Lakshmi Devi is a renowned artist and teacher who has dedicated her 
                life to preserving and propagating the sacred art traditions of our culture.
              </p>
              
              <p className="font-body text-lg text-temple-maroon/80 mb-6 leading-relaxed">
                Trained under master artists in Thanjavur and Kerala, she specializes in 
                Tanjore paintings, Kerala murals, and Mysore paintings. Her work has been 
                exhibited in galleries across India and her students have won numerous awards.
              </p>

              {/* Achievements */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-temple-gold/20 rounded-lg">
                  <Heart className="w-8 h-8 text-temple-maroon mx-auto mb-2" />
                  <h4 className="font-title font-bold text-temple-maroon">15+ Years</h4>
                  <p className="text-sm text-temple-maroon/70">Teaching</p>
                </div>
                
                <div className="text-center p-4 bg-temple-gold/20 rounded-lg">
                  <Star className="w-8 h-8 text-temple-maroon mx-auto mb-2" />
                  <h4 className="font-title font-bold text-temple-maroon">25+ Awards</h4>
                  <p className="text-sm text-temple-maroon/70">Received</p>
                </div>
                
                <div className="text-center p-4 bg-temple-gold/20 rounded-lg">
                  <BookOpen className="w-8 h-8 text-temple-maroon mx-auto mb-2" />
                  <h4 className="font-title font-bold text-temple-maroon">3 Books</h4>
                  <p className="text-sm text-temple-maroon/70">Published</p>
                </div>
              </div>

              <Button variant="temple" size="lg">
                Learn More About Our Heritage
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative hanging bells pattern */}
      <div className="mt-16 flex justify-center">
        <div className="flex gap-4">
          {[...Array(7)].map((_, i) => (
            <div key={i} className={`w-3 h-3 temple-arch rounded-full ${i % 2 === 0 ? 'diya-glow' : ''}`}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;