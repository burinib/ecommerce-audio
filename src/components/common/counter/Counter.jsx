import { Button } from "@mui/material";
import "./Counter.css";

const Counter = ({ counter, setCounter, onAdd, stock }) => {
  return (
    <div className="container_counter">
      <button
        className="counter_button"
        onClick={() => setCounter(counter - 1)}
        disabled={counter > 1 ? false : true}
      >
        -
      </button>
      <h5 className="counter_number">{counter}</h5>
      <button
        className="counter_button"
        onClick={() => setCounter(counter + 1)}
        disabled={counter >= stock ? true : false}
      >
        +
      </button>

      <Button
        sx={{ marginLeft: "20px" }}
        variant="contained"
        onClick={() => onAdd(counter)}
      >
        ADD TO CART
      </Button>
    </div>
  );
};

export default Counter;
