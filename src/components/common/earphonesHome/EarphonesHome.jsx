import { Box, Typography } from "@mui/material";
import { BotonNaranja } from "../custom/customComponent";
import imgAuriHome from "../../../assets/home/desktop/image-earphones-yx1.jpg";
import "./EarphonesHome.css";
import { Link } from "react-router-dom";

const EarphonesHome = () => {
  return (
    <div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          width: "80%",
          margin: "0 auto",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <img
            src={imgAuriHome}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="Earphones YX1"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#F1F1F1",
            alignItems: "center",
            borderRadius: "8px",
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
          <Link to="/category/earphones">
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
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default EarphonesHome;
