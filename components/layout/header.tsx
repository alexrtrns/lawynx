"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Scale, UserPlus, LogIn } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Scale className="h-6 w-6" />
          <span className="font-bold">LegalConnect</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/lawyers" className="text-foreground/60 hover:text-foreground">
            Find Lawyers
          </Link>
          <Link href="/how-it-works" className="text-foreground/60 hover:text-foreground">
            How it Works
          </Link>
          <ModeToggle />
          <Button variant="outline" size="sm" asChild>
            <Link href="/register">
              <UserPlus className="mr-2 h-4 w-4" />
              Register
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/login">
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}