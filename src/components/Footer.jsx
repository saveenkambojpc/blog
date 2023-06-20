import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  class link {
    constructor(name, to) {
      this.name = name;
      this.to = to;
    }
  }
  const footers = [
    {
      heading: "Pages",
      sub: [
        new link("Home", ""),
        new link("Blog", ""),
        new link("Add Blog", ""),
        new link("Contact Us", ""),
      ],
    },
  ];
  return (
    <div>
      <div
        className="text-white py-10 lg:px-32 px-6
        "
        style={{
          background:
            "linear-gradient(-185deg, #f1db5a,#f6b761,#f59b78,#e6858d,#c45cb8,#a941f4,#a941f4,#a941f4,#a941f4)",
        }}
      >
        <div className="flex flex-col items-center space-y-3">
          <Typography variant="h4">Publish your passions, your way</Typography>
          <Typography variant="body1">
            Create a unique and beautiful blog easily.
          </Typography>
          <Link to="/add_blog">
            <Button
              variant="outlined"
              style={{
                color: "white",
                borderColor: "white",

                borderRadius: 6,
                backdropFilter: "blur",
              }}
            >
              Create your Blog
            </Button>
          </Link>
        </div>

        <div className=" md:mt-12 mt-6 md:flex md:justify-between ">
          {footers.map((item) => {
            return (
              <div
                key={item.heading}
                className="mt-6 md:mt-0 flex flex-col items-center"
              >
                <Typography textTransform={"uppercase"} fontSize={16}>
                  {item.heading}
                </Typography>
                <ul className="space-y-2 mt-3">
                  {item.sub.map((e, i) => {
                    return (
                      <Typography key={e.name} fontSize={14}>
                        {e.name}
                      </Typography>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
