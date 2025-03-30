
import { useState } from 'react';
import { Star, ChevronRight, Search } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

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
  const [allReviewsOpen, setAllReviewsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleReviews, setVisibleReviews] = useState(2);
  
  const handleShowMore = () => {
    if (visibleReviews < reviews.length) {
      setVisibleReviews(prev => prev + 2);
    }
  };
  
  const filteredReviews = searchQuery 
    ? reviews.filter(review => 
        review.comment.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : reviews;

  return (
    <div className="py-6 animate-fade-in">
      <div className="flex items-center mb-6">
        <Star className="h-6 w-6 fill-current text-airbnb-red mr-2" />
        <span className="text-xl font-bold">{rating} · {totalReviews} reviews</span>
      </div>

      <div className="space-y-8">
        <AnimatePresence>
          {reviews.slice(0, visibleReviews).map((review, index) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="review-card"
            >
              <div className="flex items-start">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-medium">{review.name}</div>
                  <div className="text-gray-500 text-sm">{review.date}</div>
                </div>
              </div>
              <p className="mt-3 text-gray-700">{review.comment}</p>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {visibleReviews < reviews.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button 
              onClick={handleShowMore}
              variant="outline"
              className="border border-airbnb-black rounded-md hover:bg-gray-100 transition-colors"
            >
              Show more reviews
            </Button>
          </motion.div>
        )}
        
        <Button 
          onClick={() => setAllReviewsOpen(true)}
          variant="outline"
          className="flex items-center gap-2 border border-airbnb-black rounded-md hover:bg-gray-100 transition-colors"
        >
          Show all {totalReviews} reviews
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <Dialog open={allReviewsOpen} onOpenChange={setAllReviewsOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Star className="h-5 w-5 fill-current text-airbnb-red mr-2" />
              <span>{rating} · {totalReviews} reviews</span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="mt-4">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search reviews"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-airbnb-red focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="space-y-6">
              {filteredReviews.length > 0 ? (
                filteredReviews.map((review) => (
                  <div key={review.id} className="pb-6 border-b border-gray-200 last:border-b-0">
                    <div className="flex items-start">
                      <img 
                        src={review.avatar} 
                        alt={review.name} 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="font-medium">{review.name}</div>
                        <div className="text-gray-500 text-sm">{review.date}</div>
                      </div>
                    </div>
                    <p className="mt-3 text-gray-700">{review.comment}</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No reviews match your search.
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ReviewSection;
