import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./ProducstList.css";

const ProductsList = ({ products, categoryName }) => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "60px",
          backgroundColor: "GrayText",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          color="secondary.second"
          variant="h4"
          sx={{ textTransform: "uppercase" }}
        >
          {categoryName}
        </Typography>
      </Box>
      {products.map((product, i) => {
        // 0 - 1 - 2 -3 - 4
        return (
          <div key={product.id}>
            <h1
              className="PruebaColor"
              style={{ flex: i % 2 === 0 ? "red" : "yellow" }}
            >
              {product.name}
            </h1>
            <Link to={`/productDetail/${product.id}`}>
              <Button
                sx={{
                  width: "160px",
                  padding: "10px",
                }}
                variant="contained"
              >
                SEE PRODUCT
              </Button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
