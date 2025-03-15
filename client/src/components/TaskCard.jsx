import React, { useContext, useState } from "react";
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
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button,
  Divider,
  Avatar,
  IconButton,
} from "@mui/material";
import TaskDialog from "./Tasks/TaskDialog";
import UserInfo from "./UserInfo";
import { BGS, PRIORITYSTYLES, TASK_TYPE, formatDate } from "../utils";
import { AuthContext } from "../auth/Authentication";
import AddSubTask from "./Tasks/AddSubTask";

const ICONS = {
  high: <MdKeyboardDoubleArrowUp />,
  medium: <MdKeyboardArrowUp />,
  low: <MdKeyboardArrowDown />,
};

const TaskCard = ({ task }) => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  return (
    <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
      {/* Priority & Task Dialog */}
      <CardHeader
        action={user?.isAdmin && <TaskDialog task={task} />}
        title={
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontWeight: "bold",
              color: PRIORITYSTYLES[task?.priority],
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>{ICONS[task?.priority]}</span>
            {task?.priority} Priority
          </Typography>
        }
      />

      <CardContent>
        {/* Task Title and Date */}
        <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: 1, color: "black" }}>
          <span
            style={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              backgroundColor: TASK_TYPE[task.stage],
              display: "inline-block",
            }}
          />
          {task?.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {formatDate(new Date(task?.date))}
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* Task Info: Comments, Attachments, Subtaskss */}
        <div style={{ display: "flex", justifyContent: "space-between", color: "black" }}>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <BiMessageAltDetail />
              <Typography variant="body2">{task?.activities?.length}</Typography>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <MdAttachFile />
              <Typography variant="body2">{task?.assets?.length}</Typography>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <FaList />
              <Typography variant="body2">0/{task?.Subtasks?.length}</Typography>
            </div>
          </div>

          {/* Team Avatars */}
          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
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
          </div>
        </div>

        {/* Sub Tasks */}
        {task?.Subtasks?.length > 0 ? (
          <div style={{ paddingTop: 16, borderTop: "1px solid #E0E0E0" }}>
            <Typography variant="subtitle1" sx={{ color: "black" }}>
              {task?.Subtasks[0].title}
            </Typography>
            <div style={{ display: "flex", gap: 16, paddingY: 8 }}>
              <Typography variant="body2" color="textSecondary">
                {formatDate(new Date(task?.Subtasks[0]?.date))}
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
                {task?.Subtasks[0].tag}
              </Typography>
            </div>
          </div>
        ) : (
          <div style={{ paddingTop: 16, borderTop: "1px solid #E0E0E0" }}>
            <Typography variant="body2" color="textSecondary">
              No Sub Task
            </Typography>
          </div>
        )}
      </CardContent>

      {/* Add Subtasks Button */}
      <CardActions>
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

      <AddSubTask open={open} setOpen={setOpen} id={task._id} />
      </CardActions>
    </Card>
  );
 };

export default TaskCard;
