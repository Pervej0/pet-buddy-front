import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

import TeamCard from "./TeamCard";
import assets from "@/assets";

const TeamSection = () => {
  return (
    <Box pt={2} mb={8}>
      <Container>
        <Typography variant="h5" component="h5" mb={5}>
          Our Team
        </Typography>
        <Grid
          container
          spacing={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item md={4} sm={6} xs={12}>
            <TeamCard name="Avon Smith" img={assets.images.about.team1} />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <TeamCard name="Md Salmon" img={assets.images.about.team2} />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <TeamCard name="Jason Roi" img={assets.images.about.team3} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamSection;
