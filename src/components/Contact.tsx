import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-temple-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-temple-maroon mb-4">
              Connect With Us
            </h2>
            <p className="font-body text-xl text-temple-maroon/80 max-w-2xl mx-auto">
              Ready to begin your artistic journey? Get in touch with us today
            </p>
            <div className="w-32 h-1 bg-temple-gold mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="scroll-frame">
              <h3 className="font-title text-2xl font-bold text-temple-maroon mb-6">
                Send Us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-temple-maroon font-title mb-2">Name</label>
                    <Input className="border-temple-gold/50 focus:border-temple-gold" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-temple-maroon font-title mb-2">Phone</label>
                    <Input className="border-temple-gold/50 focus:border-temple-gold" placeholder="Your phone number" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-temple-maroon font-title mb-2">Email</label>
                  <Input className="border-temple-gold/50 focus:border-temple-gold" placeholder="Your email address" />
                </div>
                
                <div>
                  <label className="block text-temple-maroon font-title mb-2">Course Interest</label>
                  <select className="w-full p-3 border border-temple-gold/50 rounded-md focus:border-temple-gold focus:outline-none bg-white">
                    <option>Select a course</option>
                    <option>Tanjore Painting</option>
                    <option>Kerala Mural Art</option>
                    <option>Mysore Painting</option>
                    <option>All Courses</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-temple-maroon font-title mb-2">Message</label>
                  <Textarea 
                    className="border-temple-gold/50 focus:border-temple-gold min-h-32" 
                    placeholder="Tell us about your interest in traditional art..."
                  />
                </div>
                
                <Button variant="temple" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="scroll-frame">
                <h3 className="font-title text-2xl font-bold text-temple-maroon mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 temple-arch rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-temple-gold" />
                    </div>
                    <div>
                      <h4 className="font-title font-bold text-temple-maroon">Address</h4>
                      <p className="text-temple-maroon/80">
                        123, Temple Street, T. Nagar<br />
                        Chennai, Tamil Nadu - 600017
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 temple-arch rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-temple-gold" />
                    </div>
                    <div>
                      <h4 className="font-title font-bold text-temple-maroon">Phone</h4>
                      <p className="text-temple-maroon/80">+91 98765 43210</p>
                      <p className="text-temple-maroon/80">+91 87654 32109</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 temple-arch rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-temple-gold" />
                    </div>
                    <div>
                      <h4 className="font-title font-bold text-temple-maroon">Email</h4>
                      <p className="text-temple-maroon/80">info@templearts.com</p>
                      <p className="text-temple-maroon/80">admissions@templearts.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 temple-arch rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-temple-gold" />
                    </div>
                    <div>
                      <h4 className="font-title font-bold text-temple-maroon">Timings</h4>
                      <p className="text-temple-maroon/80">Mon - Sat: 9:00 AM - 7:00 PM</p>
                      <p className="text-temple-maroon/80">Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="scroll-frame bg-temple-gold/20">
                <div className="text-center">
                  <MessageCircle className="w-16 h-16 text-temple-maroon mx-auto mb-4" />
                  <h3 className="font-title text-xl font-bold text-temple-maroon mb-2">
                    Quick Chat on WhatsApp
                  </h3>
                  <p className="text-temple-maroon/80 mb-4">
                    Get instant answers to your questions
                  </p>
                  <Button variant="diya" size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat Now
                  </Button>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="scroll-frame">
                <h3 className="font-title text-xl font-bold text-temple-maroon mb-4">Find Us</h3>
                <div className="w-full h-64 bg-temple-gold/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-temple-maroon mx-auto mb-2" />
                    <p className="text-temple-maroon/80">Interactive Map</p>
                    <p className="text-sm text-temple-maroon/60">Google Maps Integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;