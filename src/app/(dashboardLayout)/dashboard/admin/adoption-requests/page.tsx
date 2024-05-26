"use client";

import Loader from "@/components/Shared/Loader";
import {
  useDeleteAdoptionRequestMutation,
  useGetAllAdoptionRequestQuery,
} from "@/redux/api/user/adoptionRequestApi";
import { Box, IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import React from "react";
import { Toaster, toast } from "sonner";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateStatusMenu from "./components/updateStatusMenu";

const ManageRequestsPage = () => {
  const { data: allRequests, isLoading } = useGetAllAdoptionRequestQuery({});
  const [deleteAdoptionRequest] = useDeleteAdoptionRequestMutation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget?.innerText);
    setAnchorEl(null);
  };

  const handleDelete = async (id: string) => {
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

  const rowsData = allRequests?.data?.map((item: any) => ({
    id: item.id,
    name: item.name,
    email: item.email,
    phone: item.phone,
    petName: item.pet.name,
    species: item.pet.species,
    age: item.pet.age,
    status: item.status,
    photo: item.pet.photos[0],
  }));

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    {
      field: "photo",
      headerName: "Photo",
      flex: 1,
      renderCell: ({ row }) => (
        <Image src={row?.photo} alt="pet image" height={60} width={60} />
      ),
    },
    { field: "petName", headerName: "Pet Name", flex: 1 },
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

            <Tooltip title="Update Status">
              <IconButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <EditIcon sx={{ color: "red" }} />
              </IconButton>
            </Tooltip>
            <UpdateStatusMenu
              anchorEl={anchorEl}
              open={open}
              handleClose={handleClose}
            />
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

export default ManageRequestsPage;
