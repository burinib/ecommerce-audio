import { useState } from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const NavbarContainer = () => {
  const [open, setOpen] = useState(false);

  const { cart } = useSelector((store) => store.cartSlice);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Navbar
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
      cart={cart}
    />
  );
};

export default NavbarContainer;
