
import { useState, useEffect } from 'react';
import ImageGallery from '@/components/ImageGallery';
import PropertyHeader from '@/components/PropertyHeader';
import BookingCard from '@/components/BookingCard';
import AmenitiesGrid from '@/components/AmenitiesGrid';
import HostProfile from '@/components/HostProfile';
import ReviewSection from '@/components/ReviewSection';
import { Calendar, AlarmClock, Sparkles, Star } from 'lucide-react';

const AIRBNB_REDIRECT_URL = "https://www.airbnb.co.in/rooms/37898787?category_tag=Tag%3A8536&search_mode=flex_destinations_search&adults=1&check_in=2025-04-01&check_out=2025-04-06&children=0&infants=0&pets=0&photo_id=887849071&source_impression_id=p3_1743358234_P3rYzr3EsMSIxkAd&previous_page_section_name=1000&federated_search_id=f0a49464-94fd-4a35-844c-b58e86e68f84";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  const reviews = [
    {
      id: 1,
      name: "Emma",
      date: "October 2023",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      comment: "This place is amazing! Great location and beautiful decor. The host was very communicative and helpful."
    },
    {
      id: 2,
      name: "James",
      date: "September 2023",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4,
      comment: "Very comfortable stay. The apartment is exactly as pictured. Great amenities and central location."
    },
    {
      id: 3,
      name: "Sophia",
      date: "August 2023",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      comment: "Perfect location! The place was clean, stylish and had everything we needed for our weekend getaway."
    },
    {
      id: 4,
      name: "Michael",
      date: "July 2023",
      avatar: "https://randomuser.me/api/portraits/men/51.jpg",
      rating: 5,
      comment: "Wonderful place to stay. The host was very accommodating and the place exceeded our expectations."
    }
  ];

  const description = `Experience Mumbai like never before in this luxurious apartment with stunning sea views. This stylish 2-bedroom apartment is perfect for travelers looking for comfort and convenience. Located in a prime area, you'll be close to all the major attractions while enjoying a peaceful retreat.

The apartment features modern furnishings, a fully equipped kitchen, high-speed WiFi, and a spacious living area. Both bedrooms have comfortable queen-sized beds and attached bathrooms.

From the balcony, you can enjoy breathtaking views of the Arabian Sea and Mumbai's stunning skyline. The apartment is located in a secure building with 24/7 security, ensuring your safety throughout your stay.

Nearby attractions include Marine Drive, Juhu Beach, and several popular restaurants and shopping areas. Public transportation is easily accessible, making it convenient to explore other parts of the city.`;

  const truncatedDescription = description.slice(0, 300) + "...";

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <PropertyHeader 
        title="Luxury Apartment with Sea View"
        location="Mumbai, Maharashtra, India"
        rating={4.88}
        reviews={234}
      />
      
      <ImageGallery images={images} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="col-span-2">
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
            <h2 className="text-lg font-bold mb-6">What this place offers</h2>
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
        
        <div className="lg:col-span-1">
          <BookingCard 
            price={125}
            rating={4.88}
            reviews={234}
            redirectUrl={AIRBNB_REDIRECT_URL}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
