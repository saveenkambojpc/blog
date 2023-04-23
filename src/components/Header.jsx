import { Button } from "@mui/material";
import React from "react";
import { styles } from "../css/style";

export default function Header() {
  const [is_mobile_open, set_is_mobile_open] = React.useState(false);
  const headers = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Product",
      to: "/product",
    },
    {
      title: "Resources",
      to: "/resources",
    },
    {
      title: "Pricing",
      to: "/pricing",
    },
    {
      title: "Admin",
      to: "/admin",
    },
  ];
  return (
    <div className="md:flex justify-between md:px-32 py-4 px-6  bg-red-200 md:bg-green-400">
      <ul className="md:flex  items-center">
        <li>UNITED UI</li>
        <li className="md:flex">
          {headers.map((item) => {
            return (
              <div>
                <a className="text-md font-semibold" href={item.to}>
                  {item.title}
                </a>
              </div>
            );
          })}
        </li>
      </ul>

      <ul className="flex space-x-6">
        <span></span>
        <Button variant="text" sx={styles.text_button}>
          Log in
        </Button>
        <Button variant="contained" size="large" sx={styles.filled_button}>
          Sign up
        </Button>
      </ul>

      <div className="md:hidden">
        <Button onClick={() => set_is_mobile_open(!is_mobile_open)}>
          {is_mobile_open ? "Close" : "Open"}
        </Button>
      </div>
    </div>
  );
}
