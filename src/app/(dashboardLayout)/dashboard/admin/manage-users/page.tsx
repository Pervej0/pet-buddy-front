"use client";

import {
  Box,
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
import UpdateUserModal from "./components/UpdateUserModal";
import Loader from "@/components/Shared/Loader";

const UsersPage = () => {
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState<string>("");
  const [deleteUser] = useDeleteUserMutation();
  const { isLoading, data } = useGetAllUserQuery({});
  const [selectedRowId, setSelectedRowId] = useState("");

  if (isLoading) {
    return <Loader />;
  }

  const handleDelete = async (id: string) => {
    try {
      if (confirm("Are you sure want to delete?")) {
        const result = await deleteUser(id).unwrap();
        if (result?.data.success) {
          toast.success(result.data.message);
        }
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
            <IconButton
              onClick={() => {
                setOpen(true);
                setSelectedRowId(row.id);
              }}
              aria-label="delete"
            >
              <EditIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <>
      <Toaster position="top-center" />
      <UpdateUserModal
        open={open}
        setOpen={setOpen}
        selectedRowId={selectedRowId}
      />
      <Stack mt={10} justifyContent="space-between" direction="row" mb={6}>
        <TextField
          onChange={(e) => setSearchText(e.target.value)}
          size="small"
          placeholder="Search here"
        />
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
