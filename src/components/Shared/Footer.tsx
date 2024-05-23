import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import linkedIcon from "@/assets/landing_page/linkedin.png";
import assets from "@/assets";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box bgcolor="#273746" py={5}>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={4}
          pb={2}
        >
          <Box>
            <Stack direction="row" alignItems="center" spacing={2}>
              <LocationOnIcon style={{ color: "white", fontSize: "20px" }} />
              <Typography color="#ffffff">
                North Badda-1212, <br /> Dhaka Bangladesh
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2} mt={2}>
              <CallIcon style={{ color: "white", fontSize: "20px" }} />
              <Typography color="#ffffff">
                +880 16** 4457** <br /> +880 16** 4457**
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2} mt={2}>
              <EmailIcon style={{ color: "white", fontSize: "20px" }} />
              <Typography color="#ffffff">petbuddy@buddy.org</Typography>
            </Stack>
          </Box>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={4}
          >
            <Typography color="#ffffff" component={Link} href="/consultation">
              About
            </Typography>
            <Typography color="#ffffff">Contact Us</Typography>
            <Typography color="#ffffff">Privacy Policy</Typography>
            <Typography color="#ffffff">Terms & Conditions</Typography>
            <Typography color="#ffffff">Support</Typography>
          </Stack>
          <Stack direction="row" gap={2} justifyContent="center" py={3}>
            <Image
              src={assets.images.icon.facebook}
              width={30}
              height={30}
              alt="facebook"
            />
            <Image
              src={assets.images.icon.instagram}
              width={30}
              height={30}
              alt="instagram"
            />
            <Image
              src={assets.images.icon.twitter}
              width={30}
              height={30}
              alt="twitter"
            />
            <Image
              src={assets.images.icon.linkedin}
              width={30}
              height={30}
              alt="linkedin"
            />
          </Stack>
        </Stack>

        <div className="border-b-[1px] border-dashed border-[]"></div>
        <Stack
          direction="row"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography component="p" color="white">
            &copy;2024 petBuddy. All Rights Reserved.
          </Typography>

          <Typography component="p" color="white">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
