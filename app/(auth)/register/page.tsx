"use client";

import { Card } from "@/components/ui/card";
import { AuthForm } from "@/components/auth/auth-form";
import { RoleSelector } from "@/components/auth/role-selector";
import { useState } from "react";
import { UserRole } from "@/types/user";

export default function RegisterPage() {
  const [selectedRole, setSelectedRole] = useState<UserRole>("client");

  return (
    <div className="container max-w-md mx-auto px-4 py-16">
      <Card className="p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>
        <RoleSelector selected={selectedRole} onSelect={setSelectedRole} />
        <AuthForm mode="register" role={selectedRole} />
      </Card>
    </div>
  );
}