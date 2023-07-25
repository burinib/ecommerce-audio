import { collection, getDocs } from "firebase/firestore";
import Dashboard from "./Dashboard";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";

const DashboardContainer = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [data, setData] = useState({});
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let refCollection = collection(db, "productsAudio");

    const getData = async () => {
      let res = await getDocs(refCollection);
      let productosFinales = res.docs.map((prod) => {
        return {
          ...prod.data(),
          id: prod.id,
        };
      });
      setProducts(productosFinales);
    };
    getData();
  }, []);

  const viewById = (product) => {
    setData(product);
    setDisabled(true);
    setOpen(true);
  };
  const editById = (product) => {
    setData(product);
    setDisabled(false);
    setOpen(true);
  };
  const deleteByID = (id) => {};

  let props = {
    products,
    viewById,
    editById,
    deleteByID,
    open,
    handleClose,
    disabled,
    data,
  };

  return <Dashboard {...props} />;
};

export default DashboardContainer;
