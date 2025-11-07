import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Tarjeta } from "./Tarjeta";

// 🧩 Mocks de componentes comunes
vi.mock("../common", () => ({
  FavoriteIcon: ({ color, colorStar }: { color: string; colorStar: string }) => (
    <svg data-testid="favorite-icon">
      <path data-testid="circle-path" fill={color} />
      <path data-testid="star-path" fill={colorStar} />
    </svg>
  ),
  ChipComponent: ({ status }: { status: string }) => (
    <div data-testid="chip">{status}</div>
  ),
}));

// 📱 Mock del hook para controlar modo mobile
vi.mock("../../hooks/useIsMobile", () => ({
  useIsMobileOrTablet: () => false, // Cambia a true si quieres simular mobile
}));

// 🎨 Función de ayuda para renderizar con tema de MUI
const theme = createTheme();

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}

describe("Tarjeta component", () => {
  it("renders character name and species correctly", () => {
    renderWithTheme(
      <Tarjeta
        id={1}
        name="Morty Smith"
        species="Human"
        status="Alive"
        location="Earth (Replacement Dimension)"
        gender="Male"
        image="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
      />
    );

    expect(screen.getByText("Morty Smith")).toBeInTheDocument();
    expect(screen.getByText("Human")).toBeInTheDocument();
  });

  it("renders the chip with the status text", () => {
    renderWithTheme(
      <Tarjeta
        id={2}
        name="Rick Sanchez"
        species="Human"
        status="Alive"
        location="Citadel of Ricks"
        gender="Male"
        image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      />
    );

    const chip = screen.getByTestId("chip");
    expect(chip).toHaveTextContent("Alive");
  });

  it("calls onFavoriteChange when favorite button is clicked", () => {
    const mockFavoriteChange = vi.fn();

    renderWithTheme(
      <Tarjeta
        id={3}
        name="Summer Smith"
        species="Human"
        status="Alive"
        location="Earth"
        gender="Female"
        image="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
        onFavoriteChange={mockFavoriteChange}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockFavoriteChange).toHaveBeenCalledWith(3, true);
  });

  it("renders gender and location labels when not on mobile", () => {
    renderWithTheme(
      <Tarjeta
        id={4}
        name="Beth Smith"
        species="Human"
        status="Alive"
        location="Earth"
        gender="Female"
        image="https://rickandmortyapi.com/api/character/avatar/4.jpeg"
      />
    );

    expect(screen.getByText(/Last known location/i)).toBeInTheDocument();
    expect(screen.getByText(/gender/i)).toBeInTheDocument();
    expect(screen.getByText("Earth")).toBeInTheDocument();
    expect(screen.getByText("Female")).toBeInTheDocument();
  });
});
