import Features from "@/components/UI/Home/Features";
import HeroSection from "@/components/UI/Home/HeroSection";
import PetSection from "@/components/UI/Home/PetSection";
import Testimonial from "@/components/UI/Home/Testimonial";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <PetSection />
      <Testimonial />
    </>
  );
};

export default page;
