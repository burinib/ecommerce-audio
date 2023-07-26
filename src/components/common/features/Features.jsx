import { Box, List, ListItem, Typography } from "@mui/material";

const Features = ({ product }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingBottom: "50px",
        paddingTop: "50px",
      }}
    >
      <Box sx={{ width: "80%", display: "flex" }}>
        <Box sx={{ width: "80%" }}>
          <Box sx={{ width: "80%" }}>
            <h2>FEATURES</h2>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "500",
                lineHeight: "25px",
                opacity: "50%",
              }}
            >
              {product.features}
            </Typography>
          </Box>
        </Box>

        {/* Contenedor "In the Box" */}
        <Box sx={{ width: "20%", paddingLeft: "10px" }}>
          <h2>IN THE BOX</h2>
          <List>
            {product.includes &&
              product.includes.map((item) => (
                <ListItem key={item.item} sx={{ pl: 1, pb: 0 }}>
                  <span
                    style={{
                      color: "#D87D4A",
                      fontWeight: 700,
                      lineHeight: "25px",
                    }}
                  >
                    x{item.quantity}
                  </span>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: 500,
                      lineHeight: "25px",
                      opacity: 0.5,
                      ml: 2,
                    }}
                  >
                    {item.item}
                  </Typography>
                </ListItem>
              ))}
          </List>
        </Box>
      </Box>
    </div>
  );
};

export default Features;
