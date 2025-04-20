import { describe, it, expect } from "vitest";
import {
  doctors,
  appointments,
  services,
  reviews,
  timeSlots,
} from "../../data/mockData";
import type {
  Doctor,
  Appointment,
  Service,
  Review,
  TimeSlot,
} from "../../data/types";

describe("Mock Data Tests", () => {
  describe("Doctors Data", () => {
    it("should have valid doctor objects", () => {
      expect(doctors).toBeDefined();
      expect(Array.isArray(doctors)).toBe(true);
      expect(doctors.length).toBeGreaterThan(0);

      doctors.forEach((doctor: Doctor) => {
        expect(doctor.id).toBeDefined();
        expect(doctor.name).toBeDefined();
        expect(doctor.specialization).toBeDefined();
        expect(doctor.experience).toBeGreaterThanOrEqual(0);
        expect(Array.isArray(doctor.education)).toBe(true);
        expect(Array.isArray(doctor.languages)).toBe(true);
        expect(doctor.availability).toBeDefined();
        expect(Array.isArray(doctor.availability.days)).toBe(true);
        expect(doctor.availability.hours).toBeDefined();
        expect(doctor.rating).toBeGreaterThanOrEqual(0);
        expect(doctor.rating).toBeLessThanOrEqual(5);
        expect(doctor.reviews).toBeGreaterThanOrEqual(0);
        expect(doctor.image).toBeDefined();
        expect(doctor.bio).toBeDefined();
        expect(doctor.consultationFee).toBeGreaterThan(0);
        expect(doctor.availabilityLabel).toBeDefined();
        expect(Array.isArray(doctor.timeSlots)).toBe(true);
      });
    });
  });

  describe("Appointments Data", () => {
    it("should have valid appointment objects", () => {
      expect(appointments).toBeDefined();
      expect(Array.isArray(appointments)).toBe(true);

      appointments.forEach((appointment: Appointment) => {
        expect(appointment.id).toBeDefined();
        expect(appointment.doctorId).toBeDefined();
        expect(appointment.patientName).toBeDefined();
        expect(appointment.patientEmail).toBeDefined();
        expect(appointment.patientPhone).toBeDefined();
        expect(appointment.date).toBeDefined();
        expect(appointment.time).toBeDefined();
        expect(["pending", "confirmed", "cancelled", "completed"]).toContain(
          appointment.status
        );
        expect(["in-person", "video", "phone"]).toContain(appointment.type);
        expect(appointment.reason).toBeDefined();
      });
    });
  });

  describe("Services Data", () => {
    it("should have valid service objects", () => {
      expect(services).toBeDefined();
      expect(Array.isArray(services)).toBe(true);
      expect(services.length).toBeGreaterThan(0);

      services.forEach((service: Service) => {
        expect(service.id).toBeDefined();
        expect(service.name).toBeDefined();
        expect(service.description).toBeDefined();
        expect(service.duration).toBeDefined();
        expect(service.price).toBeGreaterThan(0);
        expect(service.category).toBeDefined();
      });
    });
  });

  describe("Reviews Data", () => {
    it("should have valid review objects", () => {
      expect(reviews).toBeDefined();
      expect(Array.isArray(reviews)).toBe(true);
      expect(reviews.length).toBeGreaterThan(0);

      reviews.forEach((review: Review) => {
        expect(review.id).toBeDefined();
        expect(review.doctorId).toBeDefined();
        expect(review.patientName).toBeDefined();
        expect(review.rating).toBeGreaterThanOrEqual(0);
        expect(review.rating).toBeLessThanOrEqual(5);
        expect(review.comment).toBeDefined();
        expect(review.date).toBeDefined();
      });
    });
  });

  describe("TimeSlots Data", () => {
    it("should have valid timeSlot objects", () => {
      expect(timeSlots).toBeDefined();
      expect(Array.isArray(timeSlots)).toBe(true);
      expect(timeSlots.length).toBeGreaterThan(0);

      timeSlots.forEach((timeSlot: TimeSlot) => {
        expect(timeSlot.id).toBeDefined();
        expect(timeSlot.time).toBeDefined();
        expect(typeof timeSlot.isAvailable).toBe("boolean");
      });
    });
  });
});
