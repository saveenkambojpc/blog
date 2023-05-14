import React from "react";
import Drawer from "../components/Admin/Drawer";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import BlogMaster from "../components/Master/BlogMaster";
import AddBlog from "./AddBlog";
import FeedbackMaster from "../components/Admin/FeedbackMaster";

export default function Admin() {
  const adminState = useSelector((store) => store.admin);

  return (
    <div>
      <div className="flex my-3">
        <Drawer />

        <div className="ml-6 w-full">
          <Typography className="py-3" variant="h4">
            Dashboard
          </Typography>

          {adminState.activeTab == 0 && (
            <>
              <Typography className="pb-3" variant="h5">
                Manage Blogs
              </Typography>
              <BlogMaster />
            </>
          )}

          {adminState.activeTab == 1 && (
            <>
              <AddBlog />
            </>
          )}

          {adminState.activeTab == 2 && (
            <>
              <Typography className="pb-3" variant="h5">
                Feedback
              </Typography>
              <FeedbackMaster />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
