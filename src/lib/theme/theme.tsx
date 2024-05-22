"use client";
import { Fira_Sans, Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const firaSans = Fira_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "auto",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#9ABD0F",
    },
    secondary: {
      main: "#666F73",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "6px 24px",
          backgroundColor: "#9ABD0F",
          border: "1px solid #9ABD0F",
          color: "#ffffff",
          ":hover": {
            backgroundColor: "transparent",
            color: "#000000",
            border: "1px solid #6d6d6d",
          },
        },
      },
    },

    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },

  typography: {
    fontFamily: firaSans.style.fontFamily,
    h1: {
      fontFamily: roboto.style.fontFamily,
    },
    h2: {
      fontFamily: roboto.style.fontFamily,
    },
    h3: {
      fontFamily: roboto.style.fontFamily,
    },
    h4: {
      fontFamily: roboto.style.fontFamily,
    },
    h5: {
      fontFamily: roboto.style.fontFamily,
    },
    body1: {
      fontFamily: firaSans.style.fontFamily,
      color: "#0B1134",
    },
  },
});

export default theme;
