
import { useState } from 'react';
import { Clock, X, Calendar } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HouseRules = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  return (
    <div className="py-6 border-b border-gray-200 animate-fade-in">
      <h2 className="text-lg font-bold mb-4">Things to know</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-medium mb-4">House rules</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Clock className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <div>
                <div>Check-in after 2:00 PM</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <div>
                <div>Checkout before 11:00 AM</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Calendar className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <div>
                <div>Pets allowed</div>
              </div>
            </li>
          </ul>
          <Button 
            variant="link" 
            className="mt-4 px-0 text-airbnb-black underline font-medium hover:text-airbnb-red"
            onClick={() => setDialogOpen(true)}
          >
            Show more
          </Button>
        </div>
        
        <div>
          <h3 className="font-medium mb-4">Safety & property</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <X className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <div>
                <div>Carbon monoxide alarm not reported</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <X className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <div>
                <div>Smoke alarm not reported</div>
              </div>
            </li>
          </ul>
          <Button 
            variant="link" 
            className="mt-4 px-0 text-airbnb-black underline font-medium hover:text-airbnb-red"
            onClick={() => setDialogOpen(true)}
          >
            Show more
          </Button>
        </div>
        
        <div>
          <h3 className="font-medium mb-4">Cancellation policy</h3>
          <p className="mb-2">Free cancellation for 48 hours.</p>
          <p className="mb-2">Cancel before 5 days of check-in for a partial refund.</p>
          <Button 
            variant="link" 
            className="mt-2 px-0 text-airbnb-black underline font-medium hover:text-airbnb-red"
            onClick={() => setDialogOpen(true)}
          >
            Read more
          </Button>
        </div>
      </div>
      
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>House Rules</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div>
              <h3 className="font-medium text-lg mb-3">Check-in and checkout</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <div>Check-in: After 2:00 PM</div>
                    <div className="text-sm text-gray-500">Self check-in with building staff</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <div>Checkout: Before 11:00 AM</div>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-3">During your stay</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div>
                    <div>Maximum 6 guests allowed</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div>
                    <div>Pets are allowed</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div>
                    <div>No smoking inside the property</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div>
                    <div>No parties or events</div>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-3">Cancellation policy</h3>
              <p className="mb-3">Free cancellation for 48 hours after booking.</p>
              <p className="mb-3">Cancel before Apr 26 for a partial refund. If you cancel on or after Apr 26, you won't get a refund.</p>
              <p>Review the host's full cancellation policy which applies even if you cancel for illness or disruptions caused by COVID-19.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HouseRules;
