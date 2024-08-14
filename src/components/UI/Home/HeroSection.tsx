import assets from "@/assets";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: { md: 1, sm: 8, xs: 12 },
        backgroundImage:
          "url(https://img.freepik.com/free-vector/hand-drawn-abstract-floral-background_23-2150735236.jpg)",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Box
          sx={{
            minHeight: "83vh",
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px 0px",
          }}
        >
          <Box>
            <Typography
              className="font-serif"
              sx={{
                fontSize: { md: "42px", sm: "28px", xs: "24px" },
                fontWeight: 700,
              }}
              variant="h1"
              component="h1"
            >
              Save Teddy Make <br /> Pet Buddy
            </Typography>
            <Typography
              className="font-sans"
              my={2}
              variant="h6"
              component="h6"
              fontSize={18}
              fontWeight={400}
            >
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
