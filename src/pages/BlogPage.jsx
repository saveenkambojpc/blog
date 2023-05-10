import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateData, writeData } from "../api";
import CustomTextField from "../components/helper/CustomTextField";
import { styles } from "../css/style";
import { guidGenerator, timeSince } from "../misc/helper";
import { set_blogs_obj } from "../redux/features/blogs";

const BlogPage = () => {
  const { id: blog_id } = useParams();
  const blogsState = useSelector((store) => store.blogs);
  const [commentValue, setCommentValue] = useState("");
  const dispatch = useDispatch();

  const { heading, description, body, image_link, comments } =
    blogsState.blogs_obj[blog_id];
  // window.scrollTo(0, 0);
  console.log(comments);

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
  return (
    <div className="my-6">
      <div className="md:flex">
        <div className="w-1/2">
          <Typography variant="h2">{heading}</Typography>
          <Typography variant="h4">{description}</Typography>
          <Typography variant="body">{body}</Typography>
        </div>
        <div className="w-1/2 m-auto">
          <img src={image_link} />
        </div>
      </div>

      <div className="">
        <Typography variant="h4">Comments</Typography>

        <div className="border rounded-lg my-3 overflow-scroll p-3 scrollbar-hide h-[300px]">
          <div className="flex flex-col gap-3">
            {comments &&
              Object.values(comments).map((comment) => {
                return (
                  <div className="bg-slate-100 p-1 rounded-lg flex justify-between">
                    <div className="flex">
                      <div className=" flex justify-center items-center bg-slate-400 rounded-full h-12 w-12">
                        <Typography color={"white"}>{comment.uname[0]}</Typography>
                      </div>
                      <div className="px-3">
                        <Typography>{comment.message}</Typography>
                        <Typography fontSize={14} variant="subtitle1">
                          {comment.uname}
                        </Typography>
                      </div>
                    </div>

                    <Typography fontSize={14} color="peru">
                      {timeSince(new Date(comment.created_at))}
                    </Typography>
                  </div>
                );
              })}
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
