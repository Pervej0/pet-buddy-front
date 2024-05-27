import { Menu, MenuItem } from "@mui/material";
import React from "react";

const UpdateStatusMenu = ({ anchorEl, handleClose, open }: any) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={handleClose}>PENDING</MenuItem>
      <MenuItem onClick={handleClose}>APPROVED</MenuItem>
      <MenuItem onClick={handleClose}>REJECTED</MenuItem>
    </Menu>
  );
};

export default UpdateStatusMenu;
