import { Box, Typography } from "@mui/material";
import React from "react";

const Profile = ({ userProfile }: any) => {
  return (
    <Box mt={12} sx={{ boxShadow: 1 }} p={3} borderRadius={4}>
      <Typography variant="h5" component="h5" mb={1}>
        {userProfile.name}
      </Typography>
      <Typography variant="body1">Email: {userProfile.email}</Typography>
      <Typography variant="body1">Role: {userProfile.role}</Typography>
      <Typography variant="body1">
        Account Status: {userProfile.status}
      </Typography>
    </Box>
  );
};

export default Profile;
