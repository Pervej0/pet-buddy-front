import { ISidebarItems } from "@/types/common.type";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuItems = ({ sidebarItem }: { sidebarItem: ISidebarItems }) => {
  const location = usePathname();
  const currentPath = `/dashboard/${sidebarItem.path}`;
  return (
    <>
      <Link href={currentPath}>
        <ListItem
          disablePadding
          sx={{
            ...(location === currentPath
              ? {
                  borderRight: "3px solid #99BF0E",
                  "& svg": {
                    color: "#99BF0E",
                  },
                }
              : {}),
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              {sidebarItem.icon && <sidebarItem.icon />}
            </ListItemIcon>{" "}
            <ListItemText primary={sidebarItem.title} />
          </ListItemButton>
        </ListItem>
      </Link>
    </>
  );
};

export default MenuItems;
