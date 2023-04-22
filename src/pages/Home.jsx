import { Typography } from "@mui/material";
import React from "react";
import Banner from "../components/Home/Banner";
import { theme } from "../misc/theme";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center py-10">
        <Typography
          variant="h6"
          fontWeight={500}
          color={theme.palette.colors.secondary}
        >
          The Blog
        </Typography>
        <Typography
          color={theme.palette.colors.primary}
          variant="h2"
          fontWeight={600}
        >
          Writings from our team
        </Typography>
        <Typography variant="h6" color={theme.palette.colors.teritary}>
          The latest industry news, interviews, technology and resources.
        </Typography>
      </div>


      <Banner />
    </div>
  );
};

export default Home;
