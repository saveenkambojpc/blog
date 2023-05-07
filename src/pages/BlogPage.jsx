import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BlogPage = () => {
  const { id: blog_id } = useParams();
  const masterState = useSelector((store) => store.blogs);

  const { heading, description, body, image_link } =
    masterState.blogs_obj[blog_id];
  window.scrollTo(0, 0);

  return (
    <div className="my-6">
      <div className="flex">
        <div className="w-1/2">
          <Typography variant="h2">{heading}</Typography>
          <Typography variant="h4">{description}</Typography>
          <Typography variant="body">{body}</Typography>
        </div>
        <div className="w-1/2">
          <img src={image_link} />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
