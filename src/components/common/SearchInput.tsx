import { useState, useEffect } from "react";
import {
  Box,
  InputBase,
  InputAdornment,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchInputProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  maxWidth?: string | number;
  minWidth?: string | number;
  debounceTime?: number;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Buscar personaje por nombre",
  onChange,
  maxWidth = "1040px",
  debounceTime = 500,
}) => {
  const theme = useTheme();
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onChange?.(value);
    }, debounceTime);

    return () => {
      clearTimeout(handler);
    };
  }, [value, debounceTime, onChange]);

  return (
    <Box
      sx={{
        width: '96%',
        maxWidth,
        border: `1px solid ${
          focused
            ? (theme.palette.secondary as any)[400]
            : "rgba(255, 255, 255, 0.3)"
        }`,
        borderRadius: "8px",
        backdropFilter: "blur(1px)",
        backgroundColor: "rgba(0,0,0,0.75)",
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        px: 2,
        height: "56px",
      }}
    >
      <InputBase
        fullWidth
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon
              sx={{
                color: (theme.palette.primary as any)[500],
                fontSize: 20,
                mr: 1,
              }}
            />
          </InputAdornment>
        }
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        sx={{
          color: theme.palette.secondary.main,
          fontSize: "14px",
          "& input::placeholder": {
            color: "rgba(255, 255, 255, 0.6)",
            opacity: 1,
          },
          fontFamily: 'Montserrat'
        }}
      />
    </Box>
  );
};