import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  accesToken: "",
  isLogged: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      state.accesToken = action.payload.accesToken;
      state.isLogged = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginRedux } = authSlice.actions;

export default authSlice.reducer;
