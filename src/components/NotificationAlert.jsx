import React, {useState} from 'react'
import { FaRegBell } from "react-icons/fa";
import Popover from '@mui/material/Popover';
import { BiSolidMessage } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Button } from '@mui/material';
import "./App.css";
//import Link from 'react-router-dom';

const initialNotifications = [
  {
    message: "New task has been assign to you", icon: <BiSolidMessage/>
  },
];

const NotificationAlert = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState(initialNotifications);


  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const handleMarkAllRead = () => {
    setNotifications([]); // Clear all notifications
  };

  const open = Boolean(anchorEl);
  const readHandler = () => { };

  const callsToAction = [
    { name: "Cancel", href: "#", icon: "", onClick: handlePopoverClose },
    {
      name: "Mark all read", href: "#", icon: "",
      onClick: handleMarkAllRead,
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
        {notifications.length > 0 && (
          <span className="notification-badge">{notifications.length}</span>
        )}
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
          {/* Notification Messages */}
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <div key={index} className="notification-item">
                {notification.icon && (
                  <span className="notification-icon">{notification.icon}</span>
                )}
                <span className="notification-message">
                  {notification.message}
                </span>
              </div>
            ))
          ) : (
            <div className="notification-empty">No new notifications</div>
          )}

          {/* Calls to Action */}
          <div className="calls-to-action">
            {callsToAction.map((action, index) => (
              <Button
                key={index}
                className="cta-button"
                onClick={action.onClick}
                href={action.href}
              >
                {action.name}
              </Button>
            ))}
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default NotificationAlert
