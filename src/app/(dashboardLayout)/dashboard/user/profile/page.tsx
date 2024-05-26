"use client";

import Loader from "@/components/Shared/Loader";
import Profile from "@/components/Shared/Profile";
import { useGetMyProfileQuery } from "@/redux/api/user/userApi";
import React from "react";

const ProfilePage = () => {
  const { data: myProfile, isLoading } = useGetMyProfileQuery({});

  if (isLoading) {
    return <Loader />;
  }
  console.log(myProfile, "Xxx");

  return (
    <>
      <Profile userProfile={myProfile.data} />
    </>
  );
};

export default ProfilePage;
