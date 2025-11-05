import { useState } from "react";
import "./styles.css";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  useTheme,
  Button,
} from "@mui/material";
import type { TarjetaProps } from "./Tarjeta.types";
import { CloseCircle, FavoriteIcon, TickCircle } from "../common";
import { useIsMobileOrTablet } from "../../hooks/useIsMobile";

export const Tarjeta: React.FC<TarjetaProps> = ({
  name,
  species,
  status,
  lastLocation,
  firstEpisode,
  image,
  variant = "vertical-normal",
  onFavoriteChange
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const isMobile = useIsMobileOrTablet()

  const theme = useTheme();
  const colorStatus =
    status === "Vivo"
      ? (theme.palette.primary as any).main
      : status === "Muerto"
      ? (theme.palette.secondary as any).main
      : theme.palette.grey[500];

  return (
    <Card 
        className={`${variant} card`} 
        sx={{ 
            backgroundColor: theme.palette.background.paper,
        }}
    >
      <Box className={`card-image-container-${variant}`}>
        <Button
          sx={{
            position: "absolute",
            top: 0,
            ...(variant === "horizontal-normal" ? { left: 0 } : { right: 0 }),
            "&:focus, &:focus-visible": {
              outline: "none",
              boxShadow: "none",
            },
          }}          
          onClick={() => {
            const newValue = !isFavorite;
            setIsFavorite(newValue);
            onFavoriteChange?.(newValue);
          }}
        >
          <FavoriteIcon
            color={isFavorite ? (theme.palette.primary as any)[300] : "#FAFAFA"}
            colorStar={
              isFavorite
                ? (theme.palette.primary as any)[700]
                : ((theme.palette.secondary as any) as any)[400]
            }
          />
        </Button>
        <img src={image} alt={name} className="card-image" />
      </Box>
      <CardContent style={variant === 'horizontal-normal' ? { width: '100%' } : { width: 'auto' }}>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textTransform: "capitalize",
            }}
          >
            <Typography
              fontFamily="Montserrat"
              sx={{ fontSize: "18px", fontWeight: 600 }}
            >
              {name}
            </Typography>
            {
                !isMobile && (
                    <Chip
                      icon={
                        status === "Vivo" ? (
                          <TickCircle color={`${(theme.palette.primary as any)[900]}`} />
                        ) : (
                          <CloseCircle color={(theme.palette.secondary as any)[800]} />
                        )
                      }
                      label={status}
                      className="Chip"
                      sx={{
                        gap: "8px",
                        height: "32px",
                        fontSize: "14px",
                        paddingX: "8px",
                        backgroundColor: colorStatus,
                        color:
                          status === "Vivo"
                            ? (theme.palette.primary as any)[900]
                            : (theme.palette.secondary as any)[800],
                      }}
                    />
                )
            }
          </Box>
          <Typography
            fontFamily="Montserrat"
            fontWeight={500}
            color={(theme.palette.secondary as any)[600]}
            fontSize={14}
          >
            {species}
          </Typography>
        </Box>

        {!isMobile && (
          <Box mt={1} sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box width="50%">
              <Typography
                color={(theme.palette.secondary as any)[400]}
                fontWeight="bold"
                fontSize="12px"
                letterSpacing="2%"
                lineHeight="100%"
                fontFamily="Montserrat"
              >
                Last known location
              </Typography>
              <Typography
                fontFamily="Montserrat"
                fontSize="14px"
                lineHeight="20px"
                letterSpacing=" 0%"
                color={(theme.palette.secondary as any)[500]}
                fontWeight={500}
                mt="8px"
              >
                {lastLocation}
              </Typography>
            </Box>
            <Box width="50%">
              <Typography
                color={(theme.palette.secondary as any)[400]}
                fontWeight="bold"
                fontSize="12px"
                letterSpacing="2%"
                lineHeight="100%"
                fontFamily="Montserrat"
              >
                First seen in
              </Typography>
              <Typography
                fontFamily="Montserrat"
                fontSize="14px"
                lineHeight="20px"
                letterSpacing=" 0%"
                color={(theme.palette.secondary as any)[500]}
                fontWeight={500}
                mt="8px"
              >
                {firstEpisode}
              </Typography>
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};
