import React, { useState } from 'react';
import { X } from 'lucide-react';
import tanjoureSample from '@/assets/tanjore-sample.jpg';
import keralaMuralSample from '@/assets/kerala-mural-sample.jpg';
import mysoreSample from '@/assets/mysore-sample.jpg';

const galleryImages = [
  { src: tanjoureSample, title: 'Tanjore - Lord Krishna', artist: 'Student Work 2023' },
  { src: keralaMuralSample, title: 'Kerala Mural - Temple Deity', artist: 'Advanced Course' },
  { src: mysoreSample, title: 'Mysore - Royal Portrait', artist: 'Beginner Course' },
  { src: tanjoureSample, title: 'Tanjore - Goddess Lakshmi', artist: 'Masterclass Work' },
  { src: keralaMuralSample, title: 'Kerala Mural - Ramayana Scene', artist: 'Student Exhibition' },
  { src: mysoreSample, title: 'Mysore - Floral Motifs', artist: 'Workshop Creation' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-temple-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-temple-maroon mb-4">
              Student Gallery
            </h2>
            <p className="font-body text-xl text-temple-maroon/80 max-w-2xl mx-auto">
              Witness the divine creations of our talented students
            </p>
            <div className="w-32 h-1 bg-temple-gold mx-auto rounded-full mt-6"></div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="temple-card cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-temple-maroon/20 group-hover:bg-temple-maroon/40 transition-all duration-300 flex items-end">
                    <div className="p-4 w-full bg-gradient-to-t from-temple-maroon/80 to-transparent">
                      <h3 className="font-title text-white font-bold">{image.title}</h3>
                      <p className="text-temple-gold text-sm">{image.artist}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {selectedImage !== null && (
            <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
              <div className="relative max-w-4xl w-full">
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-temple-gold transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                <div className="temple-arch p-4">
                  <img 
                    src={galleryImages[selectedImage].src} 
                    alt={galleryImages[selectedImage].title}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />
                  <div className="text-center mt-4 p-4 bg-temple-beige rounded-lg">
                    <h3 className="font-title text-2xl font-bold text-temple-maroon">
                      {galleryImages[selectedImage].title}
                    </h3>
                    <p className="text-temple-maroon/70">{galleryImages[selectedImage].artist}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;