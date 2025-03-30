
import { Shield, Award, Star } from 'lucide-react';

interface HostProfileProps {
  name: string;
  joinDate: string;
  image: string;
}

const HostProfile = ({ name, joinDate, image }: HostProfileProps) => {
  return (
    <div className="my-8 pb-6 border-b border-gray-200 animate-fade-in">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold mb-1">Hosted by {name}</h2>
          <p className="text-airbnb-darkgray">Joined in {joinDate}</p>
        </div>
        <img src={image} alt={name} className="w-14 h-14 rounded-full object-cover" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5" />
          <span>234 Reviews</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          <span>Identity verified</span>
        </div>
        <div className="flex items-center gap-2">
          <Award className="h-5 w-5" />
          <span>Superhost</span>
        </div>
      </div>
      
      <div className="mt-6">
        <p className="mb-4">Fast responses. Usually responds within minutes.</p>
        <button className="px-6 py-2 border border-airbnb-black rounded-lg font-medium hover:bg-airbnb-lightgray transition-colors">
          Contact host
        </button>
      </div>
    </div>
  );
};

export default HostProfile;
