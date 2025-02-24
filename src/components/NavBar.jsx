import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import UserAvatar from "./UserAvatar";
import "./App.css";
import NotificationAlert from "./NotificationAlert";

const NavBar = ({ toggleDrawer, isDrawerOpen }) => {
  return (
    <div className="navbar-left">
      {/* Sidebar Toggle Button */}
      <button
        className="sidebar-toggle-button"
        onClick={toggleDrawer(!isDrawerOpen)}
      >
        ☰
      </button>
      {/* Search Bar */}
      <div className="navbar-content">
        <MdOutlineSearch size={24} />
        <input
          type="text"
          placeholder="Search..."
          className="navbar-search"
        />
          </div>

          {/* User Avatar */}

          <div className="user-section">
          <NotificationAlert />
        <UserAvatar />
      </div>
    </div>
  );
};

export default NavBar;
