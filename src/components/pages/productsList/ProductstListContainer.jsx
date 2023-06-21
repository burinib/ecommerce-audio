import { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../../../services/productsServices";

const ProductsListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const getData = async () => {
      const data = await getAllProducts();
      let productsByCategory = data.filter(
        (prod) => prod.category === categoryName
      );
      setProducts(productsByCategory);
    };
    getData();
  }, [categoryName]);

  return (
    <div>
      <ProductsList products={products} />
    </div>
  );
};

export default ProductsListContainer;
