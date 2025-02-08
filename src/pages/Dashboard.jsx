import React from 'react'
import SideBar from '../components/SideBar';
import { MdAdminPanelSettings, MdKeyboardArrowDown, MdKeyboardArrowUp, MdKeyboardDoubleArrowUp } from "react-icons/md";
import { LuClipboardPen } from "react-icons/lu";
import { HiUser } from "react-icons/hi";
import { FaNewspaper } from "react-icons/fa";
import { FaArrowsToDot } from "react-icons/fa6";
import "./App.css";
import { Box, Grid2, Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Chip  } from '@mui/material';
import { summary } from "../assets/data";
import moment from "moment";
import { getInitial } from '../utils';

const totals = summary.tasks;
const stats = [
  {
    id: "1",
    label: "TOTAL TASK",
    totals: summary?.totalTask || 0,
    icon: <FaNewspaper />,
    bg: 'blue',

  },
  {
    id: "2",
    label: "COMPLETED TASK",
    total: totals["completed"] || 0,
    icon: <MdAdminPanelSettings />,
    bg: "yellow",


  },
  {
    id: "3",
    label: "In Progress",
    total: totals["in progress"] || 0,
    icon: <LuClipboardPen />,
    bg: "green",

  },
  {
    id: "4",
    label: "TODO",
    total: totals["todo"] || 0,
    icon: <FaArrowsToDot />,
    bg: "orange",
  }


]
const Dashboard = () => {
  return (
    <Box p={3} sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
    {/* Stats Grid */}
    <Grid2 container spacing={3}>
      {stats.map(({ id, label, total, icon, color }) => (
        <Grid2 item xs={12} sm={6} md={3} key={id}>
            <Card
            sx={{
              backgroundColor: color,
              color: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
              height: "140px",
              width: "140px",

            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body2">{label}</Typography>
              <Typography variant="h5" fontWeight="bold">{total}</Typography>
              <Typography variant="caption"style={{color: "grey"}}>110 last month</Typography>
            </Box>
            <Box sx={{ fontSize: "2rem" }}>{icon}</Box>
          </Card>
        </Grid2>
      ))}
    </Grid2>

    {/* Tables Section */}
    <Grid2 container spacing={3} mt={4}>
      {/* Tasks Table */}
      <Grid2 item xs={12} md={8}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>Recent Tasks</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Task Title</TableCell>
                    <TableCell>Priority</TableCell>
                    <TableCell>Team</TableCell>
                    <TableCell>Created At</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {summary.last8Tasks.map((task, index) => (
                    <TableRow key={index}>
                      <TableCell>{task.title}</TableCell>
                      <TableCell>
                        <Chip
                          label={task.priority}
                          icon={task.priority === "high" ? <MdKeyboardDoubleArrowUp /> : task.priority === "medium" ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                          color={task.priority === "high" ? "error" : task.priority === "medium" ? "warning" : "success"}
                          variant="outlined"
                        />
                      </TableCell>
                      <TableCell>
                        <Box display="flex">
                          {task.team.map((member, i) => (
                            <Avatar key={i} sx={{ width: 32, height: 32, bgcolor: i % 2 === 0 ? "primary.main" : "secondary.main", mx: 0.5 }}>
                              {member.name[0]}
                            </Avatar>
                          ))}
                        </Box>
                      </TableCell>
                      <TableCell>{moment(task.date).fromNow()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid2>

      {/* Users Table */}
      <Grid2 item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>Users</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Full Name</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Created At</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {summary.users.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <Avatar sx={{ bgcolor: "purple", marginRight: 1 }}>{user.name[0]}</Avatar>
                          <Box>
                            <Typography>{user.name}</Typography>
                            <Typography variant="caption">{user.role}</Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Chip label={user.isActive ? "Active" : "Disabled"} color={user.isActive ? "primary" : "warning"} />
                      </TableCell>
                      <TableCell>{moment(user.createdAt).fromNow()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  </Box>
);
};

export default Dashboard;
