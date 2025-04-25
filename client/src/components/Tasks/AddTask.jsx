import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  Button,
  Box,
  InputLabel,
  FormControl,
} from "@mui/material";
import { BiImages } from "react-icons/bi";
import { useForm } from "react-hook-form";
import UserList from "./userList.jsx";

const LISTS = ["TODO", "IN PROGRESS", "COMPLETED"];
const PRIORITIES = ["HIGH", "MEDIUM", "NORMAL", "LOW"];

const AddTask = ({ open, setOpen }) => {
  const task = null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [team, setTeam] = useState(task?.team || []);
  const [stage, setStage] = useState(task?.stage?.toUpperCase() || LISTS[0]);
  const [priority, setPriority] = useState(
    task?.priority?.toUpperCase() || PRIORITIES[2]
  );
  const [assets, setAssets] = useState([]);
  const [uploading, setUploading] = useState(false);

  const submitHandler = () => {};

  const handleSelect = (e) => {
    setAssets(e.target.files);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
      <DialogTitle>{task ? "UPDATE TASK" : "ADD TASK"}</DialogTitle>

      <form onSubmit={handleSubmit(submitHandler)}>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Task Title"
              type="text"
              {...register("title", { required: "Title is required" })}
              error={!!errors.title}
              helperText={errors.title ? errors.title.message : ""}
              fullWidth
            />

            <UserList setTeam={setTeam} team={team} />

            <Box sx={{ display: "flex", gap: 2 }}>
              <FormControl fullWidth>
                <InputLabel>Task Stage</InputLabel>
                <Select
                  value={stage}
                  onChange={(e) => setStage(e.target.value)}
                  label="Task Stage"
                >
                  {LISTS.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                label="Task Date"
                type="date"
                {...register("date", { required: "Date is required!" })}
                error={!!errors.date}
                helperText={errors.date ? errors.date.message : ""}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <FormControl fullWidth>
                <InputLabel>Priority Level</InputLabel>
                <Select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  label="Priority Level"
                >
                  {PRIORITIES.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 2,
                }}
              >
                <label
                  htmlFor="imgUpload"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                    color: "#1976d2",
                    fontWeight: 500,
                  }}
                >
                  <input
                    type="file"
                    id="imgUpload"
                    hidden
                    onChange={handleSelect}
                    accept=".jpg, .png, .jpeg"
                    multiple
                  />
                  <BiImages />
                  <span>Add Assets</span>
                </label>
              </Box>
            </Box>
          </Box>
        </DialogContent>

        <DialogActions>
          {uploading ? (
            <span style={{ fontSize: "14px", color: "#d32f2f" }}>
              Uploading assets...
            </span>
          ) : (
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          )}

          <Button onClick={() => setOpen(false)} variant="outlined" color="error">
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddTask;
