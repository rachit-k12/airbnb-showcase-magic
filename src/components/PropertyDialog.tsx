
import React from 'react';
import { Clock, Building2, Camera, Cigarette, FileText } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

interface PropertyDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const PropertyDialog = ({ open, setOpen }: PropertyDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">House rules</DialogTitle>
        </DialogHeader>
        <DialogClose className="absolute right-4 top-4" />
        
        <div className="space-y-6 mt-4">
          <p className="text-gray-700">You'll be staying in someone's home, so please treat it with care and respect.</p>
          
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Checking in and out</h3>
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p>Check-in after 2:00pm</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p>Checkout before 11:00am</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Building2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p>Self check-in with building staff</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">During your stay</h3>
            <div className="flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 flex-shrink-0">
                <path d="M4.13 10.5C4.13 10.5 5.5 12.5 10 12.5C14.5 12.5 15.87 10.5 15.87 10.5"/>
                <path d="M16.21 8C16.2 7.35 15.68 6.8 15.03 6.74C13.85 6.64 12.49 6.5 10 6.5C7.51 6.5 6.15 6.64 4.97 6.74C4.32 6.8 3.8 7.35 3.79 8"/>
                <path d="M6.29 12.67C6.23 12.67 6.18 12.7 6.15 12.75L5.01 14.69C4.97 14.77 5.04 14.86 5.13 14.86H8.52C8.57 14.86 8.62 14.83 8.65 14.79L9.32 13.76C9.36 13.71 9.42 13.68 9.48 13.68H10.52C10.58 13.68 10.64 13.71 10.68 13.76L11.35 14.79C11.38 14.83 11.43 14.86 11.48 14.86H14.87C14.96 14.86 15.03 14.77 14.99 14.69L13.85 12.75C13.82 12.7 13.77 12.67 13.71 12.67H6.29Z"/>
                <path d="M5 6.5V5C5 3.34 6.34 2 8 2H12C13.66 2 15 3.34 15 5V6.5"/>
              </svg>
              <div>
                <p>Pets allowed</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Camera className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p>Commercial photography allowed</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Cigarette className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p>Smoking is allowed</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <FileText className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Additional rules</h3>
                <p className="text-gray-700 mt-2">The kitchen is not accessible to guests for full fledge cooking and is not included in the listing. They can use all kitchen equipments.</p>
                <p className="text-gray-700 mt-2">Visiting guests will be charged extra.</p>
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <h3 className="font-semibold text-lg">Before you leave</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
              <li>Take out the trash</li>
              <li>Turn off all lights and appliances</li>
              <li>Lock all doors and windows</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyDialog;
