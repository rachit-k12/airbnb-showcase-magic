
import { useState } from 'react';
import { Shield, Award, Star } from 'lucide-react';
import PropertyDialog from './PropertyDialog';

interface HostProfileProps {
  name: string;
  joinDate: string;
  image: string;
}

const HostProfile = ({ name, joinDate, image }: HostProfileProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  
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
      
      <div className="mt-8 space-y-5">
        <h3 className="text-lg font-bold">Things to know</h3>
        
        <div className="space-y-2">
          <h4 className="font-medium">House rules</h4>
          <ul className="space-y-2">
            <li>Check-in after 2:00pm</li> 
            <li>Checkout before 11:00am</li>
            <li>Pets allowed</li>
          </ul>
          <button 
            onClick={() => setDialogOpen(true)}
            className="mt-2 text-airbnb-black font-medium underline hover:text-airbnb-red transition-colors"
          >
            Show more
          </button>
        </div>
      </div>
      
      <div className="mt-6">
        <p className="mb-4">Fast responses. Usually responds within minutes.</p>
        <button className="px-6 py-2 border border-airbnb-black rounded-lg font-medium hover:bg-airbnb-lightgray transition-colors">
          Contact host
        </button>
      </div>
      
      <PropertyDialog open={dialogOpen} setOpen={setDialogOpen} />
    </div>
  );
};

export default HostProfile;
