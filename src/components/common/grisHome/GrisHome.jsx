import { Box, Typography } from "@mui/material";
import imgGris from "../../../assets/home/desktop/image-speaker-zx7.jpg";
import { BotonNaranja } from "../custom/customComponent";
import "./GrisHome.css";
import { Link } from "react-router-dom";

const GrisHome = () => {
  return (
    <Box className="gris-home-container">
      <img src={imgGris} className="gris-home-image" alt="ZX7 Speaker" />
      <Box className="gris-home-content">
        <Typography variant="h4" component="h2" className="gris-home-title">
          ZX7 SPEAKER
        </Typography>
        <Link to="/category/speakers">
          <BotonNaranja
            sx={{
              border: "1px  black solid",
              color: "black",
              borderRadius: "0px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "black",
                color: "#e9e9e9",
              },
            }}
          >
            See Product
          </BotonNaranja>
        </Link>
      </Box>
    </Box>
  );
};

export default GrisHome;
