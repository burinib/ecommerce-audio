import { Box, Typography } from "@mui/material";
import "./Home.css";
import { BotonNaranja } from "../../common/custom/customComponent";

const Home = () => {
  return (
    <Box className="container">
      <Box className="box-container"></Box>
      <Box className="content-container" sx={{ justifyContent: "flex-start" }}>
        <Typography
          sx={{
            color: "white",
            marginBottom: "20px",
          }}
        >
          NEW PRODUCT
        </Typography>
        <Typography
          sx={{
            color: "white",
            marginBottom: "20px",
            fontFamily: "Roboto",
            textTransform: "uppercase",
            fontSize: "40px",
          }}
        >
          XX99 Mark II Headphones
        </Typography>
        <Typography
          sx={{
            color: "white",
            marginBottom: "20px",
            fontFamily: "Roboto",
          }}
        >
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Typography>
        <Box sx={{ marginTop: "auto", alignSelf: "flex-start" }}>
          <BotonNaranja variant="contained">See Product</BotonNaranja>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
