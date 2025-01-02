"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { AuthForm } from "@/components/auth/auth-form";

export default function LoginPage() {
  return (
    <div className="container max-w-md mx-auto px-4 py-16">
      <Card className="p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome Back</h1>
        <AuthForm mode="login" />
      </Card>
    </div>
  );
}