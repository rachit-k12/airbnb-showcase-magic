
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, MoveHorizontal } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [parallaxOffsets, setParallaxOffsets] = useState<number[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

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
      <div className="image-gallery mb-8 relative group">
        <div className="main-image cursor-pointer" onClick={() => openLightbox(0)}>
          <img 
            src={images[0]} 
            alt="Property" 
            className="parallax transition-transform duration-500"
            style={{ transform: `translate(${parallaxOffsets[0]}px, ${parallaxOffsets[0]}px)` }}
          />
        </div>
        {images.slice(1, 5).map((image, index) => (
          <div key={index} className="secondary-image cursor-pointer" onClick={() => openLightbox(index + 1)}>
            <img 
              src={image} 
              alt={`Property ${index + 1}`} 
              className="parallax transition-transform duration-500"
              style={{ transform: `translate(${parallaxOffsets[index + 1] || 0}px, ${parallaxOffsets[index + 1] || 0}px)` }}
            />
          </div>
        ))}
        
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ChevronRight className="h-4 w-4" />
        </button>
        
        <button className="absolute right-4 bottom-4 bg-white rounded-lg px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 font-medium">
          <MoveHorizontal className="h-4 w-4" />
          <span>Show all photos</span>
        </button>
      </div>

      {lightboxOpen && (
        <div className="lightbox-overlay fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center" onClick={closeLightbox}>
          <div className="lightbox-content animate-zoom-in max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="flex aspect-video items-center justify-center p-2">
                      <img src={image} alt={`Property ${index}`} className="max-h-[80vh] object-contain" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
            <button className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2" onClick={closeLightbox}>
              <X size={24} />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
