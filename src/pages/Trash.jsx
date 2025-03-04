import React, { useState } from "react";
import {
  Box,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
import { MdDelete, MdKeyboardArrowDown, MdKeyboardArrowUp, MdKeyboardDoubleArrowUp, MdOutlineRestore } from "react-icons/md";
import { styled } from "@mui/material/styles";
import { tasks } from "../assets/data";
import ConfirmatioDialog from "../components/Dialogs";

// Styled Table Cell for Header
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 600,
  padding: theme.spacing(1.5),
}));

const ICONS = {
  high: <MdKeyboardDoubleArrowUp/>,
  medium: <MdKeyboardArrowUp/>,
  low: <MdKeyboardArrowDown/>,
};

const Trash = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [msg, setMsg] = useState(null);
  const [type, setType] = useState("delete");
  const [selected, setSelected] = useState("");

  const deleteClick = (id) => {
    setType("delete");
    setSelected(id);
    setMsg("Do you want to permanently delete this task?");
    setOpenDialog(true);
  };

  const restoreClick = (id) => {
    setType("restore");
    setSelected(id);
    setMsg("Do you want to restore this task?");
    setOpenDialog(true);
  };

  return (
    <Box sx={{ width: "100%", p: 2 }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" fontWeight={700}>
          Trashed Tasks
        </Typography>

        <Box>
          <Button
            variant="contained"
            startIcon={<MdOutlineRestore />}
            sx={{ mr: 1 }}
            onClick={() => {
              setType("restoreAll");
              setMsg("Do you want to restore all tasks?");
              setOpenDialog(true);
            }}
          >
            Restore All
          </Button>
          <Button
            variant="contained"
            color="error"
            startIcon={<MdDelete />}
            onClick={() => {
              setType("deleteAll");
              setMsg("Do you want to permanently delete all tasks?");
              setOpenDialog(true);
            }}
          >
            Delete All
          </Button>
        </Box>
      </Box>

      {/* Table */}
      <Paper sx={{ overflow: "hidden", p: 2, borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Task Title</StyledTableCell>
              <StyledTableCell>Priority</StyledTableCell>
              <StyledTableCell>Stage</StyledTableCell>
              <StyledTableCell>Modified On</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks?.map((task, index) => (
              <TableRow key={index} hover>
                <TableCell>{task.title}</TableCell>

                <TableCell>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="body2">{ICONS[task.priority]}</Typography>
                    <Typography variant="body2" sx={{ textTransform: "capitalize" }}>
                      {task.priority}
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell>{task.stage}</TableCell>
                <TableCell>{new Date(task.date).toDateString()}</TableCell>

                {/* Actions */}
                <TableCell align="right">
                  <IconButton color="primary" onClick={() => restoreClick(task._id)} sx={{ mr: 1 }}>
                    <MdOutlineRestore />
                  </IconButton>
                  <IconButton color="error" onClick={() => deleteClick(task._id)}>
                    <MdDelete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* Confirmation Dialog */}
      <ConfirmatioDialog open={openDialog} setOpen={setOpenDialog} msg={msg} type={type} />
    </Box>
  );
};

export default Trash;