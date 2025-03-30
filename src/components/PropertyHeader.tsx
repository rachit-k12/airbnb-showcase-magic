
import { useState } from 'react';
import { Share, Star, Heart } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";

interface PropertyHeaderProps {
  title: string;
  location: string;
  rating: number;
  reviews: number;
}

const PropertyHeader = ({ title, location, rating, reviews }: PropertyHeaderProps) => {
  const [saved, setSaved] = useState(false);
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };
  
  return (
    <div className="mb-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-airbnb-black mb-1">{title}</h1>
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-current text-airbnb-red" />
            <span className="ml-1 font-medium">{rating}</span>
          </div>
          <span className="mx-2">·</span>
          <span className="underline font-medium">{reviews} reviews</span>
          <span className="mx-2">·</span>
          <span className="underline font-medium">{location}</span>
        </div>
        <div className="flex mt-2 sm:mt-0 space-x-4">
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center gap-2 hover:bg-gray-100 rounded-md px-3 py-1.5 transition-colors">
                <Share className="h-4 w-4" />
                <span className="font-medium">Share</span>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-72">
              <div className="space-y-2">
                <h3 className="font-medium">Share this place</h3>
                <div className="flex flex-col space-y-2">
                  <button 
                    className="text-left hover:bg-gray-100 p-2 rounded-md transition-colors"
                    onClick={handleShare}
                  >
                    Copy link
                  </button>
                  <button className="text-left hover:bg-gray-100 p-2 rounded-md transition-colors">
                    Share via WhatsApp
                  </button>
                  <button className="text-left hover:bg-gray-100 p-2 rounded-md transition-colors">
                    Share via Email
                  </button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          
          <button 
            className="flex items-center gap-2 hover:bg-gray-100 rounded-md px-3 py-1.5 transition-colors"
            onClick={() => {
              setSaved(!saved);
              toast.success(saved ? "Removed from saved" : "Saved to your favorites");
            }}
          >
            <Heart className={`h-4 w-4 transition-colors duration-300 ${saved ? 'fill-current text-airbnb-red' : ''}`} />
            <span className="font-medium">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyHeader;
