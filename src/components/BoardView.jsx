import React from "react";
import TaskCard from "./Taskcard";
import { Grid2, Box } from "@mui/material";

const BoardView = ({ tasks }) => {
  return (
    <Box sx={{ width: "100%", py: 2 }}>
      <Grid2 container spacing={2} sx={{ justifyContent: "center" }}>
        {tasks.map((task, index) => (
          <Grid2
            item
            xs={12} // Default 1 column
            sm={6}  // 2 columns on small screens
            md={4}  // 3 columns on medium screens
            key={index}
          >
            <TaskCard task={task} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default BoardView;
