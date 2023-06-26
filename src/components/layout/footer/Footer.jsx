import { Box, SvgIcon, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { menu } from "../../../routes/navigation";

import "./Footer.css";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(25, 25, 25)",
        height: "200px",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box sx={{ paddingTop: "15px" }}>
          <img
            src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637939/audiophileEcommerce/shared/desktop/logo_qnvapf.svg"
            alt=""
          />
        </Box>
        <Box className="containerLinksFooter">
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
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography
            className="textFooter"
            sx={{ fontSize: "15px", color: "white" }}
          >
            Audiophile is an all in one stop to fulfill your audio needs. Were a
            small team of music lovers and sound specialists who are devoted to
            helping you get the most out of personal audio. Come and visit our
            demo facility - we’re open 7 days a week.
          </Typography>
        </Box>
        <Box>
          <Box sx={{ display: "flex", gap: "15px" }}>
            <SvgIcon component={FacebookIcon} sx={{ color: "white" }} />
            <SvgIcon component={TwitterIcon} sx={{ color: "white" }} />
            <SvgIcon component={InstagramIcon} sx={{ color: "white" }} />
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{ fontSize: "12px", color: "white", paddingTop: "20px" }}
        >
          Copyright 2021. All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
