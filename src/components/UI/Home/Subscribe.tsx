import {
  Box,
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-gray-100 my-20">
      <Container>
        <Box
          sx={{
            minHeight: "50vh",
            display: "flex",
            flexDirection: { md: "row", xs: "column " },
            gap: { xs: "30px 0px" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              background:
                "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.3)),url(https://images.unsplash.com/photo-1712746438645-eabe483784be) no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box
              sx={{
                minHeight: "50vh",
                width: "100vh",
                padding: "10px 15px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                color="white"
                className="font-serif"
                variant="h3"
                component="h3"
              >
                Get Weekly Advice From Our Counselor
              </Typography>
              <Typography mt={3} component="h6" variant="h6" color="white">
                Subscribe Now &gt;
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: { md: "50%" }, padding: { md: "0px 30px" } }}>
            <TextField
              label="Enter your email"
              type="email"
              size="medium"
              fullWidth={true}
              required={true}
              placeholder="Enter your email"
            />
            <Button sx={{ padding: "10px 35px", margin: "10px 0px" }}>
              Subscribe
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Subscribe;
