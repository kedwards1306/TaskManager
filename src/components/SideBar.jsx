import React, { useContext, useCallback } from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../auth/Authentication";
import { MdDashboard, MdAddTask, MdDelete, MdPendingActions, MdOutlineTaskAlt } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { HiUsers } from "react-icons/hi2";
import "./App.css";

const linkedData = [
  { label: "Dashboard", link: "dashboard", icon: <MdDashboard /> },
  { label: "Tasks", link: "tasks", icon: <BsListTask /> },
  { label: "Add Task", link: "addTask", icon: <MdAddTask /> },
  { label: "To-Do", link: "to-do", icon: <MdPendingActions /> },
  { label: "Completed", link: "completed", icon: <MdOutlineTaskAlt /> },
  { label: "In Progress", link: "inProgress", icon: <MdPendingActions /> },
  { label: "Team", link: "team", icon: <HiUsers /> },
  { label: "Trash", link: "trash", icon: <MdDelete /> },
];

const SideBar = () => {
  const { user, isSidebarOpen, toggleSidebar } = useContext(AuthContext);

  // Limit links for non-admin users
  const sidebarLink = user?.isAdmin ? linkedData : linkedData.slice(0, 6);

  // Close sidebar on link click
  const closeSidebar = useCallback(() => {
    toggleSidebar(false);
  }, [toggleSidebar]);

  return (
    <List>
      {sidebarLink.map((item) => (
        <NavLink
          key={item.link}
          to={`/${item.link}`}
          className={({ isActive }) => (isActive ? "sidebar-item active" : "sidebar-item")}
          onClick={closeSidebar}
        >
          <ListItem button>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        </NavLink>
      ))}
    </List>
  );
};

export default SideBar;
