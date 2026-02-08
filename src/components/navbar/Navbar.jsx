import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar gap={3}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Exclusive
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 3 }}>
            <Link
              component={RouterLink}
              to="/"
              color="inherit"
              underline="none"
            >
              Home
            </Link>
            <Link
              component={RouterLink}
              to="/contact"
              color="inherit"
              underline="none"
            >
              Contact
            </Link>
            <Link
              component={RouterLink}
              to="/about"
              color="inherit"
              underline="none"
            >
              About
            </Link>
            <Link
              component={RouterLink}
              to="/register"
              color="inherit"
              underline="none"
            >
              Sign Up
            </Link>
          </Box>
          <IconButton
            sx={{ display: { xs: "flex", sm: "none" } }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            s
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
