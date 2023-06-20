import {
  Button,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateData, writeData } from "../api";
import CustomTextField from "../components/helper/CustomTextField";
import { styles } from "../css/style";
import { guidGenerator, timeSince } from "../misc/helper";
import { set_blogs_obj } from "../redux/features/blogs";
import { theme } from "../misc/theme";
import {
  FavoriteBorderOutlined,
  FavoriteOutlined,
  HeadsetSharp,
  Send,
} from "@mui/icons-material";

const BlogPage = () => {
  const { id: blog_id } = useParams();
  const blogsState = useSelector((store) => store.blogs);
  const [commentValue, setCommentValue] = useState("");
  const dispatch = useDispatch();
  console.log("id is ", blog_id, blogsState.blogs_obj[blog_id]);
  const helperState = useSelector((store) => store.helper);

  

  // const { heading, description, body, image_link, comments } =
  //   blogsState.blogs_obj[blog_id];
  // window.scrollTo(0, 0);

  function handleAddComment() {
    const comment_id = guidGenerator();

    const data = {
      message: commentValue,
      uid: JSON.parse(sessionStorage.getItem("auth")).uid,
      uname: JSON.parse(sessionStorage.getItem("auth")).displayName,
      created_at: new Date().toString(),
      comment_id,
    };
    writeData("blogs", `${blog_id}/comments/${comment_id}`, data, () => {});
  }

  if (helperState.is_loading) {
    return (
      <div className="flex justify-center items-center h-20">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="my-6">
      <div className="md:flex pb-3 mt-6 pt-6">
        <div className="w-full">
          <Typography variant="h3">
            {blogsState.blogs_obj[blog_id]?.heading}
          </Typography>
          <div className="my-3">
            <Typography variant="h5" className="">
              {blogsState.blogs_obj[blog_id]?.description}
            </Typography>
          </div>
        </div>
      </div>
      <div className="w-full my-3 flex justify-center m-auto">
        <img src={blogsState.blogs_obj[blog_id]?.image_link} className="h-80" />
      </div>

      <div className="md:mt-6 mt-3">
        <Typography variant="body">
          {blogsState.blogs_obj[blog_id]?.body}
        </Typography>
      </div>

      <hr className="my-6" />

      <div className="">
        <Typography variant="h4">Comments</Typography>

        <div className="shadow rounded-lg my-3 overflow-scroll p-3 scrollbar-hide h-[300px]">
          <div className="flex flex-col gap-3">
            {blogsState.blogs_obj[blog_id]?.comments &&
              Object.values(blogsState.blogs_obj[blog_id]?.comments).map(
                (comment) => {
                  return (
                    <div className="bg-slate-100 p-1 rounded-lg flex justify-between">
                      <div className="flex">
                        <div className=" flex justify-center items-center bg-slate-400 rounded-full h-12 w-12">
                          <Typography color={"white"}>
                            {comment.uname[0]}
                          </Typography>
                        </div>
                        <div className="px-3">
                          <Typography
                            color={theme.palette.colors.text60}
                            fontSize={12}
                            variant="subtitle1"
                          >
                            {comment.uname} &#x2022;{" "}
                            {timeSince(new Date(comment.created_at))} ago
                          </Typography>

                          <Typography>{comment.message}</Typography>
                        </div>
                      </div>

                      <div>
                        <IconButton>
                          <FavoriteBorderOutlined />
                        </IconButton>
                      </div>
                    </div>
                  );
                }
              )}
          </div>
        </div>

        {JSON.parse(sessionStorage.getItem("auth")) ? (
          <div className="">
            <CustomTextField
              value={commentValue}
              onChange={(e) => setCommentValue(e.target.value)}
              fullWidth
              placeholder={"Add a commenet here"}
              multiline
            />
            <div className="mt-3">
              <Button
                onClick={handleAddComment}
                disabled={!commentValue}
                variant="filled"
                sx={styles.filled_button}
                endIcon={<Send />}
              >
                Submit
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="p-2">Login to Add Comment</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
