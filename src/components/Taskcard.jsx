import React, { useState } from "react";
import {
  MdAttachFile,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import { BiMessageAltDetail } from "react-icons/bi";
import { FaList } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import {
  Box,
  Typography,
  Button,
  Divider,
  Avatar,
  IconButton,
} from "@mui/material";
import TaskDialog from "./Tasks/TaskDialog";
import AddSubTask from "./Tasks/AddSubTask";
import UserInfo from "./UserInfo";
import { BGS, PRIORITYSTYLES, TASK_TYPE, formatDate } from "../utils";

const ICONS = {
  high: <MdKeyboardDoubleArrowUp />,
  medium: <MdKeyboardArrowUp />,
  low: <MdKeyboardArrowDown />,
};

const TaskCard = ({ task }) => {
  const { user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "white",
          boxShadow: 2,
          padding: 2,
          borderRadius: 2,
        }}
      >
        {/* Priority and Task Dialog */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: "0.875rem",
              fontWeight: "bold",
              color: PRIORITYSTYLES[task?.priority] || "black",
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>{ICONS[task?.priority]}</span>
            <Typography variant="body2" sx={{ textTransform: "uppercase" }}>
              {task?.priority} Priority
            </Typography>
          </Box>

          {user?.isAdmin && <TaskDialog task={task} />}
        </Box>

        {/* Task Title and Date */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginY: 1 }}>
          <Box
            sx={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              backgroundColor: TASK_TYPE[task.stage] || "gray",
            }}
          />
          <Typography variant="h6" sx={{ flexGrow: 1, color: "black" }}>
            {task?.title}
          </Typography>
        </Box>
        <Typography variant="body2" color="textSecondary">
          {formatDate(new Date(task?.date))}
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* Task Info (Comments, Attachments, Subtasks) */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Box sx={{ display: "flex", gap: 2, color: "gray" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <BiMessageAltDetail />
              <Typography variant="body2">{task?.activities?.length}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <MdAttachFile />
              <Typography variant="body2">{task?.assets?.length}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <FaList />
              <Typography variant="body2">0/{task?.subTasks?.length}</Typography>
            </Box>
          </Box>

          {/* Team Avatars */}
          <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
            {task?.team?.map((m, index) => (
              <Avatar
                key={index}
                sx={{
                  width: 28,
                  height: 28,
                  fontSize: "0.75rem",
                  bgcolor: BGS[index % BGS.length],
                  marginLeft: -1,
                  zIndex: index + 1,
                }}
              >
                <UserInfo user={m} />
              </Avatar>
            ))}
          </Box>
        </Box>

        {/* Sub Tasks */}
        {task?.subTasks?.length > 0 ? (
          <Box sx={{ py: 2, borderTop: "1px solid #E0E0E0" }}>
            <Typography variant="subtitle1" sx={{ color: "black" }}>
              {task?.subTasks[0].title}
            </Typography>

            <Box sx={{ display: "flex", gap: 2, paddingY: 1 }}>
              <Typography variant="body2" color="textSecondary">
                {formatDate(new Date(task?.subTasks[0]?.date))}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  backgroundColor: "rgba(33, 150, 243, 0.1)",
                  padding: "4px 8px",
                  borderRadius: "12px",
                  color: "blue",
                  fontWeight: "bold",
                }}
              >
                {task?.subTasks[0].tag}
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box sx={{ py: 2, borderTop: "1px solid #E0E0E0" }}>
            <Typography variant="body2" color="textSecondary">
              No Sub Task
            </Typography>
          </Box>
        )}

        {/* Add Subtask Button */}
        <Box sx={{ pb: 2 }}>
          <Button
            onClick={() => setOpen(true)}
            disabled={!user.isAdmin}
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: user.isAdmin ? "black" : "gray",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            <IconButton size="small" sx={{ color: "black" }}>
              <IoMdAdd />
            </IconButton>
            ADD SUBTASK
          </Button>
        </Box>
      </Box>

      <AddSubTask open={open} setOpen={setOpen} id={task._id} />
    </>
  );
};

export default TaskCard;
