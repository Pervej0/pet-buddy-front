"use client";

import { useGetSinglePetQuery } from "@/redux/api/user/petsApi";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Loader from "@/components/Shared/Loader";
import Image from "next/image";

const PetDetails = ({ params }: { params: { petId: string } }) => {
  const { data: pet, isLoading } = useGetSinglePetQuery(params?.petId);
  console.log(pet);
  if (isLoading) {
    return <Loader />;
  }

  const {
    name,
    description,
    age,
    size,
    species,
    gender,
    breed,
    location,
    photos,
    temperament,
    medicalHistory,
    adoptionRequirements,
    specialNeeds,
    healthStatus,
  } = pet?.data;

  return (
    <Box mt={6}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item md={6} xs={12}>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {description}
            </Typography>
            <Stack my={1} direction="row" justifyContent="space-between">
              <Box>
                <Typography variant="body1" color="text.secondary">
                  Age: {age}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Size: {size}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Gender: {gender}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" color="text.secondary">
                  Breed: {breed}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Species: {species}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Health Status: {healthStatus}
                </Typography>
              </Box>
            </Stack>
            <Typography variant="body1" color="text.secondary">
              <LocationOnIcon /> {location}
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Image src={photos[0]} alt="Main Image" width={500} height={500} />
          </Grid>
        </Grid>
        <Box my={5}>
          <Typography variant="h6" component="h6">
            Temperament:{" "}
            <span className="text-gray-700 text-lg font-normal">
              {temperament}
            </span>
          </Typography>
          <Typography variant="h6" component="h6">
            Medical History:{" "}
            <span className="text-gray-700 text-lg font-normal">
              {medicalHistory}
            </span>
          </Typography>
          <Typography variant="h6" component="h6">
            Adoption Requirements:{" "}
            <span className="text-gray-700 text-lg font-normal">
              {adoptionRequirements}
            </span>
          </Typography>
          <Typography variant="h6" component="h6">
            Special Needs:{" "}
            <span className="text-gray-700 text-lg font-normal">
              {specialNeeds}
            </span>
          </Typography>
        </Box>
        <Box mb={8}>
          <Typography mb={6} variant="h5" component="h5" fontWeight={600}>
            Gallery
          </Typography>
          <Stack direction="row" gap={6}>
            {photos.slice(1, 3).map((photo: string, index: number) => (
              <Box key={index}>
                <Image src={photo} alt="image" width={300} height={300} />
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default PetDetails;
