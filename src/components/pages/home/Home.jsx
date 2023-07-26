import { Box, Typography } from "@mui/material";
import "./Home.css";
import { BotonNaranja } from "../../common/custom/customComponent";
import CardBringingContainer from "../../common/cardBringing/CardBringingContainer";
import CardTripleContainer from "../../common/cardTriple/CardTripleContainer";
import ParlanteOrangeContainer from "../../common/ParlanteOrange/ParlanteOrangeContainer";
import GrisHomeContainer from "../../common/grisHome/GrisHomeContainer";
import EarphonesHomeContainer from "../../common/earphonesHome/EarphonesHomeContainer";
import { Link } from "react-router-dom";

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
          }}
        >
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Typography>
        <Box sx={{ marginTop: "auto", alignSelf: "flex-start" }}>
          <Link to="/category/headphones">
            <BotonNaranja variant="contained">See Product</BotonNaranja>
          </Link>
        </Box>
      </Box>
      <Box>
        <CardTripleContainer />
        <ParlanteOrangeContainer />
        <GrisHomeContainer />
        <EarphonesHomeContainer />
        <CardBringingContainer />
      </Box>
    </Box>
  );
};

export default Home;
