import GlobalForm from "@/components/Form/GlobalForm";
import GlobalInput from "@/components/Form/GlobalInput";
import GlobalSelect from "@/components/Form/GlobalSelect";
import { z } from "zod";
import { Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { Toaster, toast } from "sonner";
import {
  useCreatePetMutation,
  useUpdatePetMutation,
} from "@/redux/api/user/petsApi";
import { genderOptions, sizeOptions } from "@/constant/common";
import GlobalFullPageModal from "@/components/Shared/GlobalFullModal";
import convertToFormData from "@/utils/converToFormData";

type TModal = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedRow: any;
};

const PetFullViewModal = ({ open, setOpen, selectedRow }: TModal) => {
  const [updatePet] = useUpdatePetMutation();
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleSubmit = async (values: FieldValues) => {
    setButtonDisabled(true);
    values.age = Number(values.age);
    const data = { updatedData: { ...values }, id: selectedRow.id };
    try {
      const result = await updatePet(data).unwrap();
      if (result.data.id) {
        toast.success(result.message);
        setOpen(false);
        setButtonDisabled(false);
      }
    } catch (err: any) {
      toast.error(err.data.message);
      console.log(err);
    }
  };

  const defaultValues = {
    name: selectedRow.name,
    species: selectedRow.species,
    gender: selectedRow.gender,
    breed: selectedRow.breed,
    age: selectedRow.age,
    size: selectedRow.size,
    location: selectedRow.location,
    description: selectedRow.description,
    temperament: selectedRow.temperament,
    medicalHistory: selectedRow.medicalHistory,

    adoptionRequirements: selectedRow.adoptionRequirements,
    specialNeeds: selectedRow.specialNeeds,
    healthStatus: selectedRow.healthStatus,
  };

  return (
    <>
      <Toaster position="top-center" />
      <GlobalFullPageModal open={open} setOpen={setOpen}>
        <Container>
          <Typography variant="h5" component="h5" mb={3} mt={2}>
            Create a new Doctor
          </Typography>
          <GlobalForm onSubmit={handleSubmit} defaultValues={defaultValues}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <GlobalInput
                  name="name"
                  label="Name"
                  required
                  fullWidth={true}
                />
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
            </Grid>
            <Button disabled={buttonDisabled} sx={{ mt: 2 }} type="submit">
              Create
            </Button>
          </GlobalForm>
        </Container>
      </GlobalFullPageModal>
    </>
  );
};

export default PetFullViewModal;
