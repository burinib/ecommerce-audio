import { Box, CardContent, Typography } from "@mui/material";
import { BotonNaranja } from "../custom/customComponent";
import imgSpeaker from "../../../assets/product-zx9-speaker/desktop/image-removebg-preview(38).png";
import "./ParlanteOrange.css";

const ParlanteOrange = () => {
  return (
    <div className="parlante-orange-container">
      <CardContent>
        <Box className="content-wrapper">
          <Box className="sectionImg">
            <img src={imgSpeaker} alt="Product 1" className="card-image" />
          </Box>
          <Box className="right-section">
            <Typography sx={{ color: "white", fontSize: "56px" }}>
              ZX9 SPEAKER
            </Typography>
            <Typography className="description">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </Typography>
            <BotonNaranja className="button" variant="contained">
              SET PRODUCT
            </BotonNaranja>
          </Box>
        </Box>
      </CardContent>
    </div>
  );
};

export default ParlanteOrange;
