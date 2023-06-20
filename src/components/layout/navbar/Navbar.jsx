import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./Navbar.css";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            backgroundColor: "#0E0E0E",
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
            sx={{
              display: { xs: "none", md: "flex", backgroundColor: "#0E0E0E" },
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
              marginLeft: "5%",
              marginRight: "5%",
            }}
          >
            <img
              src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637939/audiophileEcommerce/shared/desktop/logo_qnvapf.svg"
              alt=""
            />
            <div className="containerLinks">
              <Link className="links">HOME</Link>
              <Link className="links">HEADPHONES</Link>
              <Link className="links">SPEAKERS</Link>
              <Link className="links">EARPHONES</Link>
            </div>
            <Box sx={{ marginLeft: "auto" }}>
              <ShoppingCartIcon className="carritoIcon" />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
