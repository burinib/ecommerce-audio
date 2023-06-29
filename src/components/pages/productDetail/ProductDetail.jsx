import { Box } from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";
import "./ProductDetail.css";
import CardTripleContainer from "../../common/cardTriple/CardTripleContainer";
import CardBringingContainer from "../../common/cardBringing/CardBringingContainer";
const ProductDetail = ({ product, onAdd }) => {
  return (
    <Box>
      <h3 className="productName">{product.name}</h3>
      <h3 className="producDescription">{product.description}</h3>
      <CounterContainer onAdd={onAdd} />
      <CardTripleContainer />
      <CardBringingContainer />
    </Box>
  );
};

export default ProductDetail;
