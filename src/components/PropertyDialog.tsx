
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Bed, Bath, Coffee, Wifi, Car, PawPrint } from "lucide-react";

interface PropertyDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const PropertyDialog = ({ open, setOpen }: PropertyDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">House Rules</DialogTitle>
          <DialogDescription>
            Important information about your stay.
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="house-rules" className="mt-4">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="house-rules">House Rules</TabsTrigger>
            <TabsTrigger value="safety">Safety & Property</TabsTrigger>
            <TabsTrigger value="cancellation">Cancellation Policy</TabsTrigger>
          </TabsList>
          
          <TabsContent value="house-rules" className="space-y-4">
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Checking in and out</h3>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5" />
                <div>
                  <p className="font-medium">Check-in after 2:00pm</p>
                  <p className="text-sm text-gray-500">Self check-in with building staff</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5" />
                <div>
                  <p className="font-medium">Checkout before 11:00am</p>
                </div>
              </div>
              
              <h3 className="font-medium text-lg pt-2">During your stay</h3>
              <div className="flex items-start gap-3">
                <PawPrint className="h-5 w-5 mt-0.5" />
                <div>
                  <p className="font-medium">Pets allowed</p>
                  <p className="text-sm text-gray-500">Bring your furry friends along</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Coffee className="h-5 w-5 mt-0.5" />
                <div>
                  <p className="font-medium">Commercial photography allowed</p>
                  <p className="text-sm text-gray-500">With prior approval from host</p>
                </div>
              </div>
              
              <h3 className="font-medium text-lg">House rules</h3>
              <p>You'll be staying in someone's home, so please treat it with care and respect.</p>
              
              <h3 className="font-medium text-lg">Additional rules</h3>
              <p>The kitchen is not accessible to guests for full fledge cooking and is not included in the listing. They can use all kitchen equipments.</p>
              <p>Visiting guests will be charged extra.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="safety" className="space-y-4">
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Safety & property information</h3>
              <p>Carbon monoxide alarm not reported</p>
              <p>Smoke alarm not reported</p>
              <p>Exterior security cameras on property</p>
              <p>Pool/hot tub without a gate or lock</p>
              <p>Nearby lake, river, other body of water</p>
              <p>Heights without rails or protection</p>
            </div>
          </TabsContent>
          
          <TabsContent value="cancellation" className="space-y-4">
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Cancellation policy</h3>
              <p>Free cancellation for 48 hours. Cancel before 26 Apr for a partial refund.</p>
              <p>Review this Host's full policy for details.</p>
              
              <div className="border border-gray-200 rounded-lg p-4 mt-4">
                <h4 className="font-medium mb-2">Within 48 hours</h4>
                <p className="text-sm">Full refund: Get back 100% of what you paid.</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium mb-2">Before 26 Apr, 2:00pm</h4>
                <p className="text-sm">Partial refund: Get back 50% of every night. No refund of the service fee.</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium mb-2">After 26 Apr, 2:00pm</h4>
                <p className="text-sm">No refund: This reservation is non-refundable.</p>
              </div>
              
              <p className="text-sm mt-4">Cleaning fees are refunded if you cancel before check-in.</p>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyDialog;
