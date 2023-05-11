import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import { Link } from "react-router-dom";
import React from "react";

function Sidebar() {
  return (
      <Box sx={{ position: "fixed", height: "100vh", width: "300px", overflow: "auto" , top: "60px", boxShadow: "-8px 17px 26px 11px #dedede", margin: "0px!important" }}>
        <List
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Nested List Items
            </ListSubheader>
          }
        >
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton component={Link} to="/product">
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItemButton>
        </List>
      </Box>
  );
}

export default Sidebar;
