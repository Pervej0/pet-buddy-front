//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import TryIcon from "@mui/icons-material/Try";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { USER_ROLE } from "@/constant/common";
import { ISidebarItems, TUserRole } from "@/types/common.type";
import PetsIcon from "@mui/icons-material/Pets";

const sidebarItems = (role: TUserRole) => {
  const menus: ISidebarItems[] = [];
  const defaultMenus = [
    {
      title: "Profile",
      path: `${role}/profile`,
      icon: PersonIcon,
    },
    {
      title: "Change Password",
      path: `${role}/change-password`,
      icon: KeyIcon,
    },
  ];
  switch (role) {
    case USER_ROLE.ADMIN:
      menus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Change Role",
          path: `${role}/change-role`,
          icon: TryIcon,
        },
        {
          title: "Manage User",
          path: `${role}/manage-users`,
          icon: GroupIcon,
        },
        {
          title: "New Pet",
          path: `${role}/new-pet`,
          icon: ReceiptLongIcon,
        },
        {
          title: "Manage Pets",
          path: `${role}/manage-pets`,
          icon: PetsIcon,
        },
        {
          title: "Manage Requests",
          path: `${role}/adoption-requests`,
          icon: BookOnlineIcon,
        }
      );
      break;
    case USER_ROLE.USER:
      menus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "My Request",
          path: `${role}/my-adoption-request`,
          icon: BookOnlineIcon,
        }
      );
    default:
      break;
  }

  return [...menus, ...defaultMenus];
};

export default sidebarItems;
