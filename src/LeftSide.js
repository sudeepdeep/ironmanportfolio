import React from "react";
import "./LeftsideStyles.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CloudIcon from "@mui/icons-material/Cloud";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import EmailIcon from "@mui/icons-material/Email";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

function LeftSide() {
  return (
    <div className="leftside">
      <img
        src="https://images2.alphacoders.com/101/1014592.jpg"
        width="100"
        height="100"
        className="leftImage"
      />

      <h5 className="leftUsername">Alex Smith</h5>

      <div className="leftIcons">
        <div class="leftCircle">
          <TwitterIcon />
        </div>
        <div class="leftCircle">
          <FacebookIcon />
        </div>
        <div class="leftCircle">
          <InstagramIcon />
        </div>
        <div class="leftCircle">
          <CloudIcon />
        </div>
        <div class="leftCircle">
          <LinkedInIcon />
        </div>
      </div>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          marginTop: "30px",
        }}
      >
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon className="leftIcon active" />
                </ListItemIcon>
                <ListItemText className="leftText textactive" primary="Home" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon className="leftIcon" />
                </ListItemIcon>
                <ListItemText className="leftText" primary="About" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InsertDriveFileIcon className="leftIcon" />
                </ListItemIcon>
                <ListItemText className="leftText" primary="Resume" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <EmailIcon className="leftIcon" />
                </ListItemIcon>
                <ListItemText className="leftText" primary="Contact" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>

      <h6>Copyright By @smith</h6>
    </div>
  );
}

export default LeftSide;
