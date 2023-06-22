import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../../services/productsServices";
import ProductDetail from "./ProductDetail";

const ProductDetailContainer = () => {
  const { id } = useParams();

  const [product, setproduct] = useState({});
  console.log(product);
  useEffect(() => {
    const getData = async () => {
      let data = await getProductById(id);

      setproduct(data);
    };
    getData();
  }, [id]);

  //Funcion que agrega al carrito
  const onAdd = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };

    console.log("agregue al carrito", data);
  };

  return <ProductDetail product={product} onAdd={onAdd} />;
};

export default ProductDetailContainer;
