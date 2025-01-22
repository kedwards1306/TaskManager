import React, { useContext } from 'react'
import { MdOutlineSearch } from 'react-icons/md';
import { AuthContext } from '../auth/Authentication';
import "./App.css";
import UserAvatar from './UserAvatar';

const NavBar = () => {
    const user = useContext(AuthContext);
  return (
      <div className="navbar-left">
          <div className="navbar-content">
              <MdOutlineSearch />
              <input
                    type="text"
                    placeholder="Search..."
                    className="navbar-search"
                />

          </div>

          <div>
<UserAvatar />
          </div>

    </div>
  )
}

export default NavBar
