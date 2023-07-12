import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { addToCart } from "../../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";

const ProductDetailContainer = () => {
  const { id } = useParams();

  const [product, setproduct] = useState({});
  const { cart } = useSelector((store) => store.cartSlice);

  let produtOfCart = cart.find((elemento) => elemento.id === +id);
  let initialQuantity = produtOfCart?.quantity;

  const dispatch = useDispatch();

  useEffect(() => {
    let refCollection = collection(db, "productsAudio");
    let refDoc = doc(refCollection, id);
    const getData = async () => {
      let res = await getDoc(refDoc);
      setproduct({ ...res.data(), id: res.id });
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
