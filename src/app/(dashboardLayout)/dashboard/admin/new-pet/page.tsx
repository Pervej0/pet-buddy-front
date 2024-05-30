"use client";

import GlobalForm from "@/components/Form/GlobalForm";
import GlobalInput from "@/components/Form/GlobalInput";
import GlobalSelect from "@/components/Form/GlobalSelect";
import GlobalUploadFile from "@/components/Form/GlobalUpload";
import { useCreatePetMutation } from "@/redux/api/user/petsApi";
import convertToFormData from "@/utils/converToFormData";
import uploadToImageBB from "@/utils/uploadToImagebb";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { Toaster, toast } from "sonner";

const defaultValues = {
  name: "Bella",
  species: "Dog",
  gender: "female",
  breed: "Poodle",
  age: 4,
  size: "small",
  location: "Chicago, IL",
  description:
    "Bella is a sweet and gentle Poodle who loves to cuddle. She is very friendly and gets along well with other dogs.",
  temperament: "Gentle, Friendly, Affectionate",
  medicalHistory: "Spayed, up-to-date on vaccinations, has diabetes",
  adoptionRequirements: "Home check required, no young children",
  specialNeeds: "Diabetes requiring insulin injections twice daily",
  healthStatus: "Diabetic",
};

const sizeOptions = [
  { value: "large", label: "Large" },
  {
    value: "medium",
    label: "Medium",
  },
  {
    value: "small",
    label: "Label",
  },
];
const genderOptions = [
  { value: "male", label: "Male" },
  {
    value: "female",
    label: "Female",
  },
];

const NewPetPage = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [files, setFiles] = useState<any>([]);
  const [createPet] = useCreatePetMutation();

  const handleSubmit = async (values: FieldValues) => {
    values.age = Number(values.age);
    const imageUpload = await uploadToImageBB(files);
    values.photos = imageUpload.imageUrls;
    // return;
    const data = convertToFormData(values);

    try {
      const result = await createPet(data).unwrap();
      console.log(result, "xxx");
      if (result.success) {
        setButtonDisabled(true);
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
