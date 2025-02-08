import React, { useEffect, useState } from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  OutlinedInput,
  Chip,
  Box,
  Avatar,
} from "@mui/material";
import { MdCheck } from "react-icons/md";
import { summary } from "../../assets/data";
import { getInitial } from "../../utils";

const UserList = ({ setTeam, team }) => {
  const data = summary.users;
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    if (!team || team.length === 0) {
      data && setSelectedUsers([data[0]]);
    } else {
      setSelectedUsers(team);
    }
  }, []);

  const handleChange = (event) => {
    const selectedValues = event.target.value;
    setSelectedUsers(selectedValues);
    setTeam(selectedValues.map((user) => user._id));
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Assign Task To</InputLabel>
      <Select
        multiple
        value={selectedUsers}
        onChange={handleChange}
        input={<OutlinedInput label="Assign Task To" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((user) => (
              <Chip
                key={user._id}
                label={user.name}
                avatar={<Avatar sx={{ width: 24, height: 24 }}>{getInitials(user.name)}</Avatar>}
              />
            ))}
          </Box>
        )}
      >
        {data?.map((user) => (
          <MenuItem key={user._id} value={user}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, width: "100%" }}>
              <Avatar sx={{ width: 30, height: 30, bgcolor: "primary.main" }}>
                {getInitial(user.name)}
              </Avatar>
              <span>{user.name}</span>
              {selectedUsers.includes(user) && (
                <MdCheck color="green" style={{ marginLeft: "auto" }} />
              )}
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default UserList;
