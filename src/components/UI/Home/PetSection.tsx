"use client";

import { useGetAllPetsQuery } from "@/redux/api/user/petsApi";
import {
  Box,
  Container,
  Grid,
  Pagination,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import PetCard from "./PetCard";
import { TPet } from "@/types/common.type";

const PetSection = () => {
  const [page, setPage] = React.useState(1);
  const { data: pets, isLoading } = useGetAllPetsQuery({
    page: page,
    limit: 9,
  });

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  console.log(pets, "x");
  return (
    <Box my={5}>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={8}
        >
          <Typography variant="h5" component="h5" fontWeight={500}>
            See All Pets Here
          </Typography>
          <TextField label="Search pets" size="small" />
        </Stack>
        <Grid container spacing={3}>
          {pets?.data.map((item: TPet) => (
            <Grid item key={item.id} md={4} sm={6} xs={12}>
              <PetCard petDetails={item} />
            </Grid>
          ))}
        </Grid>
        <Stack spacing={2} mt={4}>
          <Typography>Page: {page}</Typography>
          <Pagination count={10} page={page} onChange={handleChange} />
        </Stack>
      </Container>
    </Box>
  );
};

export default PetSection;
