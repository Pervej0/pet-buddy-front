import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image";
import assets from "@/assets";

const TeamCard = ({ img, name }: any) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Image
          height="240"
          src={img}
          width={300}
          alt="green iguana"
          style={{ objectFit: "cover", width: "100%" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            {name}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={2} mt={2}>
            <CallIcon style={{ fontSize: "20px" }} />
            <Typography variant="body2">+880 16** 4457**</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2} mt={1}>
            <EmailIcon style={{ fontSize: "20px" }} />
            <Typography variant="body2">team1@buddy.org</Typography>
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TeamCard;
