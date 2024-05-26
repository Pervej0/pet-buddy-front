"use client";

import assets from "@/assets";
// import logOutUser from "@/services/actions/logOutUser";
import { getUserInfo } from "@/services/auth.services";
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProfileDropdown from "./ProfileDropdown";
import MenuIcon from "@mui/icons-material/Menu";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const Navbar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
        <Link href="/">
          <Image
            src={assets.images.brand}
            alt="Brand logo"
            width={120}
            height={120}
          />
        </Link>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.title} color="black" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box>
        <ProfileDropdown />
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", height: "80px" }}>
      {/* <CssBaseline /> */}
      <AppBar component="nav" sx={{ backgroundColor: "#fefcff" }}>
        <Container>
          <Stack
            py={1}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none", xs: "block" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box>
              <Link href="/">
                <Image
                  src={assets.images.brand}
                  alt="Brand logo"
                  width={120}
                  height={120}
                />
              </Link>
            </Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              gap={4}
              sx={{ display: { xs: "none", sm: "block", md: "inherit" } }}
            >
              {navItems.map((item, index) => (
                <Typography
                  key={index}
                  component={Link}
                  href={item.path}
                  color="black"
                >
                  {item.title}
                </Typography>
              ))}
            </Stack>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ProfileDropdown />
            </Box>
          </Stack>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        {/* <Toolbar /> */}
      </Box>
    </Box>
  );
};

export default Navbar;
