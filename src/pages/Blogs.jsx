import { Typography } from "@mui/material";
import React from "react";
import BlogCardsContainer from "../components/Blogs/BlogCardsContainer";

const Blogs = () => {
  return (
    <div>
      <div className="my-6">
        <Typography variant="h4">Blogs</Typography>
        <div className="mt-6">
          <BlogCardsContainer />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
