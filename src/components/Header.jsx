import { Button, IconButton, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { theme } from "../misc/theme";
import { styles } from "../css/style";
import { Link } from "react-router-dom";
import CustomLinearProgress from "./helper/CustomLinearProgress";
import { useSelector } from "react-redux";
export default function Header() {
  const helperState = useSelector((store) => store.helper);
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
    <>
      <header
        className="shadow-lg sticky top-0 z-10 "
        style={{ background: theme.palette.colors.header }}
      >
        <nav
          className="flex justify-between items-center py-5 text-sm font-semibold  h-color z-20 lg:px-32  px-6 w-full"
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
              <Link to={item.to} key={item.title}>
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
              <Button
                variant="contained"
                size="large"
                sx={styles.filled_button}
              >
                Sign up
              </Button>
            </ul>
          </ul>
        )}
        <div className="h-[4px]">
          {helperState.is_loading && <CustomLinearProgress />}
        </div>
      </header>
    </>
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
