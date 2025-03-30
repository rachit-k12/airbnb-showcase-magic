
import { Star } from 'lucide-react';

interface PropertyHeaderProps {
  title: string;
  location: string;
  rating: number;
  reviews: number;
}

const PropertyHeader = ({ title, location, rating, reviews }: PropertyHeaderProps) => {
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
        <div className="flex mt-2 sm:mt-0">
          <button className="flex items-center mr-4 hover:underline">
            <span className="font-medium">Share</span>
          </button>
          <button className="flex items-center hover:underline">
            <span className="font-medium">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyHeader;
