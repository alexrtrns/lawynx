"use client";

import { Button } from "@/components/ui/button";
import { UserRole } from "@/types/user";
import { Scale, User } from "lucide-react";

interface RoleSelectorProps {
  selected: UserRole;
  onSelect: (role: UserRole) => void;
}

export function RoleSelector({ selected, onSelect }: RoleSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <Button
        variant={selected === "client" ? "default" : "outline"}
        className="flex flex-col py-4 h-auto"
        onClick={() => onSelect("client")}
      >
        <User className="h-6 w-6 mb-2" />
        <span>I need legal help</span>
      </Button>
      <Button
        variant={selected === "lawyer" ? "default" : "outline"}
        className="flex flex-col py-4 h-auto"
        onClick={() => onSelect("lawyer")}
      >
        <Scale className="h-6 w-6 mb-2" />
        <span>I&apos;m a lawyer</span>
      </Button>
    </div>
  );
}