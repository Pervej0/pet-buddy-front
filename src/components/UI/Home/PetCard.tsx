import { TPet } from "@/types/common.type";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";

const PetCard = ({ petCard }: { petCard: TPet }) => {
  console.log(petCard, "xx");
  return (
    <Card style={{ paddingBottom: "16px" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={petCard.photos[0]}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {petCard.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {petCard.description.slice(0, 80)}
        </Typography>
        <Stack my={1} direction="row" justifyContent="space-between">
          <Typography variant="body2" color="text.secondary">
            Age: {petCard.age}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Breed: {petCard.breed}
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          <LocationOnIcon /> {petCard.location}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`pets/${petCard.id}`} className="pl-2">
          Learn More
        </Link>
      </CardActions>
    </Card>
  );
};

export default PetCard;
