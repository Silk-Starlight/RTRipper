import React, { useState } from "react";
import TripCard from "./TripCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";

interface Trip {
  id: string;
  coverPhoto: string;
  destination: string;
  startDate: string;
  endDate: string;
  totalMiles: number;
  stops: number;
  isPast: boolean;
}

interface TripGridProps {
  trips?: Trip[];
  onAddTrip?: () => void;
  onEditTrip?: (id: string) => void;
  onDeleteTrip?: (id: string) => void;
  onShareTrip?: (id: string) => void;
}

const defaultTrips: Trip[] = [
  {
    id: "1",
    coverPhoto: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
    destination: "San Francisco",
    startDate: "2024-03-01",
    endDate: "2024-03-07",
    totalMiles: 500,
    stops: 3,
    isPast: false,
  },
  {
    id: "2",
    coverPhoto: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4",
    destination: "New York City",
    startDate: "2023-12-15",
    endDate: "2023-12-20",
    totalMiles: 800,
    stops: 5,
    isPast: true,
  },
  {
    id: "3",
    coverPhoto: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    destination: "Las Vegas",
    startDate: "2024-04-10",
    endDate: "2024-04-15",
    totalMiles: 300,
    stops: 2,
    isPast: false,
  },
];

const TripGrid = ({
  trips = defaultTrips,
  onAddTrip = () => {},
  onEditTrip = () => {},
  onDeleteTrip = () => {},
  onShareTrip = () => {},
}: TripGridProps) => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const filteredTrips = trips.filter((trip) =>
    activeTab === "upcoming" ? !trip.isPast : trip.isPast,
  );

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">My Trips</h1>
          <Button onClick={onAddTrip} size="lg">
            <Plus className="mr-2 h-5 w-5" />
            Add New Trip
          </Button>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger
              value="upcoming"
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming Trips
            </TabsTrigger>
            <TabsTrigger value="past" onClick={() => setActiveTab("past")}>
              Past Trips
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTrips.map((trip) => (
                <TripCard
                  key={trip.id}
                  coverPhoto={trip.coverPhoto}
                  destination={trip.destination}
                  startDate={trip.startDate}
                  endDate={trip.endDate}
                  totalMiles={trip.totalMiles}
                  stops={trip.stops}
                  isPast={trip.isPast}
                  onEdit={() => onEditTrip(trip.id)}
                  onDelete={() => onDeleteTrip(trip.id)}
                  onShare={() => onShareTrip(trip.id)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTrips.map((trip) => (
                <TripCard
                  key={trip.id}
                  coverPhoto={trip.coverPhoto}
                  destination={trip.destination}
                  startDate={trip.startDate}
                  endDate={trip.endDate}
                  totalMiles={trip.totalMiles}
                  stops={trip.stops}
                  isPast={trip.isPast}
                  onEdit={() => onEditTrip(trip.id)}
                  onDelete={() => onDeleteTrip(trip.id)}
                  onShare={() => onShareTrip(trip.id)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TripGrid;
