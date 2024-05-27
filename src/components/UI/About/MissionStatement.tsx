import assets from "@/assets";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const MissionStatement = () => {
  return (
    <Box py={4}>
      <Container>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item md={6} xs={12}>
            <Image
              src={assets.images.about.missionImage}
              alt="Mission Image"
              height={500}
              width={500}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="h5" component="h5" mb={2}>
              Mission Statement
            </Typography>
            <Typography variant="body1">
              At PetBuddy, our mission is to create a loving and supportive
              community for pets and their future families. We strive to connect
              pets in need of a forever home with compassionate adopters through
              a transparent and user-friendly platform. Our goal is to ensure
              every pet finds a safe, nurturing environment where they can
              thrive and bring joy to their new families. <br />
              <br />
              We are dedicated to promoting responsible pet ownership, providing
              resources and education to adopters, and advocating for the
              well-being of all animals. By working closely with shelters,
              rescue organizations, and the community, we aim to reduce the
              number of homeless pets and improve the lives of both pets and
              people.
              <br />
              <br />
              Together, we believe in making a difference, one paw at a time.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MissionStatement;
