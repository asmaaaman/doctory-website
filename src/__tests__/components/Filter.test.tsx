import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { Filter } from "../../components/Filter";

// Mock the store
vi.mock("../../store/useStore", () => ({
  useStore: () => ({
    filterDoctors: vi.fn(),
    doctors: [
      { specialization: "Cardiologist", availabilityLabel: "Available Today" },
      {
        specialization: "Neurologist",
        availabilityLabel: "Available This Week",
      },
    ],
  }),
}));

describe("Filter Component", () => {
  it("renders filter form correctly", () => {
    const { getByText, getByRole } = render(<Filter />);

    // Check if specialization dropdown is rendered
    expect(getByRole("combobox", { name: "" })).toBeInTheDocument();

    // Check if availability dropdown is rendered
    const dropdowns = document.querySelectorAll("select");
    expect(dropdowns.length).toBe(2);

    // Check if reset button is rendered
    expect(getByText("Filters")).toBeInTheDocument();
  });

  it("displays specialization options correctly", () => {
    const { getByText } = render(<Filter />);

    // Check if default option is displayed
    expect(getByText("All Specializations")).toBeInTheDocument();

    // Check if doctor specializations are displayed
    expect(getByText("Cardiologist")).toBeInTheDocument();
    expect(getByText("Neurologist")).toBeInTheDocument();
  });

  it("displays availability options correctly", () => {
    const { getByText } = render(<Filter />);

    // Check if default option is displayed
    expect(getByText("All Availability")).toBeInTheDocument();

    // Check if availability options are displayed
    expect(getByText("Available Today")).toBeInTheDocument();
    expect(getByText("Available This Week")).toBeInTheDocument();
    expect(getByText("Available Next Week")).toBeInTheDocument();
  });
});
