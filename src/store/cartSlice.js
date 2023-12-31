import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let existe = state.cart.some(
        (product) => product.id === action.payload.id
      );
      if (existe) {
        let newArr = state.cart.map((elemento) => {
          if (elemento.id === action.payload.id) {
            return {
              ...elemento,
              quantity: action.payload.quantity,
            };
          } else {
            return elemento;
          }
        });

        state.cart = newArr;
        localStorage.setItem("cart", JSON.stringify(newArr));
      } else {
        localStorage.setItem(
          "cart",
          JSON.stringify([...state.cart, action.payload])
        );
        state.cart = [...state.cart, action.payload];
      }

      //Guarda en el storage lo que tengo el carrito en este punto
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem("cart");
    },
    removeById: (state, action) => {
      let newArray = state.cart.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(newArray));
      state.cart = newArray;
    },
    getTotalPrice: (state) => {
      const total = state.cart.reduce((acc, elemento) => {
        return acc + elemento.quantity * elemento.price;
      }, 0);

      state.total = total;
    },

    decremenetOneById: (state, action) => {
      const id = action.payload;

      const newArray = state.cart.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity - 1 };
        } else {
          return product;
        }
      });
      state.cart = newArray;
      localStorage.setItem("cart", JSON.stringify(newArray));
    },

    incrementOneById: (state, action) => {
      const id = action.payload;

      const newArray = state.cart.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });
      state.cart = newArray;
      localStorage.setItem("cart", JSON.stringify(newArray));
    },
  },
});

export const {
  addToCart,
  clearCart,
  removeById,
  getTotalPrice,
  decremenetOneById,
  incrementOneById,
} = cartSlice.actions;

export default cartSlice.reducer;
