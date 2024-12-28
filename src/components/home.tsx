import React, { useState } from "react";
import TripGrid from "./trips/TripGrid";
import DeleteTripDialog from "./trips/DeleteTripDialog";
import ShareTripDialog from "./trips/ShareTripDialog";
import Header from "./Header.jsx";

interface HomeProps {
  onAddTrip?: () => void;
}

const Home = ({ onAddTrip = () => {} }: HomeProps) => {
  const [deleteDialogState, setDeleteDialogState] = useState({
    isOpen: false,
    tripId: "",
    destination: "",
  });

  const [shareDialogState, setShareDialogState] = useState({
    isOpen: false,
    tripDetails: {
      destination: "",
      startDate: "",
      endDate: "",
    },
  });

  const handleEditTrip = (id: string) => {
    console.log(`Edit trip ${id}`);
  };

  const handleDeleteTrip = (id: string) => {
    setDeleteDialogState({
      isOpen: true,
      tripId: id,
      destination: "San Francisco", // In real app, get from trip data
    });
  };

  const handleShareTrip = (id: string) => {
    setShareDialogState({
      isOpen: true,
      tripDetails: {
        destination: "San Francisco", // In real app, get from trip data
        startDate: "2024-03-01",
        endDate: "2024-03-07",
      },
    });
  };

  const handleConfirmDelete = () => {
    console.log(`Deleting trip ${deleteDialogState.tripId}`);
    setDeleteDialogState({ isOpen: false, tripId: "", destination: "" });
  };

  const handleProfileClick = () => {
    console.log("Profile clicked");
  };

  const handleSettingsClick = () => {
    console.log("Settings clicked");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onProfileClick={handleProfileClick}
        onSettingsClick={handleSettingsClick}
      />
      <div className="p-6">
        <TripGrid
          onAddTrip={onAddTrip}
          onEditTrip={handleEditTrip}
          onDeleteTrip={handleDeleteTrip}
          onShareTrip={handleShareTrip}
        />

        <DeleteTripDialog
          open={deleteDialogState.isOpen}
          onOpenChange={(open) =>
            setDeleteDialogState({ ...deleteDialogState, isOpen: open })
          }
          tripDestination={deleteDialogState.destination}
          onConfirm={handleConfirmDelete}
          onCancel={() =>
            setDeleteDialogState({ isOpen: false, tripId: "", destination: "" })
          }
        />

        <ShareTripDialog
          open={shareDialogState.isOpen}
          onClose={() =>
            setShareDialogState({
              isOpen: false,
              tripDetails: { destination: "", startDate: "", endDate: "" },
            })
          }
          tripDetails={shareDialogState.tripDetails}
        />
      </div>
    </div>
  );
};

export default Home;
