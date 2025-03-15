import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const AddSubTask = ({ open, setOpen, id }) => {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = async (data) => {
    try {
      const res = await addSbTask({ data, id }).unwrap();
      toast.success(res.message);
      setTimeout(() => {
        setOpen(false);
      }, 500);
    } catch (err) {
      console.log(err);
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
      <DialogTitle
        sx={{
          fontSize: "1.25rem",
          fontWeight: "bold",
          color: theme.palette.text.primary,
        }}
      >
        ADD SUB-TASK
      </DialogTitle>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* Sub-Task Title */}
          <TextField
            label="Title"
            placeholder="Sub-Task title"
            fullWidth
            {...register("title", { required: "Title is required!" })}
            error={!!errors.title}
            helperText={errors.title?.message}
          />

          {/* Task Date & Tag */}
          <div style={{ display: "flex", gap: "1rem" }}>
            <TextField
              label="Task Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              {...register("date", { required: "Date is required!" })}
              error={!!errors.date}
              helperText={errors.date?.message}
            />
            <TextField
              label="Tag"
              placeholder="Tag"
              fullWidth
              {...register("tag", { required: "Tag is required!" })}
              error={!!errors.tag}
              helperText={errors.tag?.message}
            />
          </div>
        </DialogContent>

        {/* Action Buttons */}
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button
            onClick={() => setOpen(false)}
            sx={{ color: theme.palette.text.secondary }}
          >
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Add Task
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddSubTask;