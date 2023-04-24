import { Button, Card, Chip, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ImgMediaCard from "./ImgMediaCard";

const BlogCards = () => {
  const blogsState = useSelector((store) => store.blogs);
  return (
    <div className="flex flex-wrap justify-between  ">
      {blogsState.blog_arr.map((blog) => (
        <ImgMediaCard blog={blog} />
      ))}
    </div>
  );
};

export default BlogCards;
