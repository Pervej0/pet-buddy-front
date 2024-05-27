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
    about: {
      missionImage: require("./about/mission.png"),
      team1: require("./about/team-1.avif"),
      team2: require("./about/team-2.avif"),
      team3: require("./about/team-3.avif"),
      pervej: require("./about/Md Pervej Hossain.jpg"),
    },
  },
};

export default assets;
