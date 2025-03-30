
import { useState, useEffect } from 'react';
import { toast } from "sonner";
import { Calendar, AlarmClock, Sparkles, Star, ExternalLink } from 'lucide-react';
import ImageGallery from '@/components/ImageGallery';
import PropertyHeader from '@/components/PropertyHeader';
import AmenitiesGrid from '@/components/AmenitiesGrid';
import HostProfile from '@/components/HostProfile';
import ReviewSection from '@/components/ReviewSection';
import GoogleMap from '@/components/GoogleMap';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const AIRBNB_REDIRECT_URL = "https://www.airbnb.co.in/rooms/37898787?category_tag=Tag%3A8536&search_mode=flex_destinations_search&adults=1&check_in=2025-04-01&check_out=2025-04-06&children=0&infants=0&pets=0&photo_id=887849071&source_impression_id=p3_1743358234_P3rYzr3EsMSIxkAd&previous_page_section_name=1000&federated_search_id=f0a49464-94fd-4a35-844c-b58e86e68f84";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [amenitiesDialogOpen, setAmenitiesDialogOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const images = [
    "public/lovable-uploads/9c1a5ab7-d90c-4dca-81da-d5030808dbad.png",
    "public/lovable-uploads/9e64ccd0-75fc-4353-89f5-e1bb5645f0a1.png",
    "public/lovable-uploads/21cad0d9-cdc9-427d-9c7a-d90d9818b87b.png",
    "public/lovable-uploads/97de92f1-e65e-4c42-81a8-4c52e1f33392.png",
    "public/lovable-uploads/9754494d-7b3f-4b92-bf76-1486c3db06ea.png"
  ];

  const reviews = [
    {
      id: 1,
      name: "Tarun",
      date: "Today",
      avatar: "public/lovable-uploads/a269abe2-842e-4672-bccf-882a689d1413.png",
      rating: 5,
      comment: "Great place!"
    },
    {
      id: 2,
      name: "Ajay",
      date: "5 days ago",
      avatar: "public/lovable-uploads/6a2553b7-3309-4948-abd3-6de55aa0a61c.png",
      rating: 5,
      comment: "The place was exactly as detailed and the pictures were a true reflection of the property."
    },
    {
      id: 3,
      name: "Aniket S",
      date: "1 week ago",
      avatar: "public/lovable-uploads/af989ece-4c1f-4450-b4a8-d5e9c679bd07.png",
      rating: 5,
      comment: "Great location, Spacious, clean and good rooms. Food is slightly on the expensive end for the taste and quantity. Overall great experience."
    },
    {
      id: 4,
      name: "Avinash",
      date: "2 weeks ago",
      avatar: "public/lovable-uploads/7434d817-edbf-4b7f-a579-e0670e5588d0.png",
      rating: 5,
      comment: "Nicely maintained villa with excellent interiors and great hosts. The staff/host were very receptive to all requests. Pool was very well maintained. Would definitely recommend for anyone looking to stay in the area."
    }
  ];

  const description = `Experience Mumbai like never before in this luxurious apartment with stunning sea views. This stylish 2-bedroom apartment is perfect for travelers looking for comfort and convenience. Located in a prime area, you'll be close to all the major attractions while enjoying a peaceful retreat.

The apartment features modern furnishings, a fully equipped kitchen, high-speed WiFi, and a spacious living area. Both bedrooms have comfortable queen-sized beds and attached bathrooms.

From the balcony, you can enjoy breathtaking views of the Arabian Sea and Mumbai's stunning skyline. The apartment is located in a secure building with 24/7 security, ensuring your safety throughout your stay.

Nearby attractions include Marine Drive, Juhu Beach, and several popular restaurants and shopping areas. Public transportation is easily accessible, making it convenient to explore other parts of the city.`;

  const truncatedDescription = description.slice(0, 300) + "...";

  const handleBookNow = () => {
    window.open(AIRBNB_REDIRECT_URL, '_blank');
    toast.success("Redirecting to Airbnb booking page");
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <PropertyHeader 
        title="Luxury Apartment with Sea View"
        location="Mumbai, Maharashtra, India"
        rating={4.88}
        reviews={234}
      />
      
      <ImageGallery images={images} />
      
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
        <div className="col-span-1">
          <div className="border-b border-gray-200 pb-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold">Entire apartment hosted by John</h2>
                <p className="text-airbnb-darkgray">4 guests · 2 bedrooms · 2 beds · 2 baths</p>
              </div>
              <img 
                src="https://randomuser.me/api/portraits/men/75.jpg" 
                alt="Host" 
                className="w-14 h-14 rounded-full object-cover"
              />
            </div>
          </div>

          <div className="py-6 border-b border-gray-200">
            <h2 className="text-lg font-bold mb-4">About this space</h2>
            <p className="mb-4 leading-relaxed">
              {showFullDescription ? description : truncatedDescription}
            </p>
            <button 
              onClick={() => setShowFullDescription(!showFullDescription)} 
              className="font-medium underline hover:text-airbnb-red transition-colors"
            >
              {showFullDescription ? "Show less" : "Show more"}
            </button>
          </div>
          
          <div className="py-6 border-b border-gray-200 animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">What this place offers</h2>
              <button 
                onClick={() => setAmenitiesDialogOpen(true)}
                className="px-6 py-2 border border-airbnb-black rounded-lg font-medium hover:bg-airbnb-lightgray transition-colors"
              >
                Show all amenities
              </button>
            </div>
            <AmenitiesGrid />
          </div>
          
          <div className="py-6 border-b border-gray-200 animate-fade-in">
            <h2 className="text-lg font-bold mb-4">Where you'll sleep</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-2">Bedroom 1</h3>
                <p>1 queen bed</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-2">Bedroom 2</h3>
                <p>1 queen bed</p>
              </div>
            </div>
          </div>
          
          <div className="my-8 flex justify-center">
            <Button 
              className="bg-airbnb-red hover:bg-airbnb-red/90 text-white px-8 py-6 rounded-lg text-lg font-medium flex items-center gap-2"
              onClick={handleBookNow}
            >
              Book on Airbnb <ExternalLink className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="py-6 border-b border-gray-200 animate-fade-in">
            <h2 className="text-lg font-bold mb-4">Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <Calendar className="h-8 w-8 text-airbnb-red" />
                <div>
                  <h3 className="font-medium">Free cancellation before Oct 12</h3>
                  <p className="text-sm text-gray-500">Cancel before check-in for a full refund</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <AlarmClock className="h-8 w-8 text-airbnb-red" />
                <div>
                  <h3 className="font-medium">Quick responses</h3>
                  <p className="text-sm text-gray-500">Host responds within an hour</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Sparkles className="h-8 w-8 text-airbnb-red" />
                <div>
                  <h3 className="font-medium">Highly rated cleanliness</h3>
                  <p className="text-sm text-gray-500">Recent guests rated it 4.9/5 for cleanliness</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Star className="h-8 w-8 text-airbnb-red" />
                <div>
                  <h3 className="font-medium">Experienced host</h3>
                  <p className="text-sm text-gray-500">John has hosted for over 5 years</p>
                </div>
              </div>
            </div>
          </div>
          
          <GoogleMap 
            location="Mumbai, Maharashtra, India" 
            redirectUrl="https://www.google.com/maps/search/?api=1&query=Mumbai+Maharashtra+India"
          />
          
          <HostProfile 
            name="John"
            joinDate="January 2018"
            image="https://randomuser.me/api/portraits/men/75.jpg"
          />
          
          <ReviewSection 
            rating={4.88}
            reviews={reviews}
            totalReviews={234}
          />
        </div>
      </div>
      
      <Dialog open={amenitiesDialogOpen} onOpenChange={setAmenitiesDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>What this place offers</DialogTitle>
            <DialogDescription>
              Here's a complete list of amenities available at this property.
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="font-medium text-lg mb-3">Scenic views</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span>Lake view</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>Mountain view</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>Pool view</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-3">Bathroom</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span>Bath</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>Hair dryer</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>Cleaning products</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>Shampoo</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>Body soap</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>Hot water</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-3">Bedroom and laundry</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span>Hangers</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>Bed linens</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>Extra pillows and blankets</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>Washer</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-3">Entertainment</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span>TV</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>Books and reading material</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-3">Internet and office</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span>Wifi</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>Dedicated workspace</span>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
