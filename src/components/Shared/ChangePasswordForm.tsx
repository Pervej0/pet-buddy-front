"use client";

import React, { useState } from "react";
import GlobalForm from "../Form/GlobalForm";
import { Box, Button, Grid, Stack } from "@mui/material";
import GlobalInput from "../Form/GlobalInput";
import { FieldValues } from "react-hook-form";
import { useChangePasswordMutation } from "@/redux/api/user/userApi";
import { Toaster, toast } from "sonner";

const ChangePasswordForm = () => {
  const [changePassword] = useChangePasswordMutation();
  const [disabledButton, setDisabledButton] = useState(false);

  const handleSubmit = async (values: FieldValues) => {
    try {
      const result = await changePassword(values).unwrap();
      if (result.success) {
        setDisabledButton(true);
        toast.success(result.message);
      }
    } catch (error: any) {
      toast.error(error.data.message);
      console.log(error);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <GlobalForm sx={{ padding: "30px" }} onSubmit={handleSubmit}>
        <Stack
          direction="column"
          width={400}
          sx={{ margin: "0 auto" }}
          gap={2}
          justifyContent="center"
        >
          <GlobalInput
            name="oldPassword"
            label="Old password"
            type="password"
            fullWidth={true}
            required={true}
          />
          <GlobalInput
            name="newPassword"
            label="New password"
            type="password"
            fullWidth={true}
            required={true}
          />
          <Button disabled={disabledButton} sx={{ mt: 2 }} type="submit">
            Update
          </Button>
        </Stack>
      </GlobalForm>
    </>
  );
};

export default ChangePasswordForm;
