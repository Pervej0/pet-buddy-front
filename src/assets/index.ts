import { register } from "module";
import { Content } from "next/font/google";

const assets = {
  images: {
    brand: require("./brand/logo.png"),
    auth: {
      loginBanner: require("./auth/login-banner.png"),
      registerBanner: require("./auth/register-banner.png"),
    },
  },
};

export default assets;
