
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, MoveHorizontal, Grid } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { useEmblaCarousel } from 'embla-carousel-react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [parallaxOffsets, setParallaxOffsets] = useState<number[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [slideProgress, setSlideProgress] = useState(0);
  
  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setCurrentImageIndex(emblaApi.selectedScrollSnap());
        const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
        setSlideProgress(progress);
      });
    }
  }, [emblaApi]);

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
    
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <div className="image-gallery mb-8 relative group rounded-xl overflow-hidden">
        <div className="main-image cursor-pointer" onClick={() => openLightbox(0)}>
          <motion.img 
            src={images[0]} 
            alt="Property" 
            className="transform hover:scale-105 transition-transform duration-700"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            style={{ transform: `translate(${parallaxOffsets[0]}px, ${parallaxOffsets[0]}px)` }}
          />
        </div>
        {images.slice(1, 5).map((image, index) => (
          <div key={index} className="secondary-image cursor-pointer" onClick={() => openLightbox(index + 1)}>
            <motion.img 
              src={image} 
              alt={`Property ${index + 1}`} 
              className="transform hover:scale-105 transition-transform duration-700"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              style={{ transform: `translate(${parallaxOffsets[index + 1] || 0}px, ${parallaxOffsets[index + 1] || 0}px)` }}
            />
          </div>
        ))}
        
        <motion.button 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            if (emblaApi) emblaApi.scrollPrev();
          }}
        >
          <ChevronLeft className="h-4 w-4" />
        </motion.button>
        
        <motion.button 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            if (emblaApi) emblaApi.scrollNext();
          }}
        >
          <ChevronRight className="h-4 w-4" />
        </motion.button>
        
        <motion.button 
          className="absolute right-4 bottom-4 bg-white rounded-lg px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.stopPropagation();
            openLightbox(0);
          }}
        >
          <Grid className="h-4 w-4" />
          <span>Show all photos</span>
        </motion.button>
      </div>

      {lightboxOpen && (
        <motion.div 
          className="lightbox-overlay fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center" 
          onClick={closeLightbox}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="lightbox-content max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="ref" ref={emblaRef}>
              <div className="flex">
                {images.map((image, index) => (
                  <div 
                    key={index} 
                    className="min-w-0 flex-[0_0_100%] p-2 flex items-center justify-center"
                  >
                    <img 
                      src={image} 
                      alt={`Property ${index}`} 
                      className="max-h-[80vh] w-auto mx-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-colors"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-colors"
              onClick={() => emblaApi?.scrollPrev()}
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-colors"
              onClick={() => emblaApi?.scrollNext()}
            >
              <ChevronRight size={24} />
            </button>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
              {currentImageIndex + 1} / {images.length}
            </div>
            
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-1/2">
              <div className="w-full bg-gray-500 h-1 rounded-full overflow-hidden">
                <div 
                  className="bg-white h-full transition-all duration-300"
                  style={{ width: `${(currentImageIndex / (images.length - 1)) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ImageGallery;
