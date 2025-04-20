import React, { useState, useEffect, useRef } from "react";
import { useStore } from "../store/useStore";
import { Doctor, Appointment } from "../data/types";

interface AppointmentModalProps {
  doctor: Doctor;
  isOpen: boolean;
  onClose: () => void;
}

const getAvailableDates = (days: string[], count = 14): string[] => {
  const dayMap: { [key: string]: number } = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };

  const availableDays = days.map((day) => dayMap[day]);
  const today = new Date();
  const dates: string[] = [];

  for (let i = 0; dates.length < count && i < 60; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    if (availableDays.includes(date.getDay())) {
      const formatted = date.toISOString().split("T")[0]; // yyyy-mm-dd
      dates.push(formatted);
    }
  }

  return dates;
};

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  doctor,
  isOpen,
  onClose,
}) => {
  const [patientName] = useState("");
  const [patientEmail] = useState("");
  const [patientPhone] = useState("");
  const [reason] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Refs for focus management
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dateSelectRef = useRef<HTMLSelectElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const addAppointment = useStore((state) => state.addAppointment);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      // Focus the close button when modal opens
      closeButtonRef.current?.focus();

      // Store the element that had focus before the modal opened
      const previouslyFocusedElement = document.activeElement as HTMLElement;

      // Handle focus trapping
      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === "Tab") {
          const focusableElements = modalRef.current?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );

          if (!focusableElements || focusableElements.length === 0) return;

          const firstFocusableElement = focusableElements[0] as HTMLElement;
          const lastFocusableElement = focusableElements[
            focusableElements.length - 1
          ] as HTMLElement;

          if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastFocusableElement) {
              firstFocusableElement.focus();
              e.preventDefault();
            }
          }
        }

        // Close on Escape key
        if (e.key === "Escape") {
          onClose();
        }
      };

      document.addEventListener("keydown", handleTabKey);

      // Restore focus when modal closes
      return () => {
        document.removeEventListener("keydown", handleTabKey);
        previouslyFocusedElement?.focus();
      };
    }
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newAppointment: Appointment = {
      id: Date.now().toString(),
      doctorId: doctor.id,
      patientName,
      patientEmail,
      patientPhone,
      date: selectedDate,
      time: selectedTime,
      status: "pending",
      type: "in-person",
      reason,
    };

    addAppointment(newAppointment);

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      ref={modalRef}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
        onClick={onClose}
      ></div>

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div
          className="relative w-full max-w-lg transform rounded-lg bg-white text-left shadow-xl transition-all p-6"
          role="document"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 id="modal-title" className="text-2xl font-bold">
              Book Appointment
            </h2>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 
              focus:outline-none rounded-full p-1"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          {/* Doctor Info */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.specialization}</p>
            {/*      <p className="text-gray-600">
              Consultation Fee: ${doctor.consultationFee}
            </p> */}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            aria-label="Appointment booking form"
          >
            {/* Doctor Info Full Width */}
            <div className="sm:col-span-2">
              <label
                htmlFor="date-select"
                className="block text-sm font-medium text-gray-700"
              >
                Date Slot
              </label>
              <select
                id="date-select"
                ref={dateSelectRef}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="mt-1 block w-full rounded-md p-3 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                aria-required="true"
              >
                <option value="">Select a date</option>
                {getAvailableDates(doctor.availability.days).map((date) => (
                  <option key={date} value={date}>
                    {new Date(date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="time-select"
                className="block text-sm font-medium text-gray-700"
              >
                Time Slot
              </label>
              <select
                id="time-select"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="mt-1 block w-full rounded-md p-3 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                aria-required="true"
              >
                <option value="">Select a time slot</option>
                {doctor.timeSlots
                  .filter((slot) => slot.isAvailable)
                  .map((slot) => (
                    <option key={slot.id} value={slot.time}>
                      {slot.time}
                    </option>
                  ))}
              </select>
            </div>

            {/* Your Name */}
            {/*      <div>
              <label
                htmlFor="patient-name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                id="patient-name"
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                aria-required="true"
              />
            </div> */}

            {/*      <div>
              <label
                htmlFor="patient-email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="patient-email"
                type="email"
                value={patientEmail}
                onChange={(e) => setPatientEmail(e.target.value)}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                aria-required="true"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="patient-phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                id="patient-phone"
                type="tel"
                value={patientPhone}
                onChange={(e) => setPatientPhone(e.target.value)}
                className="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                aria-required="true"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="reason"
                className="block text-sm font-medium text-gray-700"
              >
                Reason for Visit
              </label>
              <textarea
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                aria-required="true"
              />
            </div> */}

            {/* Actions */}
            <div className="sm:col-span-2 flex justify-end gap-3 mt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancel
              </button>
              <button
                ref={submitButtonRef}
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Confirm Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
