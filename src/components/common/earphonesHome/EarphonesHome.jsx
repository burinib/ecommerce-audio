import { Box, Typography } from "@mui/material";
import { BotonNaranja } from "../custom/customComponent";
import imgAuriHome from "../../../assets/home/desktop/image-earphones-yx1.jpg";
import "./EarphonesHome.css";

const EarphonesHome = () => {
  return (
    <div>
      <Box sx={{ display: "flex", width: "100%", paddingTop: "10px" }}>
        <Box sx={{ width: "50%", flexBasis: "50%", marginRight: "10px" }}>
          <img src={imgAuriHome} style={{ width: "100%" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#F1F1F1",
            alignItems: "center",
            width: "50%",
            flexBasis: "50%",
          }}
        >
          <Typography
            sx={{
              textAlign: "left",
              fontSize: "24px",
              marginBottom: "10px",
            }}
          >
            YX1 EARPHONES
          </Typography>
          <BotonNaranja
            sx={{
              border: "1px black solid",
              color: "black",
              borderRadius: "0px",
              fontWeight: "bold",
            }}
          >
            See Product
          </BotonNaranja>
        </Box>
      </Box>
    </div>
  );
};

export default EarphonesHome;
