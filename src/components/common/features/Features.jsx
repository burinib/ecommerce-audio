import { Box, List, ListItem, Typography } from "@mui/material";

const Features = ({ product }) => {
  return (
    <div style={{ display: "flex" }}>
      <Box>
        <h2>FEATURES</h2>
        <Typography>{product.features}</Typography>
      </Box>
      <Box>
        <h2>FEATURES</h2>
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
    </div>
  );
};

export default Features;
