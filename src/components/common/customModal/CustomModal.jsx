import { Box, Button, IconButton, Modal } from "@mui/material";
import { Link } from "react-router-dom";
import { BotonNaranja } from "../custom/customComponent";
import DeleteIcon from "@mui/icons-material/Delete";
import { clearCart, removeById } from "../../../store/cartSlice";
import CartCounter from "../cartCounter/CartCounter";

const CustomModal = ({ open, handleClose, cart, dispatch, total }) => {
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
            position: "absolute",
            top: "35%",
            right: "0%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            minHeight: "400px",
          }}
        >
          <Button onClick={() => dispatch(clearCart())}>Remove all</Button>

          {cart.map((prod) => (
            <div key={prod.id} style={{ border: "2px solid black" }}>
              <IconButton onClick={() => dispatch(removeById(prod.id))}>
                <DeleteIcon />
              </IconButton>
              <div>
                {/* <img src={prod.image} alt="" /> */}
                <h4>{prod.name}</h4>
                <h5>{prod.price}</h5>
              </div>
              <CartCounter
                id={prod.id}
                quantity={prod.quantity}
                stock={prod.stock}
              />
            </div>
          ))}
          <Link to={"/checkout"}>
            <BotonNaranja onClick={handleClose} variant="contained">
              Checkout
            </BotonNaranja>
          </Link>
          <Box>
            <h5>Total: </h5>
            <h6>{total}</h6>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default CustomModal;
