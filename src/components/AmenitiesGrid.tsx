
import { 
  Wifi, 
  Tv, 
  AirVent, 
  Car, 
  ShowerHead, 
  Utensils, 
  Refrigerator, 
  Coffee, 
  LocateFixed,
  Key 
} from 'lucide-react';

interface Amenity {
  icon: React.ReactNode;
  name: string;
}

const AmenitiesGrid = () => {
  const amenities: Amenity[] = [
    { icon: <Wifi className="h-6 w-6" />, name: "Fast wifi" },
    { icon: <Tv className="h-6 w-6" />, name: "40\" HDTV" },
    { icon: <AirVent className="h-6 w-6" />, name: "Air conditioning" },
    { icon: <Car className="h-6 w-6" />, name: "Free parking on premises" },
    { icon: <ShowerHead className="h-6 w-6" />, name: "Hot water" },
    { icon: <Utensils className="h-6 w-6" />, name: "Kitchen" },
    { icon: <Refrigerator className="h-6 w-6" />, name: "Refrigerator" },
    { icon: <Coffee className="h-6 w-6" />, name: "Coffee maker" },
    { icon: <LocateFixed className="h-6 w-6" />, name: "Great location" },
    { icon: <Key className="h-6 w-6" />, name: "Self check-in" }
  ];

  return (
    <div className="my-8 animate-fade-in">
      <h2 className="text-xl font-bold mb-4">What this place offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="text-airbnb-black">{amenity.icon}</div>
            <span>{amenity.name}</span>
          </div>
        ))}
      </div>
      <button className="mt-6 px-6 py-2 border border-airbnb-black rounded-lg font-medium hover:bg-airbnb-lightgray transition-colors">
        Show all amenities
      </button>
    </div>
  );
};

export default AmenitiesGrid;
