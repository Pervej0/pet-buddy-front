"use client";

import GlobalForm from "@/components/Form/GlobalForm";
import GlobalInput from "@/components/Form/GlobalInput";
import GlobalSelect from "@/components/Form/GlobalSelect";
import {
  useChangePasswordMutation,
  useChangeUserRoleMutation,
} from "@/redux/api/user/userApi";
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { Toaster, toast } from "sonner";

const userRoles = [
  { value: "user", label: "User" },
  { value: "admin", label: "Admin" },
];

const ChangeRolePage = () => {
  const [changeUserRole] = useChangeUserRoleMutation();
  const [disabledButton, setDisabledButton] = useState(false);

  const handleSubmit = async (values: FieldValues) => {
    try {
      const result = await changeUserRole(values).unwrap();
      if (result?.success) {
        setDisabledButton(true);
        toast.success(result.message);
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err.data.message);
    }
  };
  return (
    <Box mt={10}>
      <Toaster position="top-center" />
      <Typography variant="h5" component="h5" textAlign="center" mb={3}>
        Change User role to Admin
      </Typography>
      <GlobalForm sx={{ padding: "30px" }} onSubmit={handleSubmit}>
        <Stack direction="column" gap={2} width={500} sx={{ margin: "0 auto" }}>
          <GlobalInput
            name="email"
            type="email"
            label="Email"
            fullWidth={true}
            required
          />
          <GlobalSelect
            name="role"
            size="small"
            label="User Role"
            fullWidth={true}
            options={userRoles}
          />
          <Button disabled={disabledButton} sx={{ mt: 2 }} type="submit">
            Update
          </Button>
        </Stack>
      </GlobalForm>
    </Box>
  );
};

export default ChangeRolePage;
