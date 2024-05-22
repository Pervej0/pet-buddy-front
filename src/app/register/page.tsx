"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import GlobalForm from "@/components/Form/GlobalForm";
import GlobalInput from "@/components/Form/GlobalInput";
// import { loginUser } from "@/services/actions/loginUser";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.services";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export interface TRegisterInput {
  password: string;
  patient: {
    name: string;
    email: string;
    contactNumber: string;
    address: string;
  };
}

const registerSchema = z.object({
  password: z.string().min(6, "Must be at least 6 characters"),
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email address!"),
});

export const defaultValues = {
  password: "",
  name: "",
  email: "",
};

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister: SubmitHandler<FieldValues> = async (
    data: FieldValues
  ) => {
    console.log(data);
    // const userInfo = await registerPatient(data);
    return;
    if (userInfo.success) {
      const userLogin: FieldValues = await loginUser({
        email: data.patient.email,
        password: data.password,
      });
      if (userLogin.success) {
        toast.success("User logged in successfully!");
        router.push("/dashboard");
        storeUserInfo(userLogin.data.accessToken);
      }
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <Container>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            height: "100vh",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={assets.images.auth.registerBanner}
              alt="Login banner"
              height={500}
              width={500}
            />
          </Box>
          <Box
            sx={{
              padding: 4,
              height: "100%",
              width: 500,
              borderLeft: "1px solid rgba(0,0,0,.2)",
            }}
          >
            <Box mb={4}>
              <Box
                sx={{
                  //   display: "flex",
                  flexDirection: "column",
                  //   justifyContent: "center",
                  //   textAlign: "center",
                  gap: "5px 0px",

                  "& img": {
                    margin: "0 auto",
                  },
                }}
              >
                <Image
                  src={assets.images.brand}
                  alt="login logo"
                  width="200"
                  height="200"
                />
              </Box>
              <Typography
                textAlign="left"
                component="h5"
                variant="h5"
                fontWeight={700}
              >
                Create a New User
              </Typography>
            </Box>
            <GlobalForm
              onSubmit={handleRegister}
              resolver={zodResolver(registerSchema)}
              defaultValues={defaultValues}
            >
              <GlobalInput
                name="name"
                fullWidth={true}
                size="small"
                label="Name"
              />
              <Grid container spacing={2} mt={1} mb={3}>
                <Grid item md={6} sm={12} xs={12}>
                  <GlobalInput
                    name="email"
                    type="email"
                    fullWidth={true}
                    size="small"
                    label="Email"
                  />
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                  <GlobalInput
                    name="password"
                    fullWidth={true}
                    type="password"
                    size="small"
                    label="Password"
                  />
                </Grid>
              </Grid>

              <Button type="submit" variant="contained">
                Submit
              </Button>
            </GlobalForm>
            <Typography variant="body2" textAlign="left" mt={1}>
              Do you already have any account?{" "}
              <Link href="/login" style={{ color: "#000000", fontWeight: 600 }}>
                Login
              </Link>
            </Typography>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default RegisterPage;
