import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import "react-multi-carousel/lib/styles.css";
import React, { ReactNode } from "react";

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default PrivateLayout;
