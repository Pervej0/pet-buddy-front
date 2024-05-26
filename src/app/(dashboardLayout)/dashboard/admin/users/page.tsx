"use client";

import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import { Toaster, toast } from "sonner";
import {
  useDeleteUserMutation,
  useGetAllUserQuery,
} from "@/redux/api/user/userApi";

const UsersPage = () => {
  //   const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState<string>("");
  const [deleteUser] = useDeleteUserMutation();
  const { isLoading, data } = useGetAllUserQuery({});

  const handleDelete = async (id: string) => {
    try {
      const result = await deleteUser(id);
      if (result?.data.success) {
        toast.success(result.data.message);
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err.data.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "role", headerName: "User Role", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              onClick={() => handleDelete(row.id)}
              aria-label="delete"
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
            <Link href={`/dashboard/admin/doctors/edit/${row.id}`}>
              <IconButton aria-label="delete">
                <EditIcon />
              </IconButton>
            </Link>
          </Box>
        );
      },
    },
  ];

  return (
    <>
      <Toaster position="top-center" />
      <Stack mt={10} justifyContent="space-between" direction="row" mb={6}>
        {/* <Button variant="outlined" onClick={() => setOpen(true)}>
          Create Doctor
        </Button> */}
        <TextField
          onChange={(e) => setSearchText(e.target.value)}
          size="small"
          placeholder="Search here"
        />
        {/* <CreateDoctorModal open={open} setOpen={setOpen} /> */}
      </Stack>
      {isLoading ? (
        <Box textAlign="center">
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid rows={data?.data} columns={columns} />
        </Box>
      )}
    </>
  );
};

export default UsersPage;
