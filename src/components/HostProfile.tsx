
import { useState } from 'react';
import { MapPin, Award, Clock, MessageSquare, Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface HostProfileProps {
  name: string;
  joinDate: string;
  image: string;
}

const HostProfile = ({ name, joinDate, image }: HostProfileProps) => {
  const [expanded, setExpanded] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="py-6 border-b border-gray-200 animate-fade-in">
      <h2 className="text-xl font-bold mb-6">Meet your host</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col items-center">
          <div className="relative">
            <img 
              src={image} 
              alt={`Host ${name}`} 
              className="w-32 h-32 rounded-full object-cover border-2 border-white shadow-md"
            />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-3 py-1 text-xs font-medium shadow-sm border border-gray-100">
              <Award className="h-3 w-3 inline mr-1 text-airbnb-red" />
              Superhost
            </div>
          </div>
          
          <div className="text-center mt-4">
            <div className="font-bold text-lg">{name}</div>
            <div className="text-gray-500">Host since {joinDate}</div>
          </div>
        </div>
        
        <div className="flex-1 space-y-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-airbnb-red" />
              <span>Superhost</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-airbnb-red" />
              <span>Lives in Bengaluru, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-airbnb-red" />
              <span>Response time: within an hour</span>
            </div>
          </div>
          
          <div className="pt-4 space-y-4">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-airbnb-red" />
              <span>Identity verified</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-airbnb-red" />
              <span>Email verified</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-airbnb-red" />
              <span>Phone verified</span>
            </div>
          </div>
          
          <div className={`transition-all duration-300 overflow-hidden ${expanded ? 'max-h-96' : 'max-h-0'}`}>
            <p className="py-4 text-gray-700">
              Hi, I'm {name}! I love hosting and making sure my guests have an amazing experience. 
              I've been hosting for several years and take pride in providing memorable stays for all my guests.
            </p>
          </div>
          
          <div className="pt-4 flex gap-4">
            <Button 
              onClick={() => setDialogOpen(true)}
              className="border border-airbnb-black hover:bg-gray-100 bg-white text-airbnb-black rounded-lg"
              variant="outline"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Message host
            </Button>
            
            <Button 
              onClick={() => setExpanded(!expanded)}
              className="border border-airbnb-black hover:bg-gray-100 bg-white text-airbnb-black rounded-lg"
              variant="outline"
            >
              {expanded ? 'Show less' : 'Show more'}
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Contact {name}</DialogTitle>
            <DialogDescription>
              Send a message to get in touch with the host.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={image} 
                alt={`Host ${name}`} 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-medium">{name}</div>
                <div className="text-sm text-gray-500">Usually responds within an hour</div>
              </div>
            </div>
            
            <textarea 
              className="w-full p-3 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-airbnb-red focus:border-transparent"
              placeholder={`Hi ${name}, I'm interested in your property...`}
            />
            
            <div className="mt-4">
              <Button 
                onClick={() => setDialogOpen(false)}
                className="w-full bg-airbnb-red hover:bg-airbnb-red/90 text-white"
              >
                Send message
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HostProfile;
