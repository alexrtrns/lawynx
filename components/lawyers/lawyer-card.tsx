import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LawyerProfile } from "@/types/user";
import { Star, Clock } from "lucide-react";
import Link from "next/link";

interface LawyerCardProps {
  lawyer: LawyerProfile;
}

export function LawyerCard({ lawyer }: LawyerCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg">{lawyer.name}</h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <Star className="h-4 w-4 mr-1 text-yellow-400" />
            <span>{lawyer.rating.toFixed(1)} ({lawyer.consultationCount} consultations)</span>
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{lawyer.bio}</p>
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm">
          <p className="font-medium">${lawyer.hourlyRate}/hour</p>
          <div className="flex items-center text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            <span>{lawyer.experience} years exp.</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button asChild variant="outline" className="flex-1">
          <Link href={`/lawyers/${lawyer.id}`}>View Profile</Link>
        </Button>
        <Button asChild className="flex-1">
          <Link href={`/book/${lawyer.id}`}>Book Now</Link>
        </Button>
      </div>
    </Card>
  );
}