import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { writeData } from "../api";
import CustomTextField from "../components/helper/CustomTextField";
import { styles } from "../css/style";
import { guidGenerator } from "../misc/helper";

const BlogPage = () => {
  const { id: blog_id } = useParams();
  const masterState = useSelector((store) => store.blogs);
  const [commentValue, setCommentValue] = useState("");

  const { heading, description, body, image_link } =
    masterState.blogs_obj[blog_id];
  // window.scrollTo(0, 0);

  function handleAddComment() {
    console.log(commentValue);
  }
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

      <div className="">
        <Typography variant="h4">Comments</Typography>

        <div className="border rounded-lg my-3 overflow-scroll p-3 scrollbar-hide h-[300px]">
          <div className="flex flex-col gap-3">
            <div className="bg-slate-100 rounded-lg">
              <div className="bg-slate-400 rounded-full h-12 w-12"></div>
              <div className=""></div>
            </div>
            <div className="bg-slate-100 rounded-lg">
              <div className="bg-slate-400 rounded-full h-12 w-12"></div>
              <div className=""></div>
            </div>
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
