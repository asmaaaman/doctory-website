import { Doctor, Appointment, Service, Review, TimeSlot } from "./types";

/**
 * Mock data for the doctor's website
 */

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    experience: 15,
    education: [
      "MD - Harvard Medical School",
      "Residency - Johns Hopkins Hospital",
      "Fellowship - Mayo Clinic",
    ],
    locations: ["Alexandria", "Cairo"],
    availability: {
      days: ["Monday", "Wednesday", "Friday"],
      hours: "9:00 AM - 5:00 PM",
    },
    rating: 4.8,
    reviews: 127,
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000",
    bio: "Dr. Johnson is a board-certified cardiologist with over 15 years of experience in treating heart conditions. She specializes in preventive cardiology and women's heart health.",
    consultationFee: 150,
    availabilityLabel: "Available Today",
    timeSlots: [
      { id: "1", time: "9:00 AM", isAvailable: true },
      { id: "2", time: "9:30 AM", isAvailable: false },
      { id: "3", time: "10:00 AM", isAvailable: true },
    ],
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialization: "Neurologist",
    experience: 12,
    education: [
      "MD - Stanford University",
      "Residency - UCSF Medical Center",
      "Fellowship - Cleveland Clinic",
    ],
    locations: ["Madinat Nasr", "Tagamou"],
    availability: {
      days: ["Tuesday", "Thursday", "Saturday"],
      hours: "10:00 AM - 6:00 PM",
    },
    timeSlots: [
      { id: "1", time: "11:00 AM", isAvailable: true },
      { id: "2", time: "1:00 PM", isAvailable: true },
    ],
    rating: 4.9,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000",
    bio: "Dr. Chen is a renowned neurologist specializing in movement disorders and neurodegenerative diseases. He has published numerous research papers and is actively involved in clinical trials.",
    consultationFee: 180,
    availabilityLabel: "Available This Week",
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialization: "Pediatrician",
    experience: 8,
    education: [
      "MD - UCLA School of Medicine",
      "Residency - Children's Hospital Los Angeles",
      "Fellowship - Boston Children's Hospital",
    ],
    locations: ["Alexandria", "Mansoura", "Cairo"],
    availability: {
      days: [
        "Monday",
        "Wednesday",
        "Friday",
        "Saturday",
        "Wednesday",
        "Friday",
        "Saturday",
      ],
      hours: "8:00 AM - 4:00 PM",
    },
    timeSlots: [
      { id: "1", time: "2:00 PM", isAvailable: true },
      { id: "2", time: "3:00 PM", isAvailable: true },
    ],
    availabilityLabel: "Available Next Week",
    rating: 4.7,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000",
    bio: "Dr. Rodriguez is a compassionate pediatrician with expertise in child development and behavioral health. She is known for her gentle approach with children and thorough communication with parents.",
    consultationFee: 120,
  },
];

export const appointments: Appointment[] = [];

export const services: Service[] = [
  {
    id: "1",
    name: "General Consultation",
    description:
      "Comprehensive medical consultation with detailed examination and health advice",
    duration: "30 minutes",
    price: 100,
    category: "General",
  },
  {
    id: "2",
    name: "Specialist Consultation",
    description:
      "In-depth consultation with a specialist in their field of expertise",
    duration: "45 minutes",
    price: 150,
    category: "Specialist",
  },
  {
    id: "3",
    name: "Emergency Consultation",
    description: "Urgent medical consultation for immediate health concerns",
    duration: "20 minutes",
    price: 200,
    category: "Emergency",
  },
];

export const reviews: Review[] = [
  {
    id: "1",
    doctorId: "1",
    patientName: "Robert Wilson",
    rating: 5,
    comment:
      "Dr. Johnson was extremely thorough and professional. She took the time to explain everything clearly and made me feel comfortable throughout the consultation.",
    date: "2024-04-15",
  },
  {
    id: "2",
    doctorId: "2",
    patientName: "Lisa Chen",
    rating: 4,
    comment:
      "Dr. Chen is very knowledgeable and experienced. The only reason for 4 stars is the long wait time in the office.",
    date: "2024-04-14",
  },
];

export const timeSlots: TimeSlot[] = [
  { id: "1", time: "9:00 AM", isAvailable: true },
  { id: "2", time: "9:30 AM", isAvailable: false },
  { id: "3", time: "10:00 AM", isAvailable: true },
  { id: "4", time: "10:30 AM", isAvailable: true },
  { id: "5", time: "11:00 AM", isAvailable: false },
  { id: "6", time: "11:30 AM", isAvailable: true },
  { id: "7", time: "2:00 PM", isAvailable: true },
  { id: "8", time: "2:30 PM", isAvailable: true },
  { id: "9", time: "3:00 PM", isAvailable: false },
  { id: "10", time: "3:30 PM", isAvailable: true },
  { id: "11", time: "4:00 PM", isAvailable: true },
  { id: "12", time: "4:30 PM", isAvailable: false },
];
