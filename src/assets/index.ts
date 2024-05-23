import { register } from "module";
import { Content } from "next/font/google";

const assets = {
  images: {
    brand: require("./brand/logo.png"),
    auth: {
      loginBanner: require("./auth/login-banner.png"),
      registerBanner: require("./auth/register-banner.png"),
    },
    home: {
      homeBanner: require("./home/home-banner.png"),
    },
    icon: {
      facebook: require("./icon/facebook.png"),
      twitter: require("./icon/twitter.png"),
      linkedin: require("./icon/linkedin.png"),
      instagram: require("./icon/instagram.png"),
    },
  },
};

export default assets;
