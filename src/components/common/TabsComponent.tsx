import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import theme from "../../theme/theme";

export interface TabItem {
  label: string;
  value: string | number;
}

interface TabsComponentProps {
  tabs: TabItem[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  centered?: boolean;
}

export const TabsComponent = ({
  tabs,
  value,
  onChange,
  centered = true,
}: TabsComponentProps) => {
  const [internalValue, setInternalValue] = useState(tabs[0]?.value ?? 0);

  const currentValue = value !== undefined ? value : internalValue;

  const handleChange = (_: React.SyntheticEvent, newValue: string | number) => {
    if (onChange) onChange(newValue);
    else setInternalValue(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: "#FAFAFA",
        height: "44px",
        borderRadius: "32px",
        padding: "4px",
        gap: "8px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Tabs
        value={currentValue}
        onChange={handleChange}
        centered={centered}
        sx={{
          minHeight: "36px",
          "& .MuiTabs-flexContainer": { gap: "8px" },
          "& .MuiTab-root": {
            textTransform: "capitalize",
            fontFamily: "Montserrat",
            fontWeight: 700,
            minHeight: "36px",
            borderRadius: "24px",
            paddingX: "22px",
          },
          "& .Mui-selected": {
            backgroundColor: (theme.palette.primary as any)[300],
          },
        }}
      >
        {tabs.map((tab) => (
          <Tab key={tab.value} label={tab.label} value={tab.value} />
        ))}
      </Tabs>
    </Box>
  );
};
