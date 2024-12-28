import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, Edit, Trash2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

interface TripCardProps {
  coverPhoto?: string;
  destination?: string;
  startDate?: string;
  endDate?: string;
  totalMiles?: number;
  stops?: number;
  isPast?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  onShare?: () => void;
}

const TripCard = ({
  coverPhoto = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
  destination = "San Francisco",
  startDate = "2024-03-01",
  endDate = "2024-03-07",
  totalMiles = 500,
  stops = 3,
  isPast = false,
  onEdit = () => {},
  onDelete = () => {},
  onShare = () => {},
}: TripCardProps) => {
  return (
    <Card className="w-[340px] h-[380px] bg-white hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <img
            src={coverPhoto}
            alt={destination}
            className="w-full h-full object-cover rounded-t-lg"
          />
          <Badge
            className={`absolute top-4 right-4 ${isPast ? "bg-gray-500" : "bg-green-500"}`}
          >
            {isPast ? "Past" : "Upcoming"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{destination}</h3>
        <div className="text-sm text-gray-600 space-y-1">
          <p>{`${new Date(startDate).toLocaleDateString()} - ${new Date(endDate).toLocaleDateString()}`}</p>
          <p>{`${totalMiles} miles • ${stops} stops`}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-end gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" onClick={onEdit}>
                <Edit className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Edit trip</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" onClick={onDelete}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delete trip</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" onClick={onShare}>
                <Share2 className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Share trip</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
};

export default TripCard;
