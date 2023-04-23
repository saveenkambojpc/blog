import { Button, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  class link {
    constructor(name, to) {
      this.name = name;
      this.to = to;
    }
  }
  const footers = [
    {
      heading: "Product",
      sub: [
        new link("Overview", ""),
        new link("Feature", ""),
        new link("Solution", ""),
        new link("Tutorial", ""),
        new link("Pricing", ""),
        new link("Release", ""),
      ],
    },
    {
      heading: "Company",
      sub: [
        new link("About us", ""),
        new link("Careers", ""),
        new link("Press", ""),
        new link("News", ""),
        new link("Media kit", ""),
        new link("Contact", ""),
      ],
    },
    {
      heading: "Resources",
      sub: [
        new link("Blog", ""),
        new link("Newsletter", ""),
        new link("Events", ""),
        new link("Help centre", ""),
        new link("Tutorials", ""),
        new link("Support", ""),
      ],
    },
    {
      heading: "Use Cases",
      sub: [
        new link("Startups", ""),
        new link("Enterprise", ""),
        new link("Government", ""),
        new link("Help Saas", ""),
        new link("Marketplaces", ""),
        new link("Ecommerce", ""),
      ],
    },
    {
      heading: "Social",
      sub: [
        new link("Twitter", ""),
        new link("LinkedIn", ""),
        new link("Facebook", ""),
        new link("Github", ""),
        new link("AngelList", ""),
        new link("Dribble", ""),
      ],
    },
    {
      heading: "Legal",
      sub: [
        new link("Terms", ""),
        new link("Privacy", ""),
        new link("Cookies", ""),
        new link("Licenses", ""),
        new link("Settings", ""),
        new link("Contact", ""),
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
          <Typography variant="h4">
            Let's get started on something great
          </Typography>
          <Typography variant="body1">
            Join over 4,000+ startups already growing with United
          </Typography>
          <Button
            variant="outlined"
            style={{ color: "white", borderColor: "white", borderRadius: 100 }}
          >
            Start your 7-day free trail
          </Button>
        </div>

        <div className=" md:mt-12 mt-6 md:flex md:justify-between ">
          {footers.map((item) => {
            return (
              <div className="mt-6 md:mt-0 flex flex-col items-center">
                <Typography textTransform={"uppercase"} fontSize={16}>
                  {item.heading}
                </Typography>
                <ul className="space-y-2 mt-3">
                  {item.sub.map((e) => {
                    return <Typography  fontSize={14}>{e.name}</Typography>
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
