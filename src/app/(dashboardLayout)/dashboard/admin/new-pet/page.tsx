"use client";

import GlobalForm from "@/components/Form/GlobalForm";
import GlobalInput from "@/components/Form/GlobalInput";
import GlobalSelect from "@/components/Form/GlobalSelect";
import GlobalUploadFile from "@/components/Form/GlobalUpload";
import { genderOptions, sizeOptions } from "@/constant/common";
import { useCreatePetMutation } from "@/redux/api/user/petsApi";
import convertToFormData from "@/utils/converToFormData";
import uploadToImageBB from "@/utils/uploadToImageBB";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { Toaster, toast } from "sonner";

const defaultValues = {
  name: "Coco",
  species: "Cat",
  gender: "female",
  breed: "Persian",
  age: 3,
  size: "small",
  location: "Dallas, TX",
  description:
    "Coco is a sweet and quiet Persian cat. She loves to be pampered and enjoys being brushed. Coco is best suited for a calm and quiet household.",
  temperament: "Sweet, Quiet, Affectionate",
  medicalHistory:
    "Up-to-date on vaccinations, spayed, no known medical issues.",
  adoptionRequirements: "Calm home without small children.",
  specialNeeds: "Regular grooming",
  healthStatus: "Excellent",
};

const NewPetPage = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [files, setFiles] = useState<any>([]);
  const [createPet] = useCreatePetMutation();

  const handleSubmit = async (values: FieldValues) => {
    setButtonDisabled(true);
    values.age = Number(values.age);
    if (files.length < 1) {
      toast.error("Please upload more than one image");
      setButtonDisabled(false);
      return;
    }
    const imageUpload = await uploadToImageBB(files);
    values.photos = imageUpload.imageUrls;

    const data = convertToFormData(values);
    try {
      const result = await createPet(data).unwrap();
      if (result.success) {
        toast.success(result.message);
      }
    } catch (err: any) {
      toast.error(err.data.message);
      console.log(err);
    }
  };
  return (
    <Box mt={10}>
      <Toaster position="top-center" />
      <Typography variant="h5" component="h5" textAlign="center" mb={3}>
        Add a new pet
      </Typography>
      <Container>
        <GlobalForm
          sx={{ padding: "30px" }}
          onSubmit={handleSubmit}
          defaultValues={defaultValues}
        >
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <GlobalInput name="name" label="Name" required fullWidth={true} />
            </Grid>
            <Grid item md={6} xs={12}>
              <GlobalInput
                name="species"
                label="Species"
                required
                fullWidth={true}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <GlobalInput
                name="breed"
                label="Breed"
                required
                fullWidth={true}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <GlobalSelect
                name="gender"
                label="Gender"
                required
                size="small"
                fullWidth={true}
                options={genderOptions}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <GlobalInput name="age" label="Age" required fullWidth={true} />
            </Grid>
            <Grid item md={6} xs={12}>
              <GlobalSelect
                name="size"
                label="Size"
                size="small"
                required
                fullWidth={true}
                options={sizeOptions}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <GlobalInput
                name="location"
                label="Location"
                required
                fullWidth={true}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <GlobalInput
                name="description"
                label="Description"
                size="medium"
                required
                fullWidth={true}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <GlobalInput
                name="temperament"
                label="Temperament"
                size="medium"
                required
                fullWidth={true}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <GlobalInput
                name="medicalHistory"
                label="Medical History"
                size="medium"
                required
                fullWidth={true}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <GlobalInput
                name="adoptionRequirements"
                label="Adoption Requirements"
                size="medium"
                required
                fullWidth={true}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <GlobalInput
                name="specialNeeds"
                label="Special Needs"
                size="medium"
                required
                fullWidth={true}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <GlobalInput
                name="healthStatus"
                label="Health Status"
                size="medium"
                required
                fullWidth={true}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <Tooltip title="Upload more than one images">
                {/* <GlobalUploadFile
                  multiple={true}
                  type="file"
                  name="file"
                  label="Upload photo"
                /> */}
                <input
                  multiple
                  type="file"
                  placeholder="Upload images"
                  required
                  onChange={(e) => setFiles(e.target.files)}
                />
              </Tooltip>
            </Grid>
          </Grid>
          <Button disabled={buttonDisabled} sx={{ mt: 4 }} type="submit">
            Submit
          </Button>
        </GlobalForm>
      </Container>
    </Box>
  );
};

export default NewPetPage;
