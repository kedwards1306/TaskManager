import React, { useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";

const AddUser = ({ open, setOpen, userData }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // Reset form when userData changes (for editing)
    if (userData) {
      reset({
        name: userData.name || "",
        email: userData.email || "",
        role: userData.role || "",
      });
    } else {
      reset({ name: "", email: "", role: "" });
    }
  }, [userData, reset]);

  const onSubmit = (data) => {
    if (userData) {
      console.log("Updating User:", data);
      // Call your API function to update user
    } else {
      console.log("Adding New User:", data);
      // Call your API function to create user
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
      <DialogTitle>{userData ? "Edit User" : "Add New User"}</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Full Name"
            fullWidth
            {...register("name", { required: "Name is required!" })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
              <TextField
            label="Title"
            fullWidth
            {...register("title", { required: "Title is required!" })}
            error={!!errors.title}
            helperText={errors.title?.message}
          />

          <TextField
            label="Email"
            type="email"
            fullWidth
            {...register("email", { required: "Email is required!" })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            label="Role"
            fullWidth
            {...register("role", { required: "Role is required!" })}
            error={!!errors.role}
            helperText={errors.role?.message}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            {userData ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddUser;