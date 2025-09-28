'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Play, FileText, Download } from 'lucide-react';
import { ProjectImage } from '../data/projectsBase';

// Utility function to detect if a file is a video
const isVideoFile = (src: string) => {
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
  return videoExtensions.some(ext => src.toLowerCase().endsWith(ext));
};

// Utility function to detect if a file is a PDF
const isPdfFile = (src: string) => {
  return src.toLowerCase().endsWith('.pdf');
};

// Utility function to get media type
const getMediaType = (item: ProjectImage): 'image' | 'video' | 'pdf' => {
  if (item.type) return item.type;
  if (isPdfFile(item.src)) return 'pdf';
  if (isVideoFile(item.src)) return 'video';
  return 'image';
};

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

  // Add global keyboard event listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
      }
    };

    if (selectedImageIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scrolling when lightbox is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageIndex]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
        {images.map((item, index) => {
          const mediaType = getMediaType(item);
          return (
            <div
              key={index}
              className="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              {mediaType === 'video' ? (
                <>
                  <video
                    src={item.src}
                    poster={item.poster}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    muted
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white bg-opacity-20 rounded-full p-3">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>
                  </div>
                </>
              ) : mediaType === 'pdf' ? (
                <>
                  <Image
                    src={item.pdfThumbnail || item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white bg-opacity-20 rounded-full p-3">
                        <FileText className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                    PDF
                  </div>
                </>
              ) : (
                <>
                  <Image
                    src={item.src}
                    alt={item.alt}
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
                </>
              )}
              {item.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                  <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.caption}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Header Buttons */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
            {/* Download Button for PDFs */}
            {getMediaType(images[selectedImageIndex]) === 'pdf' && (
              <a
                href={images[selectedImageIndex].src}
                download
                className="text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2"
                onClick={(e) => e.stopPropagation()}
                title="Download PDF"
              >
                <Download size={24} />
              </a>
            )}
            {/* Close Button */}
            <button
              className="text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
          </div>

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
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: 'calc(100vh - 8rem)', maxWidth: 'calc(100vw - 2rem)' }}
          >
            {getMediaType(images[selectedImageIndex]) === 'video' ? (
              <video
                src={images[selectedImageIndex].src}
                controls
                autoPlay
                className="max-w-full max-h-full object-contain"
                style={{ 
                  maxHeight: 'calc(100vh - 8rem)', 
                  maxWidth: 'calc(100vw - 2rem)'
                }}
              />
            ) : getMediaType(images[selectedImageIndex]) === 'pdf' ? (
              <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg p-8 max-w-2xl">
                {images[selectedImageIndex].pdfThumbnail ? (
                  <Image
                    src={images[selectedImageIndex].pdfThumbnail!}
                    alt={`${images[selectedImageIndex].alt} - First page`}
                    width={600}
                    height={800}
                    className="object-contain mb-6 border border-gray-300 rounded shadow-lg"
                    style={{ 
                      maxHeight: 'calc(100vh - 16rem)', 
                      maxWidth: 'calc(100vw - 4rem)',
                      width: 'auto',
                      height: 'auto'
                    }}
                  />
                ) : (
                  <div className="flex items-center justify-center w-96 h-96 bg-gray-200 rounded-lg mb-6">
                    <FileText className="w-24 h-24 text-gray-400" />
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">PDF Document</h3>
                  <p className="text-gray-600 mb-4">{images[selectedImageIndex].alt}</p>
                  <a
                    href={images[selectedImageIndex].src}
                    download
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Download className="w-5 h-5" />
                    Download PDF
                  </a>
                </div>
              </div>
            ) : (
              <Image
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].alt}
                width={1200}
                height={800}
                className="object-contain"
                style={{ 
                  maxHeight: 'calc(100vh - 8rem)', 
                  maxWidth: 'calc(100vw - 2rem)',
                  width: 'auto',
                  height: 'auto'
                }}
                priority
              />
            )}

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