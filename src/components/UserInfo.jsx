import React, { useState } from "react";
import {
  Popover,
} from "@mui/material";
import { Avatar, Box, Typography } from "@mui/material";
import { getInitial } from "../utils";

const UserInfo = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ px: 2, display: "inline-block" }}>
      <Avatar
        onClick={handleOpen}
        sx={{
          bgcolor: "blue",
          width: 40,
          height: 40,
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        {getInitial(user?.name)}
      </Avatar>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Box sx={{ display: "flex", alignItems: "center", p: 2, gap: 2 }}>
          <Avatar sx={{ bgcolor: "blue", width: 64, height: 64, fontSize: 24 }}>
            {getInitials(user?.name)}
          </Avatar>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {user?.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {user?.title}
            </Typography>
            <Typography variant="body2" color="primary">
              {user?.email ?? "email@example.com"}
            </Typography>
          </Box>
        </Box>
      </Popover>
    </Box>
  );
};

export default UserInfo;
