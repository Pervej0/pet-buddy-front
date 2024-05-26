"use client";

import { List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import MenuItems from "./MenuItems";
import { getUserInfo } from "@/services/auth.services";
import { useEffect, useState } from "react";
import { TUserRole } from "@/types/common.type";
import sidebarItems from "@/utils/sidebarItem";

const DashboardSidebar = () => {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const { role } = getUserInfo() as any;
    setCurrentUser(role);
  }, []);

  return (
    <>
      <Stack direction="row" gap={1} px={2} py={2} component={Link} href="/">
        <Image
          src={assets.images.brand}
          alt="brand logo"
          width={40}
          height={40}
        />
        <Typography variant="h6" component="h6">
          PH Health Care
        </Typography>
      </Stack>
      <List>
        {sidebarItems(currentUser?.toLowerCase() as TUserRole)?.map(
          (item: any, index: number) => (
            <MenuItems key={index} sidebarItem={item} />
          )
        )}
      </List>
    </>
  );
};

export default DashboardSidebar;
