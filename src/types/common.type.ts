import { USER_ROLE } from "@/constant/common";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface TPet {
  id: string;
  name: string;
  species: string;
  photos: string[];
  gender: string;
  breed: string;
  age: number;
  size: string;
  location: string;
  description: string;
  temperament: string;
  medicalHistory: string;
  adoptionRequirements: string;
  specialNeeds: string;
  healthStatus: string;
}

export interface ISidebarItems {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: ISidebarItems[];
}

export type TUserRole = keyof typeof USER_ROLE;

export type TGlobalModal = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  children: React.ReactNode;
};

export type TUserInfo = {
  email: string;
  exp: number;
  iat: number;
  role: string;
};
