import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
  Paper,
  Typography,
  AvatarGroup,
  Avatar,
  Box,
  Button,
  Chip,
} from "@mui/material";
import {
  MdAttachFile,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import { FaList } from "react-icons/fa";
import { BGS, PRIORITYSTYLES, TASK_TYPE, formatDate } from "../../utils";
import ConfirmationDialog from "../Dialogs";
import UserInfo from "../UserInfo";
import { BiMessageAltDetail } from "react-icons/bi";

const ICONS = {
  high: <MdKeyboardDoubleArrowUp />,
  medium: <MdKeyboardArrowUp />,
  low: <MdKeyboardArrowDown />,
};

const TaskTable = ({ tasks }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selected, setSelected] = useState(null);
  console.log("Tasks:", tasks);  
  const deleteClicks = (id) => {
    setSelected(id);
    setOpenDialog(true);
  };

  const deleteHandler = () => {
    // Handle delete logic here
  };


  return (
    <>
      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2, p: 2 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "grey.200" }}>
              <TableCell><Typography variant="body1" fontWeight="bold">Task Title</Typography></TableCell>
              <TableCell><Typography variant="body1" fontWeight="bold">Priority</Typography></TableCell>
              <TableCell><Typography variant="body1" fontWeight="bold">Created At</Typography></TableCell>
              <TableCell><Typography variant="body1" fontWeight="bold">Assets</Typography></TableCell>
              <TableCell><Typography variant="body1" fontWeight="bold">Team</Typography></TableCell>
              <TableCell align="right"><Typography variant="body1" fontWeight="bold">Actions</Typography></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
          {tasks.map((task) => (
              <TableRow key={task._id} hover>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                      sx={{
                        width: 14,
                        height: 14,
                        borderRadius: "50%",
                        bgcolor: TASK_TYPE[task.stage],
                      }}
                    />
                    <Typography variant="body2">{task.title}</Typography>
                  </Box>
                </TableCell>

                <TableCell>
  <Chip
    label={task.priority}
    icon={
      task.priority === "high" 
        ? <MdKeyboardDoubleArrowUp />
        : task.priority === "medium" 
        ? <MdKeyboardArrowUp />
        : <MdKeyboardArrowDown />
    }
    color={task.priority === "high" ? "error" : task.priority === "medium" ? "warning" : "success"}
    variant="outlined"
    sx={{
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      borderRadius: '180%',  // Circular border
      padding: '4px 10px',  // Adjust padding for the circle size
      fontSize: '0.875rem',  // Adjust font size as needed
    }}
  />
</TableCell>

                <TableCell>
                  <Typography variant="body2" color="textSecondary">
                    {formatDate(new Date(task.date))}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "gray" }}>
                      <BiMessageAltDetail size={18} />
                      <Typography variant="body2">{task.activities?.length}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "gray" }}>
                      <MdAttachFile size={18} />
                      <Typography variant="body2">{task.assets?.length}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "gray" }}>
                      <FaList size={16} />
                      <Typography variant="body2">0/{task.subTasks?.length}</Typography>
                    </Box>
                  </Box>
                </TableCell>

                <TableCell>
                  <AvatarGroup max={4}>
                    {task.team?.map((member, index) => (
                      <Avatar
                        key={member._id}
                        sx={{
                          bgcolor: BGS[index % BGS.length],
                          width: 32,
                          height: 32,
                          fontSize: "small",
                        }}
                      >
                        <UserInfo user={member} />
                      </Avatar>
                    ))}
                  </AvatarGroup>
                </TableCell>

                <TableCell align="right">
                  <Button
                    color="primary"
                    size="small"
                    sx={{ textTransform: "none", fontSize: "0.85rem" }}
                  >
                    Edit
                  </Button>
                  <Button
                    color="error"
                    size="small"
                    sx={{ textTransform: "none", fontSize: "0.85rem" }}
                    onClick={() => deleteClicks(task._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Confirmation Dialog */}
      <ConfirmationDialog open={openDialog} setOpen={setOpenDialog} onClick={deleteHandler} />
    </>
  );
};

export default TaskTable;
