import ChangePasswordForm from "@/components/Shared/ChangePasswordForm";
import { Box, Typography } from "@mui/material";
import React from "react";

const ChangePasswordPage = () => {
  return (
    <Box mt={10}>
      <Typography variant="h5" component="h5" textAlign="center">
        Change your current password
      </Typography>
      <ChangePasswordForm />
    </Box>
  );
};

export default ChangePasswordPage;
