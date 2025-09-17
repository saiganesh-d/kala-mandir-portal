import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Users, Award, BookOpen } from 'lucide-react';
import tanjoureSample from '@/assets/tanjore-sample.jpg';
import keralaMuralSample from '@/assets/kerala-mural-sample.jpg';
import mysoreSample from '@/assets/mysore-sample.jpg';

const mainCourses = [
  {
    title: 'Tanjore Painting',
    description: 'Master the classical art of Tanjore with rich gold work and vibrant colors. Learn traditional techniques passed down through generations.',
    image: tanjoureSample,
    duration: '3 months',
    students: '8-10',
    level: 'Beginner to Advanced',
    features: ['Gold leaf application', 'Traditional gesso preparation', 'Classical compositions', 'Certificate upon completion']
  },
  {
    title: 'Kerala Mural Art',
    description: 'Discover the mystical world of Kerala murals with their earthy tones and flowing lines. Learn ancient temple painting techniques.',
    image: keralaMuralSample,
    duration: '4 months',
    students: '6-8',
    level: 'Intermediate',
    features: ['Natural pigment preparation', 'Traditional brushwork', 'Deity compositions', 'Wall painting techniques']
  },
  {
    title: 'Mysore Painting',
    description: 'Explore the delicate art of Mysore paintings with soft colors and intricate details. Perfect for beginners to traditional art.',
    image: mysoreSample,
    duration: '2 months',
    students: '10-12',
    level: 'Beginner',
    features: ['Soft color techniques', 'Fine detailing', 'Traditional motifs', 'Personal portfolio creation']
  }
];

const allCourses = [
  'Tanjore Paintings',
  'Kerala Mural Paintings', 
  'Mysore Paintings',
  'Rajasthani Relief Paintings',
  'Oil Paintings',
  'Acrylic Paintings',
  'Fabric Paintings',
  'Abstract Paintings',
  'Textured Paintings',
  'Pichwai Paintings',
  'Persian Art',
  'Resin Art',
  'Terracotta Work',
  'Pot Paintings',
  'Knitting & Crochet',
  'Hand Embroidery'
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-stone-texture">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-temple-maroon mb-4">
              Kalaa Kuteer Art Classes
            </h2>
            <div className="inline-block bg-temple-gold text-temple-maroon font-bold px-6 py-2 rounded-lg transform -rotate-2 mb-4">
              WEEKEND CLASSES FOR
            </div>
            <div className="inline-block bg-temple-gold/20 text-temple-maroon font-title px-4 py-2 rounded-lg ml-4">
              Teachers with 30+ years experience
            </div>
            <div className="w-32 h-1 bg-temple-gold mx-auto rounded-full mt-6"></div>
          </div>

          {/* Main Featured Courses */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {mainCourses.map((course, index) => (
              <div key={index} className="temple-card group cursor-pointer">
                {/* Course Image in Temple Arch */}
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-temple-maroon/20 group-hover:bg-temple-maroon/10 transition-all duration-300"></div>
                </div>

                {/* Course Content */}
                <div className="p-6 bg-temple-beige/90 rounded-lg">
                  <h3 className="font-title text-2xl font-bold text-temple-maroon mb-3">
                    {course.title}
                  </h3>
                  
                  <p className="font-body text-temple-maroon/80 mb-4">
                    {course.description}
                  </p>

                  {/* Course Details */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-temple-maroon/70">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-temple-maroon/70">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{course.students} students per batch</span>
                    </div>
                    <div className="flex items-center gap-2 text-temple-maroon/70">
                      <Award className="w-4 h-4" />
                      <span className="text-sm">{course.level}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-title font-bold text-temple-maroon mb-2 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      What You'll Learn
                    </h4>
                    <ul className="space-y-1">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-temple-maroon/70 flex items-center gap-2">
                          <div className="w-2 h-2 bg-temple-gold rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Button variant="temple" className="w-full">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Complete Course List */}
          <div className="scroll-frame max-w-4xl mx-auto mb-16">
            <div className="text-center mb-8">
              <div className="inline-block bg-temple-gold text-temple-maroon px-8 py-3 rounded-lg font-heading text-2xl font-bold transform rotate-1">
                JOIN NOW
              </div>
            </div>
            
            <h3 className="font-title text-2xl font-bold text-temple-maroon mb-6 text-center">
              Complete Course Offerings
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {allCourses.map((course, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-temple-gold/10 transition-colors">
                  <div className="w-3 h-3 bg-temple-gold rounded-full"></div>
                  <span className="font-body text-temple-maroon font-medium">{course}</span>
                </div>
              ))}
              <div className="md:col-span-2 text-center mt-4">
                <span className="font-body text-temple-maroon/80 text-lg font-medium">
                  AND MUCH MORE...
                </span>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="scroll-frame max-w-2xl mx-auto">
              <h3 className="font-title text-2xl font-bold text-temple-maroon mb-4">
                Ready to Begin Your Artistic Journey?
              </h3>
              <p className="font-body text-temple-maroon/80 mb-6">
                Join our community of artists and discover the sacred traditions of art with our experienced teachers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="diya" size="lg">
                  📞 Call Now to Book
                </Button>
                <Button variant="stone" size="lg">
                  💬 WhatsApp Us
                </Button>
                <Button variant="temple" size="lg">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;