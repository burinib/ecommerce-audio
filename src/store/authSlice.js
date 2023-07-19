import { createSlice } from "@reduxjs/toolkit";
import { login } from "./authThunk";

const initialState = {
  user: {},
  accesToken: "",
  isLogged: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.accesToken = action.payload.accesToken;
      state.isLogged = true;
      state.isLoading = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.accesToken = action.payload.accesToken;
      state.isLogged = true;
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.accesToken = "";
      state.isLogged = false;
      state.isLoading = false;
    });
    /*     builder.addCase(loginGoogle, (state, action) => {});
     */
  },
});

// Action creators are generated for each case reducer function
export const { loginRedux } = authSlice.actions;

export default authSlice.reducer;
