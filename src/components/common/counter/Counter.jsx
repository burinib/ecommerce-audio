import { Button } from "@mui/material";

const Counter = ({ counter, setCounter, onAdd }) => {
  return (
    <div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <h5>{counter}</h5>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <Button
        sx={{
          width: "160px",
          padding: "10px",
        }}
        variant="contained"
        onClick={() => onAdd(counter)}
      >
        {" "}
        ADD TO CARD
      </Button>
    </div>
  );
};

export default Counter;