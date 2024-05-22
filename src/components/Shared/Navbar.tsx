"use client";

import assets from "@/assets";
// import logOutUser from "@/services/actions/logOutUser";
import { getUserInfo } from "@/services/auth.services";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const user = getUserInfo();
  const router = useRouter();

  return (
    <Container>
      <Stack py={3} direction="row" justifyContent="space-between">
        <Box>
          <Image
            src={assets.images.brand}
            alt="Brand logo"
            width={120}
            height={120}
          />
        </Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={4}
        >
          <Typography component={Link} href="/">
            Home
          </Typography>
          <Typography>About Us</Typography>
          <Typography>Team</Typography>
          <Typography>Contact us</Typography>
        </Stack>
        <Box>
          {!user ? (
            <Button LinkComponent={Link} href="/login">
              Login
            </Button>
          ) : (
            <Button
              // onClick={() => logOutUser(router)}
              color="error"
              LinkComponent={Link}
              variant="contained"
            >
              Logout
            </Button>
          )}
        </Box>
      </Stack>
    </Container>
  );
};

export default Navbar;
