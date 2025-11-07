import { Chip } from "@mui/material";
import { TickCircle } from "./TickCircle";
import { CloseCircle } from "./CloseCircle";

interface ChipProps {
    status: string;
    theme: any
}

export const ChipComponent = ({ status, theme }: ChipProps) => {

    const colorStatus =
    status === "Alive"
      ? (theme.palette.primary as any).main
      : status === "Dead"
      ? (theme.palette.secondary as any).main
      : theme.palette.grey[500];

  return (
    <Chip
        icon={
        status === "Alive" ? (
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
            status === "Alive"
            ? (theme.palette.primary as any)[900]
            : (theme.palette.secondary as any)[800],
        }}
    />
  )
}
