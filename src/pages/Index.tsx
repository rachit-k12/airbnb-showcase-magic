
import { useState, useEffect } from 'react';
import ImageGallery from '@/components/ImageGallery';
import PropertyHeader from '@/components/PropertyHeader';
import BookingCard from '@/components/BookingCard';
import AmenitiesGrid from '@/components/AmenitiesGrid';
import HostProfile from '@/components/HostProfile';
import ReviewSection from '@/components/ReviewSection';

const AIRBNB_REDIRECT_URL = "https://www.airbnb.co.in/rooms/37898787?category_tag=Tag%3A8536&search_mode=flex_destinations_search&adults=1&check_in=2025-04-01&check_out=2025-04-06&children=0&infants=0&pets=0&photo_id=887849071&source_impression_id=p3_1743358234_P3rYzr3EsMSIxkAd&previous_page_section_name=1000&federated_search_id=f0a49464-94fd-4a35-844c-b58e86e68f84";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const images = [
    "https://a0.muscache.com/im/pictures/b0b92d32-8f1c-49f2-907a-da7f1036e086.jpg",
    "https://a0.muscache.com/im/pictures/c3ba5830-bed0-4208-8ee2-0c69e5de54d7.jpg",
    "https://a0.muscache.com/im/pictures/2dc39a94-59ff-4ed6-be56-a4ed0ef70c32.jpg",
    "https://a0.muscache.com/im/pictures/miso/Hosting-37898787/original/d4ed7a72-a2c1-4f15-9c53-6ab2d95e8e46.jpeg",
    "https://a0.muscache.com/im/pictures/da131b92-9487-42d5-af1e-611355e5c2b0.jpg"
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
            <p className="mb-4">
              Experience Mumbai like never before in this luxurious apartment with stunning sea views. This stylish 2-bedroom apartment is perfect for travelers looking for comfort and convenience. Located in a prime area, you'll be close to all the major attractions while enjoying a peaceful retreat.
            </p>
            <p className="mb-4">
              The apartment features modern furnishings, a fully equipped kitchen, high-speed WiFi, and a spacious living area. Both bedrooms have comfortable queen-sized beds and attached bathrooms.
            </p>
            <button className="font-medium underline">Show more</button>
          </div>
          
          <AmenitiesGrid />
          
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
