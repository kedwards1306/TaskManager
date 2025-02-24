import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem, IconButton, Paper } from "@mui/material";
import { AiTwotoneFolderOpen } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { HiDuplicate } from "react-icons/hi";
import { MdAdd, MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddTask from "./AddTask.jsx";
import AddSubTask from "./AddSubTask";
import ConfirmationDialog from "../Dialogs";

const TaskDialog = ({ task }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [openSubTask, setOpenSubTask] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const duplicateHandler = () => {};
  const deleteClicks = () => {};
  const deleteHandler = () => {};

  const items = [
    {
      label: "Open Task",
      icon: <AiTwotoneFolderOpen size={20} />,
      onClick: () => {
        navigate(`/task/${task._id}`);
        handleMenuClose();
      },
    },
    {
      label: "Edit",
      icon: <MdOutlineEdit size={20} />,
      onClick: () => {
        setOpenEdit(true);
        handleMenuClose();
      },
    },
    {
      label: "Add Sub-Task",
      icon: <MdAdd size={20} />,
      onClick: () => {
        setOpenSubTask(true);
        handleMenuClose();
      },
    },
    {
      label: "Duplicate",
      icon: <HiDuplicate size={20} />,
      onClick: () => {
        duplicateHandler();
        handleMenuClose();
      },
    },
  ];

  return (
    <>
      {/* Menu Button */}
      <IconButton onClick={handleMenuOpen} size="small">
        <BsThreeDots size={20} />
      </IconButton>

      {/* Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            width: 200,
            mt: 1,
            borderRadius: 2,
            boxShadow: 3,
          },
        }}
      >
        {/* Menu Items */}
        {items.map((item) => (
          <MenuItem
            key={item.label}
            onClick={item.onClick}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              px: 2,
            }}
          >
            {item.icon}
            {item.label}
          </MenuItem>
        ))}

        {/* Delete Option */}
        <MenuItem
          onClick={() => {
            deleteClicks();
            handleMenuClose();
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "red",
            px: 2,
          }}
        >
          <RiDeleteBin6Line size={20} style={{ color: "red" }} />
          Delete
        </MenuItem>
      </Menu>

      {/* Modals */}
      <AddTask open={openEdit} setOpen={setOpenEdit} task={task} />
      <AddSubTask open={openSubTask} setOpen={setOpenSubTask} />
      <ConfirmationDialog open={openDialog} setOpen={setOpenDialog} onClick={deleteHandler} />
    </>
  );
};

export default TaskDialog;
