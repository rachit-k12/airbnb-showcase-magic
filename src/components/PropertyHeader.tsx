
import { useState } from 'react';
import { Share, Star, Heart } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";
import { motion } from "framer-motion";

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
    <motion.div 
      className="mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl md:text-3xl font-bold text-airbnb-black mb-2">{title}</h1>
      <div className="flex flex-wrap items-center justify-between gap-y-2">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-current text-airbnb-red" />
            <span className="ml-1 font-medium">{rating}</span>
          </div>
          <span className="mx-1">·</span>
          <span className="underline font-medium hover:text-airbnb-red transition-colors cursor-pointer">{reviews} reviews</span>
          <span className="mx-1">·</span>
          <span className="underline font-medium hover:text-airbnb-red transition-colors cursor-pointer">{location}</span>
        </div>
        <div className="flex space-x-2">
          <Popover>
            <PopoverTrigger asChild>
              <motion.button 
                className="flex items-center gap-2 hover:bg-gray-100 rounded-md px-3 py-1.5 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Share className="h-4 w-4" />
                <span className="font-medium">Share</span>
              </motion.button>
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
          
          <motion.button 
            className="flex items-center gap-2 hover:bg-gray-100 rounded-md px-3 py-1.5 transition-colors"
            onClick={() => {
              setSaved(!saved);
              toast.success(saved ? "Removed from saved" : "Saved to your favorites");
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className={`h-4 w-4 transition-colors duration-300 ${saved ? 'fill-current text-airbnb-red' : ''}`} />
            <span className="font-medium">Save</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyHeader;
