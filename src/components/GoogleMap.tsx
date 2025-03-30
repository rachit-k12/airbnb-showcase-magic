
import { useState } from 'react';
import { MapPin, Plus, Minus, ExternalLink } from 'lucide-react';
import { toast } from "sonner";

interface GoogleMapProps {
  location: string;
  redirectUrl: string;
}

const GoogleMap = ({ location, redirectUrl }: GoogleMapProps) => {
  const [zoom, setZoom] = useState(14);
  
  const handleRedirect = () => {
    window.open(redirectUrl, '_blank');
    toast.success("Opening location in Google Maps");
  };
  
  const increaseZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoom(prev => Math.min(prev + 1, 20));
  };
  
  const decreaseZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoom(prev => Math.max(prev - 1, 10));
  };
  
  return (
    <div className="py-6 border-b border-gray-200 animate-fade-in">
      <h2 className="text-xl font-bold mb-6">Where you'll be</h2>
      <div className="text-airbnb-black mb-4">{location}</div>
      
      <div className="relative rounded-xl overflow-hidden h-80 md:h-96 cursor-pointer group" onClick={handleRedirect}>
        <div 
          className="w-full h-full bg-gray-200"
          style={{
            backgroundImage: `url(https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(location)}&zoom=${zoom}&size=1200x600&maptype=roadmap&markers=color:red%7C${encodeURIComponent(location)}&key=YOUR_API_KEY)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300">
          <div className="absolute bottom-4 left-4 flex items-center text-airbnb-black bg-white px-3 py-2 rounded-lg shadow-md">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="font-medium text-sm">Exact location provided after booking</span>
          </div>
          
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExternalLink className="h-6 w-6 text-white bg-black bg-opacity-60 p-1 rounded-md" />
          </div>
        </div>
        
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
          <button 
            onClick={increaseZoom}
            className="bg-white rounded-md w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
          >
            <Plus className="h-4 w-4" />
          </button>
          <button 
            onClick={decreaseZoom}
            className="bg-white rounded-md w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
          >
            <Minus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
