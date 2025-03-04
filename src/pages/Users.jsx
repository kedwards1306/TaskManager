import React, { useState } from "react";
import {
  Box,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
import { IoMdAdd } from "react-icons/io";
import { summary } from "../assets/data";
import { getInitial } from "../utils";
import { styled } from "@mui/material/styles";
import ConfirmatioDialog, { UserAction } from "../components/Dialogs";
import AddUser from "../components/AddUser";

// Styled components for Material-UI
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 600,
  padding: theme.spacing(1.5),
}));

const Users = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAction, setOpenAction] = useState(false);
  const [selected, setSelected] = useState(null);

  const userActionHandler = () => {};
  const deleteHandler = () => {};

  const deleteClick = (id) => {
    setSelected(id);
    setOpenDialog(true);
  };

  const editClick = (el) => {
    setSelected(el);
    setOpen(true);
  };

  return (
    <Box sx={{ width: "100%", p: 2 }}>
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h5" fontWeight={700}>
          Team Members
        </Typography>

        <Button
          variant="contained"
          startIcon={<IoMdAdd />}
          sx={{ backgroundColor: "#2563eb", color: "white", borderRadius: 2 }}
          onClick={() => setOpen(true)}
        >
          Add New User
        </Button>
      </Box>

      {/* Table */}
      <Paper sx={{ overflow: "hidden", p: 2, borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Full Name</StyledTableCell>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Role</StyledTableCell>
              <StyledTableCell>Active</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {summary.users?.map((user, index) => (
              <TableRow key={index} hover>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={1.5}>
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        backgroundColor: "#2563eb",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      {getInitial(user.name)}
                    </Box>
                    {user.name}
                  </Box>
                </TableCell>

                <TableCell>{user.title}</TableCell>
                <TableCell>{user.email || "user.email.com"}</TableCell>
                <TableCell>{user.role}</TableCell>

                <TableCell>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: user.isActive ? "#bbdefb" : "#ffe082",
                      color: "black",
                      borderRadius: "16px",
                      fontSize: "0.75rem",
                    }}
                  >
                    {user.isActive ? "Active" : "Disabled"}
                  </Button>
                </TableCell>

                {/* Actions */}
                <TableCell align="right">
                  <IconButton
                    color="primary"
                    onClick={() => editClick(user)}
                    sx={{ mr: 1 }}
                  >
                    Edit
                  </IconButton>

                  <IconButton
                    color="error"
                    onClick={() => deleteClick(user?._id)}
                  >
                    Delete
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* Modals */}
      <AddUser open={open} setOpen={setOpen} userData={selected} />

      <ConfirmatioDialog
        open={openDialog}
        setOpen={setOpenDialog}
        onClick={deleteHandler}
      />

      <UserAction
        open={openAction}
        setOpen={setOpenAction}
        onClick={userActionHandler}
      />
    </Box>
  );
};

export default Users;
