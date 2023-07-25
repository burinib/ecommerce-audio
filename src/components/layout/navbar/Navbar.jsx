import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import "./Navbar.css";
import { menu } from "../../../routes/navigation";
import CustomModalContainer from "../../common/customModal/customModalContainer";

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
          <Box
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
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
            <img
              src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637939/audiophileEcommerce/shared/desktop/logo_qnvapf.svg"
              alt=""
            />
            <ShoppingCartIcon />
          </Box>

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
            <img
              src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637939/audiophileEcommerce/shared/desktop/logo_qnvapf.svg"
              alt=""
            />
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
            <Link to="/dashboard">Ir al dashboard</Link>
            <Box className="usersContainer">
              <Box className="loginBox">
                <Link to="/register" className="linkSign">
                  {" "}
                  Register{" "}
                </Link>
                <hr />
                <Link to="/login" className="linkSign">
                  Login
                </Link>
              </Box>

              <Badge badgeContent={cart.length} color="primary">
                <IconButton onClick={handleOpen}>
                  <ShoppingCartOutlinedIcon
                    sx={{ fontSize: "1.5rem", color: "white" }}
                  />
                </IconButton>
              </Badge>
            </Box>

            <CustomModalContainer open={open} handleClose={handleClose} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
