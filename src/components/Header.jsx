import { Button, IconButton, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeContext } from "@emotion/react";
import { theme } from "../misc/theme";
import { styles } from "../css/style";
import { Link, NavLink } from "react-router-dom";
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
    <header className="lg:px-32  px-6 w-full">
      <nav
        className="flex justify-between items-center py-5 text-sm font-semibold  h-color z-20"
        id="navbar"
      >
        <Typography
          color={theme.palette.colors.primary}
          fontSize={24}
          fontWeight={600}
        >
          BLOG SAVEEN
        </Typography>
        <ul className="md:flex  hidden space-x-10 text-xs">
          <li></li>
          {headers.map((item) => (
            <Link to={item.to}>
              <Typography color={theme.palette.colors.primary}>
                {item.title}
              </Typography>
            </Link>
          ))}
        </ul>
        <ul className="md:flex hidden space-x-6 ">
          <span></span>
          <Button variant="text" sx={styles.text_button}>
            Log in
          </Button>
          <Button variant="contained" size="large" sx={styles.filled_button}>
            Sign up
          </Button>
        </ul>

        <div className="md:hidden self-start">
          <IconButton
            onClick={() => set_is_mobile_open(!is_mobile_open)}
            className="md:hidden self-start"
          >
            {is_mobile_open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      </nav>

      {is_mobile_open && (
        <ul
          id="mobileNav"
          className="md:hidden space-x-10  duration-500  transition-all"
        >
          <li></li>
          {headers.map((item) => (
            <li className="my-3">
              <a href={item.to}>
                <Typography color={theme.palette.colors.primary}>
                  {item.title}
                </Typography>
              </a>
            </li>
          ))}
          <ul className=" space-x-6 ">
            <span></span>
            <Button variant="text" sx={styles.text_button}>
              Log in
            </Button>
            <Button variant="contained" size="large" sx={styles.filled_button}>
              Sign up
            </Button>
          </ul>
        </ul>
      )}
    </header>
  );
}
// <div className="md:flex justify-between md:px-32 py-4 px-6  bg-red-200 md:bg-green-400">
//   <ul className="md:flex  items-center">
//     <li>UNITED UI</li>
//     <li className="md:flex">
//       {headers.map((item) => {
//         return (
//           <div>
//             <a className="text-md font-semibold" href={item.to}>
//               {item.title}
//             </a>
//           </div>
//         );
//       })}
//     </li>
//   </ul>

// <ul className="flex space-x-6">
//   <span></span>
//   <Button variant="text" sx={styles.text_button}>
//     Log in
//   </Button>
//   <Button variant="contained" size="large" sx={styles.filled_button}>
//     Sign up
//   </Button>
// </ul>

//   <div className="md:hidden">
//     <Button onClick={() => set_is_mobile_open(!is_mobile_open)}>
//       {is_mobile_open ? "Close" : "Open"}
//     </Button>
//   </div>
// </div>
