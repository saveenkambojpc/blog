import React from "react";
import { useSelector } from "react-redux";
import ImgMediaCard from "./ImgMediaCard";

export default function BlogCardsContainer({ limit }) {
  const blogsState = useSelector((store) => store.blogs);
  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-3">
      {Object.values(blogsState.blogs_obj)
        .filter((item, index) => index < limit || !limit)
        .map((blog, i) => {
          return <ImgMediaCard key={i} blog={blog} />;
        })}
    </div>
  );
}
