import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../../services/productsServices";
import ProductDetail from "./ProductDetail";
import { addToCart } from "../../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductDetailContainer = () => {
  const { id } = useParams();

  const [product, setproduct] = useState({});
  const { cart } = useSelector((store) => store.cartSlice);

  let produtOfCart = cart.find((elemento) => elemento.id === +id);
  let initialQuantity = produtOfCart?.quantity;

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

  return (
    <ProductDetail
      product={product}
      onAdd={onAdd}
      initialQuantity={initialQuantity}
    />
  );
};

export default ProductDetailContainer;
