import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { List, ListItem, Toolbar, ListItemText, ListItemIcon } from '@mui/material';
import { AuthContext } from '../auth/Authentication.jsx';
import { MdDashboard, MdAddTask, MdDelete, MdPendingActions, MdOutlineTaskAlt } from 'react-icons/md';
import { BsListTask } from 'react-icons/bs';
import { HiUsers } from "react-icons/hi2";
import "./App.css";

const linkedData = [
    { label: "Dashboard", link: "dashboard", icon: <MdDashboard /> },
    { label: "Tasks", link: "tasks", icon: <BsListTask /> },
    { label: "AddTask", link: "addTask", icon: <MdAddTask /> },
    { label: "ToDo", link: "to-do", icon: <MdPendingActions /> },
    { label: "Complete", link: "completed", icon: <MdOutlineTaskAlt /> },
    { label: "In Progress", link: "inProgress", icon: <MdPendingActions /> },
    { label: "Team", link: "team", icon: <HiUsers /> },
    { label: "Trash", link: "trash", icon: <MdDelete /> },
];

const SideBar = () => {
    const { user, toggleSidebar } = useContext(AuthContext);
    const location = useLocation();
    const path = location.pathname.split("/")[1];

    const sidebarLink = user?.isAdmin ? linkedData : linkedData.slice(0, 6);
    const closeSidebar = () => {
        toggleSidebar(false);
    };

    return (
        <div className="sidebar-container">
            <Toolbar />
            <List>
                {sidebarLink.map((item) => (
                    <NavLink
                        key={item.link}
                        to={`/${item.link}`}
                        className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}
                        onClick={closeSidebar}
                    >
                        <ListItem button>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </div>
    );
};

export default SideBar;
