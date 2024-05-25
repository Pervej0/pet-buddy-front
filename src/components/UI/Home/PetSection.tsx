"use client";

import { useGetAllPetsQuery } from "@/redux/api/user/petsApi";
import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import PetCard from "./PetCard";
import { TPet } from "@/types/common.type";
import Loader from "@/components/Shared/Loader";
import SelectField from "@/components/Shared/SelectField";

const PetSection = () => {
  const [page, setPage] = React.useState(1);
  const { data: pets, isLoading } = useGetAllPetsQuery({
    page: page,
    limit: 6,
  });
  const [age, setAge] = React.useState([]);
  const [size, setSize] = React.useState([]);
  const [specialNeeds, setSpecialNeeds] = React.useState([]);

  const handleChange = (event: SelectChangeEvent) => {
    // setAge(event.target.value as string);
  };

  return (
    <Box my={5}>
      {isLoading && <Loader />}
      <Container>
        <Grid
          container
          alignItems="center"
          sx={{ justifyContent: { md: "space-between", sm: "center" } }}
          spacing={2}
          mb={8}
        >
          <Grid item md={6} xs={12}>
            <Typography variant="h5" component="h5" fontWeight={500}>
              See All Pets Here
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Stack direction="row" gap={2}>
              <SelectField label="Age" age={age} handleChange={handleChange} />
              <SelectField
                label="Size"
                age={size}
                handleChange={handleChange}
              />
              <SelectField
                label="Special Needs"
                age={specialNeeds}
                handleChange={handleChange}
              />
              <TextField
                sx={{
                  marginLeft: 3,
                }}
                label="Search pets"
                size="small"
              />
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {pets?.data.map((item: TPet) => (
            <Grid item key={item.id} md={4} sm={6} xs={12}>
              <PetCard petCard={item} />
            </Grid>
          ))}
        </Grid>
        {pets?.data?.length > 1 && (
          <Stack spacing={2} mt={4}>
            <Pagination
              count={10}
              page={page}
              onChange={(value: any) => setPage(value)}
            />
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export default PetSection;
