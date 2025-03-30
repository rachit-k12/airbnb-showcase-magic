
import { Star } from 'lucide-react';

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
  return (
    <div className="my-8 animate-fade-in">
      <div className="flex items-center mb-4">
        <Star className="h-5 w-5 fill-current text-airbnb-red" />
        <span className="ml-2 text-xl font-bold">{rating} · {totalReviews} reviews</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="mb-6">
            <div className="flex items-center mb-2">
              <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full mr-3 object-cover" />
              <div>
                <div className="font-medium">{review.name}</div>
                <div className="text-sm text-airbnb-darkgray">{review.date}</div>
              </div>
            </div>
            <p className="text-airbnb-black">{review.comment}</p>
          </div>
        ))}
      </div>
      
      <button className="mt-4 px-6 py-2 border border-airbnb-black rounded-lg font-medium hover:bg-airbnb-lightgray transition-colors">
        Show all {totalReviews} reviews
      </button>
    </div>
  );
};

export default ReviewSection;
