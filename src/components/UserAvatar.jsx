import React, {Fragment, useContext, useState} from 'react'
import { Button, Menu, MenuItem } from '@mui/material';
import { MdLogout } from "react-icons/md";
import { AuthContext } from '../auth/Authentication';
import { useNavigate } from 'react-router-dom';
import { HiUser } from "react-icons/hi";
import { getInitial } from '../utils';
import { TbLockPassword } from "react-icons/tb";


const UserAvatar = () => {
    const [open, isOpen] = useState(false);
    const [openPassword, isOpenPassword] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const logoutHandler = () => {
        console.log("Logged out");
    };

  return (
      <div>
            <Button
                      id="menuButton"
                      aria-haspopup="true"
                      variant="contained"
                      color="primary"
                      onClick={handleMenuOpen}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        padding: 0,
                        minWidth: 0,
                    }}
          >
                      <span className="">
                          {getInitial(user?.username)}

                      </span>
                  </Button>
                  <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                    style: {
                        width: 200,
                    },
                }}
            >
                <MenuItem onClick={handleMenuClose}>
                    <HiUser style={{ marginRight: 8 }} />
                    Profile
                </MenuItem>
                <MenuItem onClick={() => {
                    handleMenuClose();
                    // Open password modal or navigate to password change page
              }}>
                  <TbLockPassword style={{ marginRight: 8 }} />
                    Change Password
                </MenuItem>
              <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    logoutHandler();
                }}>
                  <MdLogout
                      style={{ marginRight: 8 }} />
                    Logout
                </MenuItem>
            </Menu>
        </div>
  );

};


export default UserAvatar
