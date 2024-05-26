import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <Box mt={10}>
      <Image
        style={{ margin: "0 auto" }}
        src="https://as1.ftcdn.net/v2/jpg/03/04/76/60/1000_F_304766094_oGfiNaNzXOXli1xFLLeqYgZjBABsUB29.jpg"
        alt="welcome image"
        width={700}
        height={700}
      />
    </Box>
  );
};

export default page;
