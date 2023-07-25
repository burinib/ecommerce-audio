import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./ProducstList.css";
import CardBringingContainer from "../../common/cardBringing/CardBringingContainer";
import CardTripleContainer from "../../common/cardTriple/CardTripleContainer";

const ProductsList = ({ products, categoryName }) => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "60px",
          backgroundColor: "rgb(25, 25, 25)",
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
      {products.map((product) => {
        return (
          <div className="container_list" key={product.id}>
            <div className="image-container">
              <img className="img_list" src={product.image} />
            </div>
            <div className="info-container">
              <h1 className="name_list">{product.name}</h1>
              <h1 className="description_list">{product.description}</h1>
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
          </div>
        );
      })}
      <CardTripleContainer />
      <CardBringingContainer />
    </Box>
  );
};

export default ProductsList;
