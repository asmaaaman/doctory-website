import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import DoctorCard from "../../components/DoctorsCard";
import { doctors } from "../../data/mockData";

// Mock the AppointmentModal component
vi.mock("../../components/AppointmentModal", () => ({
  AppointmentModal: ({
    isOpen,
    onClose,
    doctor,
  }: {
    isOpen: boolean;
    onClose: () => void;
    doctor: { name: string };
  }) => {
    if (!isOpen) return null;
    return (
      <div data-testid="appointment-modal">
        <h2>Book Appointment with {doctor.name}</h2>
        <button onClick={onClose}>Close</button>
      </div>
    );
  },
}));

describe("DoctorCard Component", () => {
  it("renders doctor information correctly", () => {
    const doctor = doctors[0];
    const { getByText } = render(<DoctorCard doctor={doctor} />);

    // Check if doctor name is rendered
    expect(getByText(doctor.name)).toBeInTheDocument();

    // Check if specialization is rendered
    expect(getByText(doctor.specialization)).toBeInTheDocument();

    // Check if experience is rendered
    expect(
      getByText(`${doctor.experience} years experience`)
    ).toBeInTheDocument();

    // Check if languages are rendered
    doctor.languages.forEach((language) => {
      expect(getByText(language)).toBeInTheDocument();
    });

    // Check if availability days are rendered
    doctor.availability.days.forEach((day) => {
      expect(getByText(day)).toBeInTheDocument();
    });

    // Check if consultation fee is rendered
    expect(getByText(`$${doctor.consultationFee}`)).toBeInTheDocument();

    // Check if book appointment button is rendered
    expect(getByText("Book Appointment")).toBeInTheDocument();
  });

  it("opens appointment modal when book appointment button is clicked", () => {
    const doctor = doctors[0];
    const { getByText, queryByTestId, fireEvent } = render(
      <DoctorCard doctor={doctor} />
    );

    // Initially, modal should not be visible
    expect(queryByTestId("appointment-modal")).not.toBeInTheDocument();

    // Click the book appointment button
    fireEvent.click(getByText("Book Appointment"));

    // Modal should now be visible
    expect(queryByTestId("appointment-modal")).toBeInTheDocument();

    // Check if doctor name is in the modal
    expect(
      getByText(`Book Appointment with ${doctor.name}`)
    ).toBeInTheDocument();

    // Close the modal
    fireEvent.click(getByText("Close"));

    // Modal should be closed again
    expect(queryByTestId("appointment-modal")).not.toBeInTheDocument();
  });

  it("displays rating and reviews correctly", () => {
    const doctor = doctors[0];
    const { getByText } = render(<DoctorCard doctor={doctor} />);

    // Check if rating is displayed
    expect(getByText(doctor.rating.toString())).toBeInTheDocument();
  });

  it("displays availability label correctly", () => {
    const doctor = doctors[0];
    const { getByText } = render(<DoctorCard doctor={doctor} />);

    // Check if availability label is displayed
    expect(getByText(doctor.availabilityLabel)).toBeInTheDocument();
  });
});
