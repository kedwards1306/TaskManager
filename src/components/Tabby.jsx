import React from "react";
import { Tabs, Tab, Box } from "@mui/material";

export default function Tabby({ tabs, selected, setSelected, children }) {
  
  // Use the parent's selected index directly
  const handleChange = (event, newIndex) => {
    console.log("Event:", event);
    console.log("New Index:", newIndex); // Check if this logs the new index
    setSelected?.(newIndex); // Communicate with the parent
  };

  React.useEffect(() => {
    console.log("Current selected index:", selected);
  }, [selected]);

  console.log("Tabs component is receiving value:", selected);

  return (
    <Box sx={{ width: "100%", px: { xs: 1, sm: 0 } }}>
      {/* Tab List */}
      <Tabs
        value={selected} // This should be a number (0, 1, 2, etc.)
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          borderBottom: "2px solid #e0e0e0",
          display: "flex",
          gap: "24px",
          p: 1,
        }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={tab.title}
            icon={tab.icon}
            label={tab.title}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 500,
              padding: "12px 16px",
              backgroundColor: "white",
              color: selected === index ? "#1E40AF" : "#424242",
              borderBottom: selected === index ? "2px solid #2563eb" : "none",
              "&:hover": {
                backgroundColor: "#f0f0f0",
                color: "#1E40AF",
              },
            }}
            onClick={() => {
              console.log("Clicked Tab: ", tab.title);
              console.log("Clicked Index: ", index);
            }}
          />
        ))}
      </Tabs>

      {/* Tab Panels */}
      <Box sx={{ width: "100%", mt: 2 }}>
        {tabs.length === React.Children.count(children) && Array.isArray(children)
          ? children[selected]
          : <>{children}</>}
      </Box>
    </Box>
  );
}
