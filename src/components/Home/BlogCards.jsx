import React from "react";
import { useSelector } from "react-redux";
import ImgMediaCard from "./ImgMediaCard";

const BlogCards = () => {
  const blogsState = useSelector((store) => store.blogs);
  return (
    <div className="flex flex-wrap justify-center md:justify-between gap-3">
      {Object.values(blogsState.blogs_obj).map((blog, i) => (
        <ImgMediaCard key={i} blog={blog} />
      ))}
    </div>
  );
};

export default BlogCards;
