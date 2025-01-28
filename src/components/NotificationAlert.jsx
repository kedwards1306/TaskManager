import React, {useState} from 'react'
import { FaRegBell } from "react-icons/fa";
import Popover from '@mui/material/Popover';
import { BiSolidMessage } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Button } from '@mui/material';
import "./App.css";
//import Link from 'react-router-dom';

const data = [

];
const ICONS = {
  alert: (
<FaRegBell className="regbell"/>
  ),
  message: (
<BiSolidMessage className=""/>
  )

};

const NotificationAlert = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const readHandler = () => { };

  const callsToAction = [
    { name: "Cancel", href: "#", icon: "" },
    {
      name: "Mark all read", href: "#", icon: "",
      onClick: () => readHandler("all", ""),

    },
  ];
  return (
<div className="notification-alert">
      <Button
        className="notification-button"
        onClick={handlePopoverOpen}
        aria-describedby={open ? "notification-popover" : undefined}
      >
        <IoIosNotificationsOutline size={24} />
        {data.length > 0 && <span className="notification-badge">{data.length}</span>}
      </Button>

      <Popover
        id="notification-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="popover-content">
          {data.length > 0 ? (
            data.map((notification, index) => (
              <div key={index} className="notification-item">
                {notification.message}
              </div>
            ))
          ) : (
            <div className="notification-empty">No new notifications</div>
          )}
        </div>
      </Popover>
    </div>
  )
}

export default NotificationAlert
