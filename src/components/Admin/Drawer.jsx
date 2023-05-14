import React from "react";
import { theme } from "../../misc/theme";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../redux/features/admin";

export default function Drawer() {
  const adminState = useSelector((store) => store.admin);
  const dispatch = useDispatch();

  const items = [
    {
      title: "Manage Blogs",
    },
    {
      title: "Add Blog",
    },
    {
      title: "Feedback",
    },
  ];

  function handleButtonClick(index) {
    dispatch(setActiveTab(index));
  }
  return (
    <div className="  h-screen w-60 p-3">
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => {
          return (
            <button
              className="rounded bg-red-400 text-left px-6 py-3"
              onClick={() => handleButtonClick(index)}
              style={{
                background:
                  index == adminState.activeTab
                    ? theme.palette.colors.primary
                    : theme.palette.colors.header,
                color: index == adminState.activeTab ? "white" : "black",
              }}
            >
              {item.title}
            </button>
          );
        })}
      </ul>
    </div>
  );
}
