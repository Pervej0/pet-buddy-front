"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import Loader from "./Loader";
import { useGetMyProfileQuery } from "@/redux/api/user/userApi";

const Profile = () => {
  const { data: userProfile, isLoading } = useGetMyProfileQuery({});
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Box mt={12} sx={{ boxShadow: 1 }} p={3} borderRadius={4}>
      <Typography variant="h5" component="h5" mb={1}>
        {userProfile.name}
      </Typography>
      <Typography variant="body1">Email: {userProfile.data.email}</Typography>
      <Typography variant="body1">Role: {userProfile.data.role}</Typography>
      <Typography variant="body1">
        Account Status: {userProfile.data.status}
      </Typography>
    </Box>
  );
};

export default Profile;
