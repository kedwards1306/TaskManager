import React from "react";
import TaskCard from "./TaskCard";
import { Box, Typography } from "@mui/material";

const BoardView = ({ tasks }) => {
  console.log("BoardView Rendered"); // This confirms if BoardView is even rendering
  console.log("Tasks received in BoardView:", tasks); // Log tasks here

  return (
    <><Box sx={{ width: "100%", py: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
      {tasks && tasks.length > 0 ? (
        tasks.map((task, index) => (
          <Box key={index} sx={{ width: '100%', sm: '48%', md: '30%', padding: 1 }}>
            <TaskCard task={task} />

          </Box>

        ))
      ) : (
        <Typography>No tasks available</Typography>
      )}
    </Box></>
  );
};

export default BoardView;
