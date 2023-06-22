import CounterContainer from "../../common/counter/CounterContainer";

const ProductDetail = ({ product, onAdd }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <h3>{product.description}</h3>
      <CounterContainer onAdd={onAdd} />
    </div>
  );
};

export default ProductDetail;
