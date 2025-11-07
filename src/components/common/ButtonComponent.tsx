import { Button } from "@mui/material";

interface BtnProps {
  backgroundColor: string;
  color?: string;
  text: string;
  fontSize?: string;
  onClick: () => void;
}

export const ButtonComponent = ({
  backgroundColor,
  color = "primary",
  text,
  fontSize = "14px",
  onClick,
}: BtnProps) => {
  return (
    <Button
      sx={{
        backgroundColor,
        color,
        fontFamily: "Montserrat",
        fontSize,
        fontWeight: 700,
        textTransform: "capitalize",
        "&:focus, &:focus-visible": {
          outline: "none",
          boxShadow: "none",
        },
        borderRadius: "24px",
        paddingX: "22px",
        paddingY: "16px",
        height: "44px",
        minWidth: "95px",
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
