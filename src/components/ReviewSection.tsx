
import { useState } from 'react';
import { Star, Search, ChevronDown, Filter } from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";

interface Review {
  id: number;
  name: string;
  date: string;
  avatar: string;
  rating: number;
  comment: string;
}

interface ReviewSectionProps {
  rating: number;
  reviews: Review[];
  totalReviews: number;
}

const ReviewSection = ({ rating, reviews, totalReviews }: ReviewSectionProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleReviews, setVisibleReviews] = useState(4);

  const loadMoreReviews = () => {
    setVisibleReviews(prev => Math.min(prev + 4, reviews.length));
  };

  const filteredReviews = reviews.filter(review => 
    review.comment.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="my-8 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Star className="h-6 w-6 fill-current text-airbnb-red" />
          <span className="ml-2 text-2xl font-bold">{rating} · {totalReviews} reviews</span>
        </div>
        <button 
          onClick={() => setDialogOpen(true)}
          className="px-4 py-2 border border-airbnb-black rounded-lg font-medium hover:bg-airbnb-lightgray transition-colors"
        >
          Show all reviews
        </button>
      </div>
      
      <div className="relative">
        <div className="flex items-center gap-2 mb-6 border border-gray-300 rounded-full px-4 py-2 focus-within:border-airbnb-black transition-colors">
          <Search className="h-4 w-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search reviews" 
            className="flex-grow bg-transparent border-none focus:outline-none text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              className="text-sm font-medium" 
              onClick={() => setSearchQuery('')}
            >
              Clear
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredReviews.slice(0, visibleReviews).map((review) => (
          <div key={review.id} className="mb-6 group">
            <div className="flex items-center mb-3">
              <img 
                src={review.avatar} 
                alt={review.name} 
                className="w-12 h-12 rounded-full mr-3 object-cover border border-gray-200 group-hover:border-airbnb-red transition-colors"
              />
              <div>
                <div className="font-medium group-hover:text-airbnb-red transition-colors">{review.name}</div>
                <div className="text-sm text-airbnb-darkgray">{review.date}</div>
              </div>
            </div>
            <p className="text-airbnb-black leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>
      
      {visibleReviews < filteredReviews.length && (
        <button 
          onClick={loadMoreReviews}
          className="mt-6 px-6 py-2 border border-airbnb-black rounded-lg font-medium hover:bg-airbnb-lightgray transition-colors mx-auto block"
        >
          Show more reviews
        </button>
      )}
      
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[90vw] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center">
              <Star className="h-6 w-6 fill-current text-airbnb-red mr-2" />
              <span>{rating} · {totalReviews} reviews</span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-1">
              <h3 className="font-medium mb-4">Rating Breakdown</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Cleanliness</span>
                    <span>5.0</span>
                  </div>
                  <Slider value={[5]} max={5} step={0.1} disabled />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Communication</span>
                    <span>5.0</span>
                  </div>
                  <Slider value={[5]} max={5} step={0.1} disabled />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Check-in</span>
                    <span>5.0</span>
                  </div>
                  <Slider value={[5]} max={5} step={0.1} disabled />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Accuracy</span>
                    <span>5.0</span>
                  </div>
                  <Slider value={[5]} max={5} step={0.1} disabled />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Location</span>
                    <span>5.0</span>
                  </div>
                  <Slider value={[5]} max={5} step={0.1} disabled />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Value</span>
                    <span>4.7</span>
                  </div>
                  <Slider value={[4.7]} max={5} step={0.1} disabled />
                </div>
              </div>
            </div>
            
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6 border border-gray-300 rounded-full px-4 py-2 focus-within:border-airbnb-black transition-colors">
                <Search className="h-4 w-4 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search reviews" 
                  className="flex-grow bg-transparent border-none focus:outline-none text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button 
                    className="text-sm font-medium" 
                    onClick={() => setSearchQuery('')}
                  >
                    Clear
                  </button>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredReviews.map((review) => (
                  <div key={review.id} className="mb-6 group p-4 border border-transparent hover:border-gray-200 rounded-xl transition-colors">
                    <div className="flex items-center mb-3">
                      <img 
                        src={review.avatar} 
                        alt={review.name} 
                        className="w-12 h-12 rounded-full mr-3 object-cover border border-gray-200 group-hover:border-airbnb-red transition-colors"
                      />
                      <div>
                        <div className="font-medium group-hover:text-airbnb-red transition-colors">{review.name}</div>
                        <div className="text-sm text-airbnb-darkgray">{review.date}</div>
                      </div>
                    </div>
                    <p className="text-airbnb-black leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ReviewSection;
