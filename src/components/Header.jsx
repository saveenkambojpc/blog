import { Button, IconButton, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { theme } from "../misc/theme";
import { styles } from "../css/style";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomLinearProgress from "./helper/CustomLinearProgress";
import { useSelector } from "react-redux";
import { isDarkMode } from "../misc/helper";
export default function Header() {
  const helperState = useSelector((store) => store.helper);
  const [is_mobile_open, set_is_mobile_open] = React.useState(false);

  const { pathname } = useLocation();

  const headers = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Blogs",
      to: "/blogs",
    },
    {
      title: "Add Blog",
      to: "/add_blog",
    },
    // {
    //   title: "Resources",
    //   to: "/resources",
    // },
    // {
    //   title: "Pricing",
    //   to: "/pricing",
    // },
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
                <Typography
                  color={theme.palette.colors.primary}
                  borderBottom={pathname == item.to ? 3 : 0}
                >
                  {item.title}
                </Typography>
              </Link>
            ))}
          </ul>
          {/* <ul className="md:flex hidden space-x-6 ">
            <span></span>
            <Button variant="text" sx={styles.text_button}>
              Log in
            </Button>
            <Button variant="contained" size="large" sx={styles.filled_button}>
              Sign up
            </Button>
          </ul> */}
          <div className="md:flex hidden">{LoginSignupComponent()}</div>

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
            className="md:hidden mx-20  duration-500  transition-all"
          >
            <li></li>
            {headers.map((item) => (
              <li className="my-2 text-center">
                <Link to={item.to} key={item.title}>
                  <Typography
                    py={0.5}
                    color={theme.palette.colors.primary}
                    borderBottom={pathname == item.to ? 2 : 0}
                    style={
                      {
                        // background: pathname == item.to ? "black" : "initial",
                      }
                    }
                  >
                    {item.title}
                  </Typography>
                </Link>
              </li>
            ))}
            {LoginSignupComponent()}
          </ul>
        )}
        <div className="h-[4px]">
          {helperState.is_loading && <CustomLinearProgress />}
        </div>
      </header>
    </>
  );
}

function LoginSignupComponent() {
  return (
    <ul className="flex justify-between w-full md:space-x-6 items-center  ">
      <Button variant="outlined" sx={styles.outlined_button}>
        Log in
      </Button>
      <Button variant="contained" size="large" sx={styles.filled_button}>
        Sign up
      </Button>
    </ul>
  );
}
