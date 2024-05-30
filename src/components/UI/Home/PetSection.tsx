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
import { useDebounce } from "@/redux/api/hooks";
import { ageFilter, sizeFilter, specialNeedsFilter } from "@/constant/common";

const PetSection = () => {
  const [page, setPage] = React.useState(1);
  const [searchText, setSearchText] = React.useState("");
  const [age, setAge] = React.useState(null);
  const [size, setSize] = React.useState<string | null>(null);
  const [specialNeeds, setSpecialNeeds] = React.useState(null);
  const debounceText = useDebounce({ searchQuery: searchText, delay: 600 });
  const query: Record<string, any> = {};
  if (!!debounceText) {
    query["searchTerm"] = searchText;
  }
  const { data: pets, isLoading } = useGetAllPetsQuery({
    ...query,
    size: size?.toLocaleLowerCase() as string,
    age: age,
    specialNeeds: specialNeeds,
    page: page,
    limit: 6,
  });

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
            <Box
              sx={{ display: "flex", flexWrap: { md: "nowrap", sm: "wrap" } }}
              gap={2}
            >
              <SelectField
                label="Age"
                value={age}
                handleChange={(e: any) => {
                  // setSize("");
                  // setSpecialNeeds("");
                  setAge(e.target.value);
                }}
                options={ageFilter}
              />
              <SelectField
                label="Size"
                value={size}
                handleChange={(e: any) => {
                  // setAge("");
                  // setSpecialNeeds("");
                  setSize(e.target.value);
                }}
                options={sizeFilter}
              />
              <SelectField
                label="Special Needs"
                value={specialNeeds}
                handleChange={(e: any) => {
                  // setAge("");
                  // setSize("");
                  setSpecialNeeds(e.target.value);
                }}
                options={specialNeedsFilter}
              />
              <TextField
                onChange={(e) => setSearchText(e.target.value)}
                sx={{
                  marginLeft: 3,
                }}
                label="Search pets"
                size="small"
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {pets?.data < 1 && (
            <Typography variant="h6" component="h6">
              No Data Found!
            </Typography>
          )}
          {pets?.data.map((item: TPet) => (
            <Grid item key={item.id} md={4} sm={6} xs={12}>
              <PetCard petCard={item} />
            </Grid>
          ))}
        </Grid>

        <Stack spacing={2} mt={4}>
          <Pagination
            count={10}
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={(event: React.ChangeEvent<unknown>, value: number) =>
              setPage(value)
            }
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default PetSection;
