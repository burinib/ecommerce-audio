import { Box } from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";
import "./ProductDetail.css";
import CardTripleContainer from "../../common/cardTriple/CardTripleContainer";
import CardBringingContainer from "../../common/cardBringing/CardBringingContainer";

const ProductDetail = ({ product, onAdd, initialQuantity }) => {
  return (
    <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "540px" }}>
          <img
            className="image_detail"
            src={product.image}
            alt={product.name}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "20px",
            marginTop: "120px",
          }}
        >
          <h3 className="productName">{product.name}</h3>

          <h3 className="productDescription">{product.description}</h3>

          <h3 className="price_product">$ {product.price}</h3>

          <Box>
            <CounterContainer
              onAdd={onAdd}
              initial={product.quantity}
              initialQuantity={initialQuantity}
              stock={product.stock}
            />
          </Box>
        </Box>
      </Box>
      <CardTripleContainer />
      <CardBringingContainer />
    </Box>
  );
};

export default ProductDetail;
