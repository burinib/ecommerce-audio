import { Card, CardContent, Typography } from "@mui/material";
import imgBringing from "../../../assets/shared/desktop/image-best-gear.jpg";

const CardBringing = () => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        margin: "40px auto",
        boxShadow: "none",
      }}
    >
      <CardContent
        sx={{
          p: "100px",
          height: "100%",
        }}
      >
        <Typography
          sx={{
            color: "#000",
            fontSize: "40px",
            fontWeight: "bold",
            lineHeight: "44px",
            letterSpacing: "1.100px",
            textTransform: "uppercase",
            pb: 3,
          }}
        >
          Bringing you the <span style={{ color: "orange" }}>best</span> audio
          gear
        </Typography>
        <Typography
          sx={{
            color: "#000",
            fontSize: "15px",
            fontWeight: 500,
            opacity: 0.6,
          }}
        >
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Typography>
      </CardContent>
      <img
        src={imgBringing}
        alt=""
        style={{ width: "540px", height: "590px" }}
      />
    </Card>
  );
};

export default CardBringing;
