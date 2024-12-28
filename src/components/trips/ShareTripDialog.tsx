import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Link, Mail } from "lucide-react";

interface ShareTripDialogProps {
  open?: boolean;
  onClose?: () => void;
  tripDetails?: {
    destination: string;
    startDate: string;
    endDate: string;
  };
}

const ShareTripDialog = ({
  open = true,
  onClose = () => {},
  tripDetails = {
    destination: "San Francisco",
    startDate: "2024-03-01",
    endDate: "2024-03-07",
  },
}: ShareTripDialogProps) => {
  const shareButtons = [
    {
      icon: <Facebook className="h-5 w-5" />,
      label: "Facebook",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      label: "Twitter",
      color: "bg-sky-500 hover:bg-sky-600",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      color: "bg-gray-600 hover:bg-gray-700",
    },
    {
      icon: <Link className="h-5 w-5" />,
      label: "Copy Link",
      color: "bg-green-600 hover:bg-green-700",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-white sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Share Trip</DialogTitle>
          <DialogDescription>
            Share your trip to {tripDetails.destination} (
            {new Date(tripDetails.startDate).toLocaleDateString()} -{" "}
            {new Date(tripDetails.endDate).toLocaleDateString()})
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4 py-4">
          {shareButtons.map((button) => (
            <Button
              key={button.label}
              className={`${button.color} text-white w-full flex items-center justify-center gap-2`}
              onClick={() => {}}
            >
              {button.icon}
              {button.label}
            </Button>
          ))}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShareTripDialog;
