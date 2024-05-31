"use client";

import Loader from "@/components/Shared/Loader";
import { Box, IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  useDeletePetMutation,
  useGetAllPetsQuery,
} from "@/redux/api/user/petsApi";
import PetFullViewModal from "./components/PetFullViewModal";

const ManageRequestsPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const { data: pets, isLoading } = useGetAllPetsQuery({});
  const [deletePet] = useDeletePetMutation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleDelete = async (id: string) => {
    try {
      if (confirm("Are you sure you want to delete?")) {
        const result = await deletePet(id);
        if (result?.data.success) {
          toast.success(result.data.message);
        }
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err.data.message);
    }
  };

  const rowsData = pets?.data?.map((item: any) => ({
    id: item.id,
    name: item.name,
    species: item.species,
    breed: item.breed,
    gender: item.gender,
    age: item.age,
    location: item.location,
    photo: item.photos[0],
    size: item.size,
    description: item.description,
    temperament: item.temperament,
    medicalHistory: item.medicalHistory,
    adoptionRequirements: item.adoptionRequirements,
    specialNeeds: item.specialNeeds,
    healthStatus: item.healthStatus,
  }));

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "species", headerName: "Species", flex: 1 },
    { field: "breed", headerName: "Breed", flex: 1 },
    {
      field: "photo",
      headerName: "Photo",
      flex: 1,
      renderCell: ({ row }) => (
        <Image src={row?.photo} alt="pet image" height={60} width={60} />
      ),
    },
    { field: "location", headerName: "Location", flex: 1 },
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

            <Tooltip title="Update pet">
              <IconButton
                onClick={() => {
                  setOpen(true);
                  setSelectedRow(row);
                }}
                aria-label="delete"
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
          </Box>
        );
      },
    },
  ];

  return (
    <Box my={10}>
      <Toaster position="top-center" />
      <PetFullViewModal
        open={open}
        setOpen={setOpen}
        selectedRow={selectedRow}
      />
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

export default ManageRequestsPage;
