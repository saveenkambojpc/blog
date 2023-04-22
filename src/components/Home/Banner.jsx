import { Chip, Typography } from "@mui/material";
import React from "react";
import banner from "../../img/banner.jpg";
import { theme } from "../../misc/theme";

const Banner = () => {
  const tags = [
    {
      name: "Design",
      id: "design",
    },
    {
      name: "Research",
      id: "research",
    },
    {
      name: "Presentation",
      id: "presentation",
    },
  ];
  return (
    <div className="relative">
      <div className="">
        <img
          src={banner}
          style={{
            width: "100%",
            height: "480px",
            objectFit: "cover",
            objectPosition: "top",
          }}
          alt=""
        />
      </div>

      {/* Description */}
      <div className=" text-white absolute   bottom-0 p-6  w-full">
        <div className="mb-3">
          <Typography variant="span" fontSize={14} fontWeight={500}>
            Olivia Rhye
          </Typography>{" "}
          <Typography variant="span" fontSize={14} fontWeight={500}>
            20 Jan 2020
          </Typography>
        </div>
        <div className="mb-3">
          <Typography variant="h4">UX review presentations</Typography>
          <Typography variant="subtitle1">
            How do you create complelling presentations that wow your colleagues
            and impress your managers?
          </Typography>
        </div>
        <div className="space-x-3">
          {tags.map((tag) => (
            <Chip
            sx={{
                background:"transparent",
                color:"white",
                border:"1px solid white"
            }}
              label={<Typography sx={{}}>{tag.name}</Typography>}
              key={tag.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
