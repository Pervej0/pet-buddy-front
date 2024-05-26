//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ReviewsIcon from "@mui/icons-material/Reviews";
import TryIcon from "@mui/icons-material/Try";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { USER_ROLE } from "@/constant/common";
import { ISidebarItems, TUserRole } from "@/types/common.type";

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
      path: `change-password`,
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
          title: "Manage User",
          path: `${role}/users`,
          icon: GroupIcon,
        },
        {
          title: "Change Role",
          path: `${role}/user`,
          icon: TryIcon,
        },
        {
          title: "Adoption Request",
          path: `${role}/adoption-request`,
          icon: BookOnlineIcon,
        }
      );
      break;
    case USER_ROLE.USER:
      menus.push(
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: BookOnlineIcon,
        },
        {
          title: "Prescriptions",
          path: `${role}/prescriptions`,
          icon: ReceiptLongIcon,
        },
        {
          title: "Payment History",
          path: `${role}/payment-history`,
          icon: AttachMoneyIcon,
        }
      );
    default:
      break;
  }

  return [...menus, ...defaultMenus];
};

export default sidebarItems;