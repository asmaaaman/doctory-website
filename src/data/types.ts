/**
 * Type definitions for the doctor's website mock data
 */

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: number;
  education: string[];
  locations: string[];
  availability: {
    days: string[];
    hours: string;
  };
  availabilityLabel: string;
  rating: number;
  reviews: number;
  image: string;
  bio: string;
  consultationFee: number;
  timeSlots: TimeSlot[];
}

export interface Appointment {
  id: string;
  doctorId: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  date: string;
  time: string;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  type: "in-person" | "video" | "phone";
  reason: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  category: string;
}

export interface Review {
  id: string;
  doctorId: string;
  patientName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  isAvailable: boolean;
}

export interface Filter {
  specialization: string;
  experience: number;
  availability: string;
  rating: number;
}
export interface SearchQuery {
  query: string;
}
