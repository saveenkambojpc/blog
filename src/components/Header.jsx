import {
  Button,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { theme } from "../misc/theme";
import { styles } from "../css/style";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomLinearProgress from "./helper/CustomLinearProgress";
import { useDispatch, useSelector } from "react-redux";
import { isDarkMode, toggleAlert } from "../misc/helper";
import { AccountCircle, More } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreIcon from "@mui/icons-material/MoreVert";
import CustomDialog from "./helper/CustomDialog";
import { setDialogObj } from "../redux/features/helper";
import { messages } from "../misc/messages";

export default function Header() {
  const helperState = useSelector((store) => store.helper);
  const [is_mobile_open, set_is_mobile_open] = React.useState(false);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();


  // Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
      tooltip: "Please Login first",
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

  function handleLogoutModalClose() {
    dispatch(
      setDialogObj({
        ...helperState.dialogObj,
        logout: false,
      })
    );
  }
  function handleLogout(){
    toggleAlert("success", messages.logout.success);
    
    sessionStorage.clear()
    handleLogoutModalClose()

    return navigate("/");


  }
  return (
    <>
      <header
        className="shadow-lg sticky top-0 z-10 "
        style={{ background: theme.palette.colors.header }}
      >
        <nav
          className="flex justify-between items-center py-3 text-sm font-semibold  h-color z-20 lg:px-32 px-6 w-full"
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
                <Tooltip
                  title={
                    JSON.parse(sessionStorage.getItem("auth"))
                      ? item.title
                      : item.tooltip
                  }
                >
                  <Button>
                    <Typography
                      color={theme.palette.colors.primary}
                      borderBottom={pathname == item.to ? 3 : 0}
                    >
                      {item.title}
                    </Typography>
                  </Button>
                </Tooltip>
              </Link>
            ))}
          </ul>

          <div className="md:flex hidden">
            {!JSON.parse(sessionStorage.getItem("auth")) ? (
              LoginSignupComponent()
            ) : (
              <div className="flex items-center">
                {JSON.parse(sessionStorage.getItem("auth")).email}
                <IconButton>
                  <AccountCircle />
                </IconButton>

                <div>
                  <IconButton
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <MoreIcon />
                  </IconButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem
                      onClick={handleClose}
                      style={{
                        background:
                          pathname == "/profile"
                            ? theme.palette.colors.header
                            : "white",
                      }}
                    >
                      <Link to={"/profile"}>Profile</Link>
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        dispatch(
                          setDialogObj({
                            ...helperState.dialogObj,
                            logout: true,
                          })
                        );
                      }}
                    >
                      Logout
                    </MenuItem>
                  </Menu>
                </div>
              </div>
            )}
          </div>

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

        <CustomDialog
          open={helperState.dialogObj.logout}
          maxWidth={"xs"}
          title={"Do you really want to Logout?"}
          dialogAction={
            <>
              <Button onClick={handleLogoutModalClose}>Disagree</Button>
              <Button onClick={handleLogout}>Agree</Button>
            </>
          }
          handleClose={handleLogoutModalClose}
        />
      </header>
    </>
  );
}

function LoginSignupComponent() {
  return (
    <ul className="flex justify-between w-full md:space-x-6 items-center  ">
      <Link to="/login">
        <Button variant="outlined" sx={styles.outlined_button}>
          Log in
        </Button>
      </Link>
      <Link to={"/signup"}>
        <Button variant="contained" size="large" sx={styles.filled_button}>
          Sign up
        </Button>
      </Link>
    </ul>
  );
}
