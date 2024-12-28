import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface DeleteTripDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  tripDestination?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const DeleteTripDialog = ({
  open = true,
  onOpenChange = () => {},
  tripDestination = "San Francisco",
  onConfirm = () => {},
  onCancel = () => {},
}: DeleteTripDialogProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Trip</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete your trip to {tripDestination}? This
            action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="bg-red-500 hover:bg-red-600"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteTripDialog;
