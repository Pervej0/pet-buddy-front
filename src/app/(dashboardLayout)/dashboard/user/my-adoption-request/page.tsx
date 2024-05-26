"use client";
import {
  useDeleteAdoptionRequestMutation,
  useGetMyAdoptionRequestsQuery,
} from "@/redux/api/user/adoptionRequestApi";
import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";
import { Toaster, toast } from "sonner";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import Loader from "@/components/Shared/Loader";
import Image from "next/image";

const MyRequestPage = () => {
  const { data: myRequest, isLoading } = useGetMyAdoptionRequestsQuery({});
  const [deleteAdoptionRequest] = useDeleteAdoptionRequestMutation();

  const handleDelete = async (id: string) => {
    console.log(id);

    try {
      if (confirm("Are you sure you want to delete?")) {
        const result = await deleteAdoptionRequest(id);
        console.log(result, "xx");
        if (result?.data.success) {
          toast.success(result.data.message);
        }
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err.data.message);
    }
  };
  const rowsData = myRequest?.data?.map((item: any) => ({
    id: item.id,
    name: item.pet.name,
    species: item.pet.species,
    age: item.pet.age,
    status: item.status,
    photo: item.pet.photos[0],
  }));

  const columns: GridColDef[] = [
    { field: "name", headerName: "Pet Name", flex: 1 },
    { field: "species", headerName: "Species", flex: 1 },
    { field: "age", headerName: "Age", flex: 1 },
    {
      field: "photo",
      headerName: "Photo",
      flex: 1,
      renderCell: ({ row }) => (
        <Image src={row.photo} alt="pet image" height={60} width={60} />
      ),
    },
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
          </Box>
        );
      },
    },
  ];

  return (
    <Box my={10}>
      <Toaster position="top-center" />
      {isLoading ? (
        <Loader />
      ) : (
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid rows={rowsData} columns={columns} />
        </Box>
      )}
    </Box>
  );
};

export default MyRequestPage;
