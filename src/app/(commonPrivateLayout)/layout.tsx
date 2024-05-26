"use client";

import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { getUserInfo } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const userInfo = getUserInfo();

  if (!userInfo) {
    return router.push("/login");
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default PrivateLayout;
