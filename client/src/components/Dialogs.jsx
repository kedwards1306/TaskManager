import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { FaQuestion } from "react-icons/fa";

export default function ConfirmationDialog({
  open,
  setOpen,
  msg,
  setMsg = () => {},
  onClick = () => {},
  type = "delete",
  setType = () => {},
}) {
  const closeDialog = () => {
    setType("delete");
    setMsg(null);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={closeDialog} maxWidth="xs" fullWidth>
      <DialogTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
          }}
        >
          <IconButton
            sx={{
              backgroundColor: type.includes("restore") ? "yellow.100" : "red.200",
              color: type.includes("restore") ? "yellow.700" : "red.600",
              width: 80,
              height: 80,
              borderRadius: "50%",
            }}
            disableRipple
          >
            <FaQuestion size={60} />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent>
        <Typography variant="body1" color="textSecondary" align="center">
          {msg ?? "Are you sure you want to delete the selected record?"}
        </Typography>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", gap: 2, pb: 2 }}>
        <Button
          variant="contained"
          color={type.includes("restore") ? "warning" : "error"}
          sx={{ px: 4 }}
          onClick={onClick}
        >
          {type.includes("restore") ? "Restore" : "Delete"}
        </Button>

        <Button variant="outlined" color="inherit" sx={{ px: 4 }} onClick={closeDialog}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

// UserAction Dialog Component
export function UserAction({ open, setOpen, onClick = () => {} }) {
  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={closeDialog} maxWidth="xs" fullWidth>
      <DialogTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "red.200",
              color: "red.600",
              width: 80,
              height: 80,
              borderRadius: "50%",
            }}
            disableRipple
          >
            <FaQuestion size={60} />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent>
        <Typography variant="body1" color="textSecondary" align="center">
          Are you sure you want to activate or deactivate this account?
        </Typography>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", gap: 2, pb: 2 }}>
        <Button variant="contained" color="error" sx={{ px: 4 }} onClick={onClick}>
          Yes
        </Button>

        <Button variant="outlined" color="inherit" sx={{ px: 4 }} onClick={closeDialog}>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}
