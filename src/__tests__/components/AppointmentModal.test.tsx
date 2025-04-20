import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { AppointmentModal } from "../../components/AppointmentModal";
import { doctors } from "../../data/mockData";

describe("AppointmentModal Component", () => {
  const doctor = doctors[0];
  const mockOnClose = vi.fn();

  it("renders modal when isOpen is true", () => {
    const { getByText } = render(
      <AppointmentModal doctor={doctor} isOpen={true} onClose={mockOnClose} />
    );

    // Check if modal title is rendered
    expect(getByText(/book appointment/i)).toBeInTheDocument();

    // Check if doctor name is rendered
    expect(getByText(doctor.name)).toBeInTheDocument();

    // Check if specialization is rendered
    expect(getByText(doctor.specialization)).toBeInTheDocument();

    // Check if consultation fee is rendered
    expect(getByText(`$${doctor.consultationFee}`)).toBeInTheDocument();

    // Check if close button is rendered
    expect(getByText(/close/i)).toBeInTheDocument();
  });

  it("does not render modal when isOpen is false", () => {
    const { queryByText } = render(
      <AppointmentModal doctor={doctor} isOpen={false} onClose={mockOnClose} />
    );

    // Modal should not be visible
    expect(queryByText(/book appointment/i)).not.toBeInTheDocument();
  });

  it("displays available time slots correctly", () => {
    const { getByText } = render(
      <AppointmentModal doctor={doctor} isOpen={true} onClose={mockOnClose} />
    );

    // Check if time slots section is rendered
    expect(getByText(/available time slots/i)).toBeInTheDocument();

    // Check if available time slots are rendered
    doctor.timeSlots
      .filter((slot) => slot.isAvailable)
      .forEach((slot) => {
        expect(getByText(slot.time)).toBeInTheDocument();
      });
  });
});
