
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [parallaxOffsets, setParallaxOffsets] = useState<number[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      const moveX = (clientX - windowWidth / 2) / 50;
      const moveY = (clientY - windowHeight / 2) / 50;
      
      setParallaxOffsets(images.map((_, i) => {
        const factor = 1 - (i * 0.1);
        return factor * (moveX + moveY);
      }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [images.length]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="image-gallery mb-8">
        <div className="main-image cursor-pointer" onClick={() => openLightbox(0)}>
          <img 
            src={images[0]} 
            alt="Property" 
            className="parallax"
            style={{ transform: `translate(${parallaxOffsets[0]}px, ${parallaxOffsets[0]}px)` }}
          />
        </div>
        {images.slice(1, 5).map((image, index) => (
          <div key={index} className="secondary-image cursor-pointer" onClick={() => openLightbox(index + 1)}>
            <img 
              src={image} 
              alt={`Property ${index + 1}`} 
              className="parallax"
              style={{ transform: `translate(${parallaxOffsets[index + 1] || 0}px, ${parallaxOffsets[index + 1] || 0}px)` }}
            />
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content animate-zoom-in" onClick={(e) => e.stopPropagation()}>
            <img src={images[currentImageIndex]} alt={`Property ${currentImageIndex}`} />
            <button className="lightbox-close" onClick={closeLightbox}>
              <X size={24} />
            </button>
            <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
              <ChevronLeft size={24} />
            </button>
            <button className="lightbox-nav lightbox-next" onClick={nextImage}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
