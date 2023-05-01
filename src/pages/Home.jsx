import { Box, Skeleton, Typography } from "@mui/material";
import { onValue } from "firebase/database";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dbCollectionRef } from "../api";
import Banner from "../components/Home/Banner";
import BlogCards from "../components/Home/BlogCards";
import { theme } from "../misc/theme";
import { set_blog_arr } from "../redux/features/blogs";
import { set_is_loading } from "../redux/features/helper";

const Home = () => {
  const dispatch = useDispatch();
  const blogsState = useSelector((store) => store.blogs);

  const fetchBlogs = useCallback(() => {
    dispatch(set_is_loading(true));
    onValue(dbCollectionRef("blogs"), (snapshot) => {
      const data = snapshot.val();
      dispatch(set_is_loading(false));
      dispatch(set_blog_arr(data));
      console.log(data);
    });
  }, [dispatch]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

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
          {console.log(blogsState.blog_arr)}
          {Object.keys(blogsState.blog_arr).length > 0 ? (
            <BlogCards />
          ) : (
            <Box width={320}>
              <Skeleton variant="rectangular" height={160} />

              <Box sx={{ pt: 0.5 }}>
                <Skeleton width="60%" />
                <Skeleton />
                <Skeleton width="80%" />
              </Box>
            </Box>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
