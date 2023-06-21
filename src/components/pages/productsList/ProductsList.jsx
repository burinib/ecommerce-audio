const ProductsList = ({ products }) => {
  return (
    <div>
      <h1>aca van los productos</h1>
      {products.map((product, i) => {
        return (
          <h1
            key={product.id}
            style={{ flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}
          >
            {product.name}
          </h1>
        );
      })}
    </div>
  );
};

export default ProductsList;
