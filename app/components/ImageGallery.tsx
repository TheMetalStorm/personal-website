'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectImage } from '../data/projects';

interface ImageGalleryProps {
  images: ProjectImage[];
  className?: string;
}

export default function ImageGallery({ images, className = '' }: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden cursor-pointer group hover:shadow-lg transition-all duration-300"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white bg-opacity-20 rounded-full p-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.caption}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          {/* Navigation Buttons */}
          {selectedImageIndex > 0 && (
            <button
              className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <ChevronLeft size={48} />
            </button>
          )}

          {selectedImageIndex < images.length - 1 && (
            <button
              className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight size={48} />
            </button>
          )}

          {/* Image Container */}
          <div
            className="relative max-w-5xl max-h-full w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].alt}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain"
                priority
              />
            </div>

            {/* Image Caption */}
            {images[selectedImageIndex].caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <p className="text-white text-lg text-center">
                  {images[selectedImageIndex].caption}
                </p>
              </div>
            )}

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}