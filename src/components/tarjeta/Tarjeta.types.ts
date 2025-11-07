export interface TarjetaProps {
    id: string | number;
    name: string;
    species: string;
    status: "Alive" | "Dead";
    location: string;
    image: string;
    variant?: "vertical-normal" | "vertical-small" | "horizontal-normal";
    gender?: "Male" | "Female" | "unknown",
    onFavoriteChange?: (id: string | number, isFavorite: boolean) => void
  }  