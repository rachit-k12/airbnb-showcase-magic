
import { useState, useRef, useEffect } from 'react';
import { MapPin, ZoomIn, ZoomOut, ExternalLink } from 'lucide-react';

interface GoogleMapProps {
  location: string;
  redirectUrl?: string;
}

const GoogleMap = ({ location, redirectUrl }: GoogleMapProps) => {
  const [zoom, setZoom] = useState(14);
  const mapRef = useRef<HTMLDivElement>(null);
  
  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 1, 20));
  };
  
  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 1, 1));
  };
  
  const openGoogleMaps = () => {
    if (redirectUrl) {
      window.open(redirectUrl, '_blank');
    } else {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, '_blank');
    }
  };

  const encodedLocation = encodeURIComponent(location);
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${encodedLocation}&zoom=${zoom}&size=600x400&markers=color:red%7C${encodedLocation}&key=YOUR_API_KEY`;
  
  // This is a placeholder - in a real implementation, you would use a proper Maps API
  const placeholderMapStyle = {
    backgroundImage: `url(public/lovable-uploads/57413ac5-8048-46b8-98c6-d56bf03b36ba.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="my-8 animate-fade-in">
      <h2 className="text-xl font-bold mb-4">Where you'll be</h2>
      <p className="mb-4">{location}</p>
      
      <div className="relative rounded-xl overflow-hidden h-[400px] shadow-md group">
        <div 
          ref={mapRef}
          className="w-full h-full cursor-pointer"
          style={placeholderMapStyle}
          onClick={openGoogleMaps}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-airbnb-red text-white p-3 rounded-full shadow-lg animate-bounce">
              <MapPin className="h-6 w-6" />
            </div>
          </div>
        </div>
        
        <div className="absolute right-4 top-4 flex flex-col gap-2">
          <button 
            onClick={handleZoomIn}
            className="bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ZoomIn className="h-5 w-5" />
          </button>
          <button 
            onClick={handleZoomOut}
            className="bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ZoomOut className="h-5 w-5" />
          </button>
        </div>
        
        <button 
          onClick={openGoogleMaps}
          className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span>Open in Google Maps</span>
          <ExternalLink className="h-4 w-4" />
        </button>
        
        <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-lg shadow-lg text-sm">
          Exact location provided after booking
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
