import {
  Box,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const PetSection = () => {
  return (
    <Box my={5}>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5" component="h5" fontWeight={500}>
            See All Pets Here
          </Typography>
          <TextField label="Search pets" size="small" />
        </Stack>
        <Grid container>
          <Grid item></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PetSection;
