import { removeUser } from "@/services/auth.services";

const logOutUser = (router: any) => {
  removeUser();
  router.push("/login");
  router.refresh();
};

export default logOutUser;
