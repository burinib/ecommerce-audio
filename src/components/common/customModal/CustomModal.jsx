import { Box, Button, IconButton, Modal } from "@mui/material";
import { Link } from "react-router-dom";
import { BotonNaranja } from "../custom/customComponent";
import DeleteIcon from "@mui/icons-material/Delete";
import { clearCart, removeById } from "../../../store/cartSlice";
import CartCounter from "../cartCounter/CartCounter";

import "./CustomModal.css";

const CustomModal = ({ open, handleClose, cart, dispatch, total }) => {
  const removeLastWord = (str) => {
    const words = str.split(" ");
    return words.slice(0, -1).join(" ");
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            borderRadius: "5px !important",
            position: "absolute",
            top: "45%",
            right: "0%",
            transform: "translate(-50%, -50%)",
            width: 350,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            maxHeight: "400px",
            overflow: "auto",
          }}
        >
          <Button onClick={() => dispatch(clearCart())}>Remove all</Button>
          {cart.map((prod) => (
            <div key={prod.id} className="total_container">
              <div className="container_custom">
                <img className="img_custom" src={prod.image} alt="" />
                <h4>{removeLastWord(prod.name)}</h4>
                <h5>${prod.price}</h5>
              </div>
              <div className="container_delete">
                <CartCounter
                  id={prod.id}
                  quantity={prod.quantity}
                  stock={prod.stock}
                />
                <IconButton onClick={() => dispatch(removeById(prod.id))}>
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
          ))}
          <div className="customTotal">
            <h5 className="customTotalTittle">TOTAL </h5>
            <h6 className="customTotalPrice">${total}</h6>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link to={"/checkout"}>
              <BotonNaranja onClick={handleClose} variant="contained">
                Checkout
              </BotonNaranja>
            </Link>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CustomModal;
