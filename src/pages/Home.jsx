import { async } from "@firebase/util";
import { Typography } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readData } from "../api";
import Banner from "../components/Home/Banner";
import BlogCards from "../components/Home/BlogCards";
import { theme } from "../misc/theme";
import { set_blog_arr } from "../redux/features/blogs";

const Home = () => {
  const dispatch = useDispatch();
  const [blogs, setBlogs] = React.useState([]);
  const fetchBlogs = useCallback(() => {
    readData("blog").then((data) => {
      dispatch(set_blog_arr(data));
    });
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, []);

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
      <div className="my-6">
        <Typography variant="h5">Popular Blogs</Typography>
        <div className="mt-6">
          <BlogCards />
        </div>
      </div>
    </div>
  );
};

export default Home;
