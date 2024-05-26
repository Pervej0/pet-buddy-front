"use client";

import GlobalForm from "@/components/Form/GlobalForm";
import GlobalInput from "@/components/Form/GlobalInput";
import Loader from "@/components/Shared/Loader";
import { useGetMyProfileQuery } from "@/redux/api/user/userApi";
import { getUserInfo } from "@/services/auth.services";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { JwtPayload } from "jwt-decode";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { boolean } from "zod";

const AdoptionRequestPage = ({ params }: { params: { petId: string } }) => {
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const userInfo = getUserInfo() as JwtPayload;
  // console.log(userInfo);
  const { data: user, isLoading } = useGetMyProfileQuery({});

  if (isLoading) {
    return <Loader />;
  }

  const handleSubmit: SubmitHandler<FieldValues> = async (
    values: FieldValues
  ) => {
    values.termsAndConditions = termsAndConditions;
    values.adoptionDate = dayjs(new Date()).toISOString();
    console.log(values);
    return;
    try {
      const result = await createSpecialty(data).unwrap();
      if (result.data.id) {
        toast.success(result.message);
        setOpen(false);
      }
    } catch (err: any) {
      toast.error(err.data.message);
      console.log(err);
    }
  };

  const defaultValues = {
    name: user.data.name,
    email: user.data.email,
    petId: params.petId,
  };

  return (
    <Box my={2}>
      <Container>
        <Typography variant="h6" component="h6" mt={5}>
          Request form for your pet buddy{" "}
        </Typography>
        <GlobalForm
          sx={{ padding: "30px" }}
          defaultValues={defaultValues}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item md={6}>
              <GlobalInput name="name" label="Name" required fullWidth={true} />
            </Grid>
            <Grid item md={6}>
              <GlobalInput
                name="email"
                label="email"
                required
                fullWidth={true}
              />
            </Grid>
            <Grid item md={6}>
              <GlobalInput
                name="phone"
                label="Phone"
                required
                fullWidth={true}
              />
            </Grid>
            <Grid item md={6}>
              <GlobalInput
                name="petId"
                label="Pet Id"
                disabled={true}
                required
                fullWidth={true}
              />
            </Grid>
            <Grid item md={6}>
              <GlobalInput
                name="petOwnershipExperience"
                label="Pet Ownership Experience"
                size="medium"
                required
                fullWidth={true}
              />
            </Grid>
          </Grid>
          <Typography>
            Accept the terms and condition{" "}
            <Checkbox
              defaultChecked={termsAndConditions}
              onChange={(e: any, value) => setTermsAndConditions(value)}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
            />
          </Typography>

          <Button sx={{ mt: 2 }} type="submit">
            Submit
          </Button>
        </GlobalForm>
      </Container>
    </Box>
  );
};

export default AdoptionRequestPage;
