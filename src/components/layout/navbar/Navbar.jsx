import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import "./Navbar.css";
import { menu } from "../../../routes/navigation";
import CustomModalContainer from "../../common/customModal/CustomModalContainer";

const Navbar = ({ handleOpen, handleClose, open, cart }) => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#0E0E0E" }}>
      <AppBar position="static">
        <Toolbar
          className="toolbarContainer"
          sx={{
            backgroundColor: "rgb(25, 25, 25)",
            width: "100%",
          }}
        >
          {/* Mobile view: Menu icon, logo, and cart icon */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637939/audiophileEcommerce/shared/desktop/logo_qnvapf.svg"
                alt=""
              />
            </Link>
            <Badge badgeContent={cart.length} color="primary">
              <IconButton onClick={handleOpen}>
                <ShoppingCartOutlinedIcon
                  sx={{
                    fontSize: "1.5rem",
                    color: "white",
                    "&:hover": {
                      color: "#fbaf85",
                    },
                  }}
                />
              </IconButton>
            </Badge>
          </Box>

          {/* Desktop view: Logo, menu links, and cart icon */}
          <Box
            className="boxContainer"
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
              marginLeft: "5%",
              marginRight: "5%",
              height: "8vh",
            }}
          >
            <Box
              sx={{
                paddingTop: "10px",
              }}
            >
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637939/audiophileEcommerce/shared/desktop/logo_qnvapf.svg"
                  alt=""
                />
              </Link>
            </Box>

            <Box className="containerLinks">
              {menu.map((item) => {
                return (
                  <Link
                    className="Links"
                    key={item.id}
                    sx={{ flexGrow: 1 }}
                    to={item.path}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </Box>

            <Link to="/dashboard">.</Link>
            <Box
              sx={{
                display: "flex",
                paddingTop: "10px",
              }}
            >
              <Badge badgeContent={cart.length} color="primary">
                <IconButton onClick={handleOpen}>
                  <ShoppingCartOutlinedIcon
                    sx={{
                      fontSize: "1.5rem",
                      color: "white",
                      "&:hover": {
                        color: "#fbaf85",
                      },
                    }}
                  />
                </IconButton>
              </Badge>
            </Box>
            <Box className="usersContainer">
              <Box className="loginBox">
                <Link to="/register" className="linkSign">
                  {" "}
                  REGISTER{" "}
                </Link>
                <hr />
                <Link to="/login" className="linkSign">
                  LOGIN
                </Link>
              </Box>
            </Box>
          </Box>
          <CustomModalContainer open={open} handleClose={handleClose} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
