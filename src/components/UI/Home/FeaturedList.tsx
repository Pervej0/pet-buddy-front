import React from "react";
import { Box, Typography } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CategoryIcon from "@mui/icons-material/Category";

const FeaturedList = () => {
  const featuredItems = [
    {
      id: "0001",
      title: "Personalized Pet Profiles",
      description:
        "Create pet profiles to track health, diet, and activity for personalized care.",
      icon: PetsIcon,
    },
    {
      id: "0002",
      title: "Expert Pet Advice",
      description:
        "Get expert advice on training and nutrition to make informed decisions for your pet’s well-being.",
      icon: HourglassTopIcon,
    },
    {
      id: "0003",
      title: "Interactive Pet Tracker",
      description:
        "Track your pet’s activities and location to ensure their safety and peace of mind.",
      icon: LocationSearchingIcon,
    },
    {
      id: "0004",
      title: "Customizable Feeding Schedules",
      description:
        "Set feeding reminders to maintain consistent nutrition for your pet.",
      icon: ScheduleIcon,
    },
  ];

  return (
    <>
      {featuredItems?.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            flexDirection: { sm: "row", xs: "column" },
            alignItems: "center",
            gap: "10px 10px",
          }}
        >
          <Box sx={{ width: "10%" }}>
            <Box
              sx={{
                height: 50,
                width: 50,
                bgcolor: "#a9cb1e",
                display: "flex",
                color: "#ffffff",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50px",
              }}
            >
              {<item.icon />}
            </Box>
          </Box>
          <Box
            sx={{ width: "90%", textAlign: { sm: "initial", xs: "center" } }}
          >
            <Typography
              variant="h6"
              component="h6"
              fontSize={18}
              fontWeight="700"
              className="font-serif"
            >
              {item.title}
            </Typography>
            <Typography component="p" fontSize={17} fontFamily="font-sans">
              {item.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default FeaturedList;
