import { createAsyncThunk } from "@reduxjs/toolkit";
import { onSignIn } from "../firebaseConfig";

export const login = createAsyncThunk(
  "login",
  async (argument, { rejectWithValue }) => {
    let res = await onSignIn(argument);
    if (res.user.accesToken) {
      return res.user;
    } else {
      rejectWithValue("ocurrio un error");
    }
  }
);

/* export const loginGoogle = createAsyncThunk();
 */
