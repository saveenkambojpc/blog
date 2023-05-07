import { async } from "@firebase/util";
import { Box, Skeleton, Typography } from "@mui/material";
import { onValue } from "firebase/database";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dbCollectionRef } from "../api";
import { getFolderItemsReference, getPathReference } from "../api/upload";
import BlogCardsContainer from "../components/Blogs/BlogCardsContainer";
import Banner from "../components/Home/Banner";
// import BlogCards from "../components/Home/BlogCards";
import { storage } from "../misc/firebaseConfig";
import { theme } from "../misc/theme";
import { set_blogs_obj } from "../redux/features/blogs";
import helper, { set_is_loading } from "../redux/features/helper";

const Home = () => {
  const dispatch = useDispatch();
  const blogsState = useSelector((store) => store.blogs);
  const helperState = useSelector((store) => store.helper);

  const fetchBlogs = useCallback(() => {
    dispatch(set_is_loading(true));
    onValue(dbCollectionRef("blogs"), (snapshot) => {
      dispatch(set_is_loading(false));
      if (snapshot.val()) {
        const data = snapshot.val();
        dispatch(set_blogs_obj(data));
      }
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
          {Object.keys(blogsState.blogs_obj).length > 0 ? (
            <BlogCardsContainer limit={6} />
          ) : helperState.is_loading ? (
            <Box width={320}>
              <Skeleton variant="rectangular" height={160} />

              <Box sx={{ pt: 0.5 }}>
                <Skeleton width="60%" />
                <Skeleton />
                <Skeleton width="80%" />
              </Box>
            </Box>
          ) : (
            <div> No Blog Found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
