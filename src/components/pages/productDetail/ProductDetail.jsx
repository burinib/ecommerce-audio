import { Box } from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";
import "./ProductDetail.css";
const ProductDetail = ({ product, onAdd }) => {
  return (
    <Box sx={{ height: "72vh" }}>
      <h3 className="productName">{product.name}</h3>
      <h3 className="producDescription">{product.description}</h3>
      <CounterContainer onAdd={onAdd} />
    </Box>
  );
};

export default ProductDetail;
