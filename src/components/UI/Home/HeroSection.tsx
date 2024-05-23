import assets from "@/assets";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: { md: 4, sm: 8, xs: 12 },
      }}
    >
      <Container>
        <Box
          sx={{
            height: "90vh",
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px 0px",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { md: "45px", sm: "30px", xs: "26px" },
                fontWeight: 700,
              }}
              variant="h1"
              component="h1"
            >
              Save Teddy Make <br /> Pet Buddy
            </Typography>
            <Typography my={2} variant="h6" component="h6">
              We are One of the reliable brand to have pet in your home
            </Typography>
            <Button>Read More</Button>
          </Box>
          <Box>
            <Image
              src={assets.images.home.homeBanner}
              alt="Pet and Human"
              height={500}
              width={500}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
