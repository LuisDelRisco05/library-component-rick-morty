import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Tarjeta } from "./Tarjeta";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { TarjetaProps } from "./Tarjeta.types";

// Mocks simples de íconos
vi.mock("../common", () => ({
  FavoriteIcon: ({
    color = "#FAFAFA",
    colorStar = "#CCCCCC",
  }: {
    color?: string;
    colorStar?: string;
  }) => (
    <svg data-testid="favorite-icon">
      <path data-testid="circle-path" fill={color}></path>
      <path data-testid="star-path" fill={colorStar}></path>
    </svg>
  ),
  TickCircle: () => <svg data-testid="tick-icon"></svg>,
  CloseCircle: () => <svg data-testid="close-icon"></svg>,
}));



// Mock de hook useIsMobileOrTablet
vi.mock("../../hooks/useIsMobile", () => ({
  useIsMobileOrTablet: () => false,
}));

const theme = createTheme();

describe("Tarjeta component", () => {
  const baseProps: Pick<TarjetaProps, "name" | "species" | "status" | "lastLocation" | "firstEpisode" | "image"> = {
    name: "Rick Sanchez",
    species: "Humano",
    status: "Vivo",
    lastLocation: "Earth (C-137)",
    firstEpisode: "Pilot",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  };

  const renderWithTheme = (props = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <Tarjeta {...baseProps} {...props} />
      </ThemeProvider>
    );

  it("renderiza correctamente el nombre y la especie", () => {
    renderWithTheme();
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Human")).toBeInTheDocument();
  });

  it("muestra el ícono de favorito y cambia al hacer click", () => {
    renderWithTheme();
  
    const starPath = screen.getByTestId("star-path");
  
    // Verifica que tenga algún valor en fill
    expect(starPath.getAttribute("fill")).toBeTruthy();
  
    // Click en el botón que cambia el estado de favorito
    fireEvent.click(screen.getByTestId("favorite-icon"));
  
    // Verifica que cambió el color a la paleta primaria[300]
    expect(starPath).toHaveAttribute("fill", (theme.palette.primary as any)[300]);
  });
  
  
  

  it("muestra el Chip de estado correcto (Vivo con ícono TickCircle)", () => {
    renderWithTheme();
    expect(screen.getByText("Vivo")).toBeInTheDocument();
    expect(screen.getByTestId("tick-icon")).toBeInTheDocument();
  });

  it("usa el ícono CloseCircle cuando el personaje está muerto", () => {
    renderWithTheme({ status: "Muerto" });
    expect(screen.getByTestId("close-icon")).toBeInTheDocument();
  });

  it("cambia layout cuando el variant es horizontal-normal", () => {
    renderWithTheme({ variant: "horizontal-normal" });

    const card = screen.getByRole("button").closest(".horizontal-normal");
    expect(card).toBeInTheDocument();
  });
});
