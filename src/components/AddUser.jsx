import React, {useContext} from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  CircularProgress,
} from "@mui/material";
import { AuthContext } from "../auth/Authentication";

const AddUser = ({ open, setOpen, userData }) => {
  const defaultValues = userData ?? {};
  const { user } = useContext(AuthContext);
  const isLoading = false,
    isUpdating = false;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const handleOnSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: "bold" }}>
        {userData ? "UPDATE PROFILE" : "ADD NEW USER"}
      </DialogTitle>

      <DialogContent>
        <form onSubmit={handleSubmit(handleOnSubmit)} noValidate>
          <TextField
            label="Full Name"
            fullWidth
            margin="normal"
            {...register("name", { required: "Full name is required!" })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />

          <TextField
            label="Title"
            fullWidth
            margin="normal"
            {...register("title", { required: "Title is required!" })}
            error={!!errors.title}
            helperText={errors.title?.message}
          />

          <TextField
            label="Email Address"
            type="email"
            fullWidth
            margin="normal"
            {...register("email", { required: "Email Address is required!" })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            label="Role"
            fullWidth
            margin="normal"
            {...register("role", { required: "User role is required!" })}
            error={!!errors.role}
            helperText={errors.role?.message}
          />
        </form>
      </DialogContent>

      <DialogActions sx={{ padding: "16px" }}>
        <Button onClick={() => setOpen(false)} color="secondary">
          Cancel
        </Button>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoading || isUpdating}
          onClick={handleSubmit(handleOnSubmit)}
          startIcon={isLoading || isUpdating ? <CircularProgress size={16} /> : null}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUser;
