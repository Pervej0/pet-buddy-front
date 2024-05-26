import HeroSection from "@/components/UI/Home/HeroSection";
import PetSection from "@/components/UI/Home/PetSection";
import { Box, Container } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <PetSection />
    </>
  );
};

export default page;
