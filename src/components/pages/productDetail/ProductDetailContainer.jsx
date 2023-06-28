import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../../services/productsServices";
import ProductDetail from "./ProductDetail";
import { addToCart } from "../../../store/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetailContainer = () => {
  const { id } = useParams();

  const [product, setproduct] = useState({});
  const dispatch = useDispatch();

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
    dispatch(addToCart(data));
  };

  return <ProductDetail product={product} onAdd={onAdd} />;
};

export default ProductDetailContainer;
