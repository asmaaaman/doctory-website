import { create } from "zustand";
import {
  Doctor,
  Appointment,
  Service,
  Review,
  TimeSlot,
  SearchQuery,
  Filter,
} from "../data/types";
import {
  doctors,
  appointments,
  services,
  reviews,
  timeSlots,
} from "../data/mockData";

interface StoreState {
  doctors: Doctor[];
  appointments: Appointment[];
  services: Service[];
  reviews: Review[];
  timeSlots: TimeSlot[];
  searchQuery: SearchQuery;
  filter: Filter;

  // Actions
  searchDoctors: (query: string) => void;
  setSearchQuery: (query: string) => void;
  filterDoctors: (filter: Partial<Filter>) => void;
  addAppointment: (appointment: Appointment) => void;
  updateAppointmentStatus: (id: string, status: Appointment["status"]) => void;
  getDoctorById: (id: string) => Doctor | undefined;
  getDoctorReviews: (doctorId: string) => Review[];
  getAvailableTimeSlots: () => TimeSlot[];
  getFilteredDoctors: () => Doctor[];
}

export const useStore = create<StoreState>((set, get) => ({
  doctors,
  appointments,
  services,
  reviews,
  timeSlots,
  searchQuery: {
    query: "",
  },
  filter: {
    specialization: "",
    experience: 0,
    rating: 0,
    availability: "",
  },

  addAppointment: (appointment) => {
    set((state) => ({
      appointments: [...state.appointments, appointment],
    }));
  },

  updateAppointmentStatus: (id, status) => {
    set((state) => ({
      appointments: state.appointments.map((appointment) =>
        appointment.id === id ? { ...appointment, status } : appointment
      ),
    }));
  },

  getDoctorById: (id) => {
    return get().doctors.find((doctor) => doctor.id === id);
  },

  getDoctorReviews: (doctorId) => {
    return get().reviews.filter((review) => review.doctorId === doctorId);
  },

  getAvailableTimeSlots: () => {
    return get().timeSlots.filter((slot) => slot.isAvailable);
  },

  searchDoctors: (query: string) => {
    set((state) => ({
      searchQuery: {
        ...state.searchQuery,
        query,
      },
    }));
  },

  setSearchQuery: (query: string) => {
    set((state) => ({
      searchQuery: {
        ...state.searchQuery,
        query,
      },
    }));
  },

  filterDoctors: (filter: Partial<Filter>) => {
    set((state) => ({
      filter: {
        ...state.filter,
        ...filter,
      },
    }));
  },

  getFilteredDoctors: () => {
    const { doctors, searchQuery, filter } = get();

    return doctors.filter((doctor) => {
      const matchesSearch =
        searchQuery.query === "" ||
        doctor.name.toLowerCase().includes(searchQuery.query.toLowerCase()) ||
        doctor.specialization
          .toLowerCase()
          .includes(searchQuery.query.toLowerCase());

      const matchesSpecialization =
        filter.specialization === "" ||
        doctor.specialization
          .toLowerCase()
          .includes(filter.specialization.toLowerCase());

      const matchesAvailability =
        filter.availability === "" ||
        (doctor.availabilityLabel &&
          doctor.availabilityLabel
            .toLowerCase()
            .includes(filter.availability.toLowerCase()));

      return matchesSearch && matchesSpecialization && matchesAvailability;
    });
  },
}));
