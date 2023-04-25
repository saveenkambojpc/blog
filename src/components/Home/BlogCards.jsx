import React from "react";
import { useSelector } from "react-redux";
import ImgMediaCard from "./ImgMediaCard";

const BlogCards = () => {
  const blogsState = useSelector((store) => store.blogs);
  return (
    <div className="flex flex-wrap justify-between">
      {Object.values(blogsState.blog_arr).map((blog, i) => (
        <ImgMediaCard key={i} blog={blog} />
      ))}
    </div>
  );
};

export default BlogCards;
