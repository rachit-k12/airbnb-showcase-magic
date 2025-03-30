
import { useState } from 'react';
import { Star, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BookingCardProps {
  price: number;
  rating: number;
  reviews: number;
  redirectUrl: string;
}

const BookingCard = ({ price, rating, reviews, redirectUrl }: BookingCardProps) => {
  const [guests, setGuests] = useState(1);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);

  const handleReserve = () => {
    window.open(redirectUrl, '_blank');
  };

  const totalPrice = price * (checkIn && checkOut ? 5 : 1); // Assume 5 nights if dates selected
  const serviceFee = Math.round(totalPrice * 0.12);
  const total = totalPrice + serviceFee;

  return (
    <div className="booking-card rounded-xl border border-gray-200 p-6 shadow-lg animate-fade-in">
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <span className="text-xl font-bold text-airbnb-black">${price}</span>
          <span className="text-airbnb-black"> night</span>
        </div>
        <div className="flex items-center">
          <Star className="h-4 w-4 fill-current text-airbnb-red" />
          <span className="ml-1 text-sm">{rating}</span>
          <span className="mx-1 text-airbnb-darkgray">·</span>
          <span className="text-sm underline text-airbnb-darkgray">{reviews} reviews</span>
        </div>
      </div>

      <div className="border border-gray-300 rounded-t-lg rounded-b-lg overflow-hidden mb-4">
        <div className="grid grid-cols-2 border-b border-gray-300">
          <div className="p-3 border-r border-gray-300">
            <div className="text-xs font-bold">CHECK-IN</div>
            <input 
              type="date" 
              placeholder="Add date" 
              className="w-full border-none p-0 text-sm focus:outline-none focus:ring-0"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div className="p-3">
            <div className="text-xs font-bold">CHECKOUT</div>
            <input 
              type="date" 
              placeholder="Add date" 
              className="w-full border-none p-0 text-sm focus:outline-none focus:ring-0"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
        </div>
        <div className="relative">
          <div 
            className="p-3 cursor-pointer flex justify-between items-center"
            onClick={() => setIsGuestsOpen(!isGuestsOpen)}
          >
            <div>
              <div className="text-xs font-bold">GUESTS</div>
              <div className="text-sm">{guests} guest</div>
            </div>
            <ChevronDown className={`h-5 w-5 transition-transform ${isGuestsOpen ? 'rotate-180' : ''}`} />
          </div>
          
          {isGuestsOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b-lg p-4 shadow-lg z-10">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="font-medium">Adults</div>
                  <div className="text-sm text-airbnb-darkgray">Age 13+</div>
                </div>
                <div className="flex items-center">
                  <button 
                    className={`h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center ${guests <= 1 ? 'text-gray-300 cursor-not-allowed' : 'text-airbnb-black cursor-pointer'}`}
                    onClick={() => setGuests(prev => Math.max(1, prev - 1))}
                    disabled={guests <= 1}
                  >
                    -
                  </button>
                  <span className="mx-3">{guests}</span>
                  <button 
                    className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center text-airbnb-black cursor-pointer"
                    onClick={() => setGuests(prev => prev + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Button 
        onClick={handleReserve} 
        className="w-full bg-airbnb-red hover:bg-opacity-90 text-white py-3 rounded-lg font-medium transition-all mb-4"
      >
        Reserve
      </Button>

      <div className="text-center text-sm mb-4">You won't be charged yet</div>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="underline">${price} x {checkIn && checkOut ? '5 nights' : '1 night'}</span>
          <span>${totalPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="underline">Service fee</span>
          <span>${serviceFee}</span>
        </div>
        <div className="border-t pt-4 mt-4 flex justify-between font-bold">
          <span>Total before taxes</span>
          <span>${total}</span>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
