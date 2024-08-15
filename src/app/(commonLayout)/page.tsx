import Features from "@/components/UI/Home/Features";
import HeroSection from "@/components/UI/Home/HeroSection";
import PetSection from "@/components/UI/Home/PetSection";
import Subscribe from "@/components/UI/Home/Subscribe";
import Testimonial from "@/components/UI/Home/Testimonial";
import { CallToAction } from "@mui/icons-material";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <PetSection />
      <Testimonial />
      <Subscribe />
    </>
  );
};

export default page;
