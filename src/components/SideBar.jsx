import React from 'react'
import { MdDashboard, MdAddTask, MdDelete, MdPendingActions, MdOutlineTaskAlt } from 'react-icons/md'
import{BsListTask} from 'react-icons/bs'
import { HiUsers } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router';
import { setOpenSidebar } from '../redux/slices/authSlice';
import { List, ListItem, Toolbar, ListItemText, ListItemIcon } from '@mui/material';
import "./App.css";
import "../index.css";

const linkedData = [

{
    label: "Dashboard",
    link: "dashboard",
    icon: <MdDashboard />

 },
    {
    label: "Tasks",
    link: "tasks",
    icon: < BsListTask/>
    },
    {
        label: "AddTask",
        link: "addTask",
        icon: <MdAddTask />,
    },
    {
        label: "ToDo",
        link: "to-do",
        icon: <MdPendingActions />,
    },

    {
        label: "Complete",
        link: "completed",
        icon: <MdOutlineTaskAlt />,

    },
    {
        label: "In Progress",
        link: "inProgress",
        icon: < MdPendingActions/>,
    },
    {
        label: "Team",
        link: "team",
        icon: <HiUsers />
    },
    {
        label: "Tash",
        link: "trash",
        icon: <MdDelete />,
    },




]

const SideBar = () => {

    const { user } = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const location = useLocation();

  const path = location.pathname.split("/")[1];

    const sidebarLink = user?.isAdmin ? linkedData : linkedData.slice(0, 6);
    const closeSidebar = () => {
        dispatch(setOpenSidebar(false));

    }
//     const NavLink = ({ el }) => {

//         return (
//             <Link to={el.link}
//             onClick={closeSidebar}>
//             </Link>
//         )

  // }
  console.log('Rendering SideBar');

return (
    <div className="sidebar-container">
      <Toolbar />
      <List>
        {sidebarLink.map((item) => (
          <NavLink
            key={item.link}
            to={`/${item.link}`}
            className={({ isActive }) =>
              isActive ? "sidebar-item active" : "sidebar-item"
            }
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

