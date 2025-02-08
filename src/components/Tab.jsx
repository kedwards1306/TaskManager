import React from "react";
import { Tabs, Tab, Box } from "@mui/material";

export default function MuiTabs({ tabs, setSelected, children }) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleChange = (event, newIndex) => {
    setSelectedIndex(newIndex);
    setSelected(newIndex);
  };

  return (
    <Box sx={{ width: "100%", px: { xs: 1, sm: 0 } }}>
      {/* Tab List */}
      <Tabs
        value={selectedIndex}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          borderBottom: "2px solid #e0e0e0", // Optional bottom border
        }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={tab.title}
            icon={tab.icon}
            label={tab.title}
            sx={{
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 500,
              padding: "12px 16px",
              color: selectedIndex === index ? "#1E40AF" : "#424242",
              borderBottom: selectedIndex === index ? "2px solid #2563eb" : "none",
              "&:hover": {
                color: "#1E40AF",
              },
            }}
          />
        ))}
      </Tabs>

      {/* Tab Panels */}
      <Box sx={{ width: "100%", mt: 2 }}>
        {/* Ensure `children` is an array and fallback to an empty array */}
        {Array.isArray(children) ? children[selectedIndex] : children}
      </Box>
    </Box>
  );
}
