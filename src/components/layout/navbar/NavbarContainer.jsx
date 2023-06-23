import { useState } from "react";
import Navbar from "./Navbar";

const NavbarContainer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Navbar open={open} handleOpen={handleOpen} handleClose={handleClose} />
  );
};

export default NavbarContainer;
