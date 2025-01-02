"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function LawyerSearch() {
  return (
    <div className="flex gap-4 max-w-2xl">
      <div className="flex-1">
        <Input placeholder="Search by name, specialization, or location" />
      </div>
      <Button>
        <Search className="h-4 w-4 mr-2" />
        Search
      </Button>
    </div>
  );
}