"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import { Grid, Stack } from "@mui/material";
import GlobalForm from "@/components/Form/GlobalForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import GlobalInput from "@/components/Form/GlobalInput";
// import { useCreateSpecialtyMutation } from "@/redux/api/admin/specialties/specialtiesApi";
import { Toaster, toast } from "sonner";
import { Result } from "postcss";
import GlobalModal from "@/components/Shared/GlobalModal";
import GlobalSelect from "@/components/Form/GlobalSelect";
import {
  useChangeUserRoleAndStatusMutation,
  useDeleteUserMutation,
} from "@/redux/api/user/userApi";

type TModal = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedRowId: string;
};

const userStatusOptions = [
  { value: "activate", label: "Activate" },
  { value: "deactivate", label: "Deactivate" },
];

export default function UpdateUserModal({
  open,
  setOpen,
  selectedRowId,
}: TModal) {
  const [changeUserRoleAndStatus] = useChangeUserRoleAndStatusMutation();

  const handleSubmit: SubmitHandler<FieldValues> = async (
    values: FieldValues
  ) => {
    values.id = selectedRowId;

    try {
      const result = await changeUserRoleAndStatus(values).unwrap();
      if (result?.success) {
        toast.success(result.message);
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err.data.message);
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Toaster position="top-center" />
      <GlobalModal title="Update a User" open={open} setOpen={setOpen}>
        <GlobalForm sx={{ padding: "30px" }} onSubmit={handleSubmit}>
          <Stack direction="column" gap={2}>
            {" "}
            <GlobalSelect
              name="status"
              label="User Status"
              options={userStatusOptions}
              fullWidth={true}
              size="small"
              sx={{ width: "250px" }}
            />{" "}
          </Stack>
          <Button sx={{ mt: 2 }} type="submit">
            Update
          </Button>
        </GlobalForm>
      </GlobalModal>
    </React.Fragment>
  );
}
