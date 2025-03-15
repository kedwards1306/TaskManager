import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Grid2, Card, CardContent, Avatar, Button, Checkbox, TextField } from "@mui/material";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdKeyboardDoubleArrowUp, MdOutlineDoneAll, MdOutlineMessage, MdTaskAlt } from "react-icons/md";
import { FaBug, FaTasks, FaThumbsUp, FaUser } from "react-icons/fa";
import { GrInProgress } from "react-icons/gr";
import { RxActivityLog } from "react-icons/rx";
import Tabs from "../components/Tabby";
import { tasks } from "../assets/data";
import { PRIORITYSTYLES, TASK_TYPE, getInitial,BGS } from "../utils";

const priorityIcons = {
  high: <MdKeyboardDoubleArrowUp />,
  medium: <MdKeyboardArrowUp />,
  low: <MdKeyboardArrowDown />,
};

// const priorityColors = {
//   high: "error.main",
//   medium: "warning.main",
//   low: "info.main",
// };

const activityIcons = {
  commented: <MdOutlineMessage size={24} />,
  started: <FaThumbsUp size={20} />,
  assigned: <FaUser size={14} />,
  bug: <FaBug size={24} />,
  completed: <MdOutlineDoneAll size={24} />,
  "in progress": <GrInProgress size={16} />,
};

const tabs = [
  { title: "Task Detail", icon: <FaTasks /> },
  { title: "Activities/Timeline", icon: <RxActivityLog /> },
];

const actTypes = ["Started", "Completed", "In Progress", "Commented", "Bug", "Assigned"];

const TaskDetails = () => {
  const { id } = useParams();
  const [selectedTab, setSelectedTab] = useState(0);
  const task = tasks.find((t) => t._id === id);

  return (
    <Box sx={{ width: "100%", mb: 4 }}>
      <Typography variant="h4" color="text.primary" fontWeight="bold">
        {task?.title}
      </Typography>
      <Tabs tabs={tabs} selected={selectedTab} setSelected={setSelectedTab}>
        {selectedTab === 0 ? (
          <Grid2 container spacing={3} sx={{ mt: 2 }}>
            {/* LEFT SIDE */}
            <Grid2 item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        bgcolor: BGS[PRIORITYSTYLES[task?.priority]], 
                        px: 2,
                        py: 1,
                        borderRadius: "12px",
                        color: "white",
                      }}
                    >
                      {priorityIcons[task?.priority]}
                      <Typography variant="body2" sx={{ ml: 1, fontWeight: "bold" }}>
                        {task?.priority} Priority
                      </Typography>
                    </Box>

                    <Box display="flex" alignItems="center">
                      <Box
                        sx={{
                          width: 16,
                          height: 16,
                          bgcolor: TASK_TYPE[tasks.stage],
                          borderRadius: "50%",
                          mr: 1,
                        }}
                      />
                      <Typography variant="body2">{tasks?.stage}</Typography>
                    </Box>
                  </Box>

                  <Typography color="text.secondary" mt={2}>
                    Created At: {new Date(task?.date).toDateString()}
                  </Typography>

                  {/* ASSETS & SUB-TASKS */}
                  <Box display="flex" gap={4} mt={2} borderTop={1} borderBottom={1} py={2}>
                    <Typography>
                      <strong>Assets:</strong> {tasks?.assets?.length}
                    </Typography>
                    <Typography>
                      <strong>Sub-Tasks:</strong> {tasks?.subTasks?.length}
                    </Typography>
                  </Box>

                  {/* TEAM MEMBERS */}
                  <Typography variant="subtitle1" mt={3}>
                    TASK TEAM
                  </Typography>
                  {task?.team?.map((member, index) => (
                    <Box key={index} display="flex" alignItems="center" gap={2} mt={2} borderBottom={1} pb={1}>
                      <Avatar sx={{ bgcolor: "primary.main" }}>{getInitial(member?.name)}</Avatar>
                      <Box>
                        <Typography fontWeight="bold">{member?.name}</Typography>
                        <Typography color="text.secondary">{member?.role}</Typography>
                      </Box>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid2>

            {/* RIGHT SIDE - ASSETS */}
            <Grid2 item xs={12} md={6}>
              <Typography variant="h6">ASSETS</Typography>
              <Grid2 container spacing={2}>
                {tasks?.assets?.map((img, index) => (
                  <Grid2 item xs={6} key={index}>
                    <img
                      src={img}
                      alt={`Asset ${index}`}
                      style={{ width: "100%", borderRadius: "8px", height: "100px", objectFit: "cover" }}
                    />
                  </Grid2>
                ))}
              </Grid2>
            </Grid2>
          </Grid2>
        ) : (
          <Activities activity={tasks?.activities} />
        )}
      </Tabs>
    </Box>
  );
};

const Activities = ({ activity }) => {
  const [selectedType, setSelectedType] = useState(actTypes[0]);
  const [text, setText] = useState("");

  return (
    <Grid2 container spacing={3} mt={2}>
      {/* ACTIVITY LIST */}
      <Grid2 item xs={12} md={6}>
        <Typography variant="h6" color="text.primary">
          Activities
        </Typography>
        {activity?.map((item, index) => (
          <Card key={index} sx={{ mt: 2, p: 2 }}>
            <Box display="flex" alignItems="center" gap={2}>
              <Box>{activityIcons[item?.type]}</Box>
              <Box>
                <Typography fontWeight="bold">{item?.by?.name}</Typography>
                <Typography color="text.secondary" fontSize="small">
                  {moment(item?.date).fromNow()}
                </Typography>
                <Typography color="text.primary">{item?.activity}</Typography>
              </Box>
            </Box>
          </Card>
        ))}
      </Grid2>

      {/* ADD ACTIVITY FORM */}
      <Grid2 item xs={12} md={6}>
        <Typography variant="h6">Add Activity</Typography>
        {actTypes.map((type) => (
          <Box key={type} display="flex" alignItems="center" mt={1}>
            <Checkbox checked={selectedType === type} onChange={() => setSelectedType(type)} />
            <Typography>{type}</Typography>
          </Box>
        ))}
        <TextField
          label="Type..."
          multiline
          rows={4}
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{ mt: 2 }}
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default TaskDetails;