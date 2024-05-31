"use client";

import GlobalForm from "@/components/Form/GlobalForm";
import GlobalInput from "@/components/Form/GlobalInput";
import { useUpdateUserMutation } from "@/redux/api/user/userApi";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { Toaster, toast } from "sonner";

const UpdateUser = () => {
  const [disabledButton, setDisabledButton] = useState(false);
  const [updateUser] = useUpdateUserMutation();
  const router = useRouter();

  const handleSubmit = async (values: FieldValues) => {
    try {
      const result = await updateUser(values).unwrap();
      if (result?.success) {
        setDisabledButton(true);
        router.refresh();
        router.push("/dashboard/user/profile");
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
        Change User Name
      </Typography>
      <GlobalForm sx={{ padding: "30px" }} onSubmit={handleSubmit}>
        <Stack direction="column" gap={2} width={500} sx={{ margin: "0 auto" }}>
          <GlobalInput
            name="name"
            type="text"
            label="Name"
            fullWidth={true}
            required
          />

          <Button disabled={disabledButton} sx={{ mt: 2 }} type="submit">
            Update
          </Button>
        </Stack>
      </GlobalForm>
    </Box>
  );
};

export default UpdateUser;
