export interface TarjetaProps {
    name: string;
    species: "Humano" | "Cronenbergs" | "Meeseeks" | "Arañas gigantes telépatas";
    status: "Vivo" | "Muerto";
    lastLocation: string;
    firstEpisode: string;
    image: string;
    variant?: "vertical-normal" | "vertical-small" | "horizontal-normal";
    genere?: "Masculino" | "Femenino" | "Desconocido",
    onFavoriteChange?: (isFavorite: boolean) => void
  }  