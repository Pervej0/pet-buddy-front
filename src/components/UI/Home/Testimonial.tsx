"use client";
import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Testimonial = () => {
  return (
    <>
      <Box
        my={4}
        sx={{
          backgroundColor: "#eef3fc",
          padding: "50px 0px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "1040px",
            width: "100%",
            padding: "15px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              alignSelf: "flex-end",
              alignItems: "center",
              " @media(max-width:479px)": {
                flexDirection: "column",
                justifyContent: "center",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  height: "190px",
                  width: "190px",
                  borderRadius: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "7px solid #98BE0D",
                  outlineOffset: "5px",
                  outline: "3px dashed black",
                }}
              >
                <Image
                  src="https://i.ibb.co/MCr0yvy/Md-Pervej-Hossain.png"
                  alt="Md Pervej Hossain"
                  style={{ borderRadius: "100px" }}
                  height={180}
                  width={180}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "var(--theme-font-family)",
                  color: "var(--theme-color-base)",
                  letterSpacing: "0.9px",
                  marginTop: "20px",
                  "&&": { marginTop: "20px" },
                }}
              >
                Pervej
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontFamily: "var(--theme-font-family)",
                  color: "var(--base-medium-dark)",
                  letterSpacing: "0.8px",
                  lineHeight: "20px",
                  fontSize: "15px",
                }}
              >
                Dev Team
              </Typography>
            </Box>
            <Card
              sx={{
                borderRadius: "calc(8px*0.5)",
                boxShadow: "0px 0px calc(5px * 0) gray",
                fontFamily: "var(--theme-font-family)",
                display: "flex",
                maxWidth: "400px",
                width: "100%",
                alignItems: "center",
                backgroundColor: "#e6ff8e",
                flexDirection: "column",
                padding: "25px 15px",
                gap: "15px",
                border: "none",
                boxSizing: "border-box",
              }}
            >
              <Image
                src="https://purecodestorageprod.blob.core.windows.net/images-svg/TeamSection_ffc95144-f550-42eb-aa53-7f4331de0ebb.svg"
                style={{ alignSelf: "flex-start" }}
                alt=""
                width={45}
                height={45}
              />
              <Box sx={{ margin: "0px 18px" }}>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "var(--theme-font-family)",
                    color: "var(--base-medium-dark)",
                    letterSpacing: "0.8px",
                    lineHeight: "20px",
                    textAlign: "center",
                    fontSize: "15px",
                  }}
                >
                  It truly is the continuous opportunities that PureCode offers
                  that’s kept me growing and has contributed to my success here
                  at PureCode.
                </Typography>
              </Box>
              <Image
                src="https://purecodestorageprod.blob.core.windows.net/images-svg/TeamSection_471ea3e0-11b3-4300-b89c-37dff1ea380e.svg"
                style={{ alignSelf: "flex-end" }}
                alt=""
                width={45}
                height={45}
              />
            </Card>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              gap: "30px",
              alignSelf: "flex-start",
              alignItems: "center",
              " @media(max-width:479px)": {
                flexDirection: "column",
                justifyContent: "center",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  height: "190px",
                  width: "190px",
                  borderRadius: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "7px solid #98BE0D",
                  outlineOffset: "5px",
                  outline: "3px dashed black",
                }}
              >
                <Image
                  src="https://objectstorage.me-dubai-1.oraclecloud.com/n/axwzijd5v1vn/b/DSL_IMAGES/o/IMAGE/ca247c38-776d-4595-8335-e2043af2ddf8-freepik-export-20240425125712NXUe.png"
                  style={{ borderRadius: "100px" }}
                  alt="Md Pervej Hossain"
                  height={180}
                  width={180}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "var(--theme-font-family)",
                  color: "var(--theme-color-base)",
                  letterSpacing: "0.9px",
                  marginTop: "20px",
                  "&&": { marginTop: "20px" },
                }}
              >
                Jenny
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontFamily: "var(--theme-font-family)",
                  color: "var(--base-medium-dark)",
                  letterSpacing: "0.8px",
                  lineHeight: "20px",
                  fontSize: "15px",
                }}
              >
                AI Research
              </Typography>
            </Box>
            <Card
              sx={{
                borderRadius: "calc(8px*0.5)",
                boxShadow: "0px 0px calc(5px * 0) gray",
                fontFamily: "var(--theme-font-family)",
                display: "flex",
                maxWidth: "400px",
                width: "100%",
                alignItems: "center",
                backgroundColor: "#e6ff8e",
                flexDirection: "column",
                padding: "25px 15px",
                gap: "15px",
                border: "none",
                boxSizing: "border-box",
              }}
            >
              <Image
                src="https://purecodestorageprod.blob.core.windows.net/images-svg/TeamSection_a4b30f68-d66e-4b4c-9f5a-040869297f57.svg"
                style={{ alignSelf: "flex-start" }}
                alt=""
                width={45}
                height={45}
              />
              <Box sx={{ margin: "0px 18px" }}>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "var(--theme-font-family)",
                    color: "var(--base-medium-dark)",
                    letterSpacing: "0.8px",
                    lineHeight: "20px",
                    fontSize: "15px",
                    textAlign: "center",
                  }}
                >
                  Purecode conducts rigorous code reviews, providing developers
                  with insightful feedback to optimize performance.
                </Typography>
              </Box>
              <Image
                src="https://purecodestorageprod.blob.core.windows.net/images-svg/TeamSection_9e1d3f8e-e9cc-4411-996c-3a5e692bad79.svg"
                style={{ alignSelf: "flex-end" }}
                alt=""
                width={45}
                height={45}
              />
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Testimonial;
