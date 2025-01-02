export type UserRole = 'client' | 'lawyer';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
}

export interface LawyerProfile extends User {
  specializations: string[];
  experience: number;
  hourlyRate: number;
  bio: string;
  availability: {
    start: string;
    end: string;
    days: number[];
  };
  rating: number;
  consultationCount: number;
}