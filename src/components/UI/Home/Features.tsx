import React from "react";
import { Box, Container, Typography } from "@mui/material";
import FeaturedList from "./FeaturedList";

const Features = () => {
  return (
    <div className="bg-gray-100">
      <Container>
        <Box
          sx={{
            minHeight: "83vh",
            display: "flex",
            padding: { sm: "30px 0px", xs: "50px" },
            flexDirection: { md: "row", xs: "column" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: "15px",
          }}
        >
          <Box
            sx={{
              width: { md: "50%" },
              padding: "0px 15px 0px 0px",
            }}
          >
            <Typography
              className="text-3xl font-serif mb-3"
              variant="h1"
              component="h1"
              sx={{
                fontSize: { md: "35px", sm: "25px", xs: "22px" },
                fontWeight: 700,
              }}
            >
              The features that you <br />
              could utilize to ge benefited
            </Typography>
            <Typography
              sx={{ fontSize: "17px" }}
              component="p"
              className="font-sans"
            >
              we offer a range of features designed to enhance your pet’s
              well-being and make your life easier. Explore how our offerings
              can benefit you and your furry friends
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: "20px 0px" }}
          >
            <FeaturedList />
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Features;
