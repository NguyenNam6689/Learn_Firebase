//* LIB
import { createSlice } from "@reduxjs/toolkit";
import { loginGoogleInitial, loginInitial, registerInitial } from "./authThunk";

const initialState = {
  authData: null,
  isLoading: false,
  error: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetDataAuth: (state) => {
      return state;
    },
  },
  extraReducers: {
    // Todo 1 : Register
    [registerInitial.pending]: (state, _) => {
      return { ...state, isLoading: true };
    },
    [registerInitial.fulfilled]: (state, action) => {
      return { ...state, isLoading: false, authData: action.payload };
    },
    [registerInitial.rejected]: (state, action) => {
      return { ...state, isLoading: false, error: action.payload };
    },
    // Todo 2 : Login
    [loginInitial.pending]: (state, _) => {
      return { ...state, isLoading: true };
    },
    [loginInitial.fulfilled]: (state, action) => {
      return { ...state, isLoading: false, authData: action.payload };
    },
    [loginInitial.rejected]: (state, action) => {
      return { ...state, isLoading: false, error: action.payload };
    },
    // Todo 3: Login Google
    [loginGoogleInitial.pending]: (state, _) => {
      return { ...state, isLoading: true };
    },
    [loginGoogleInitial.fulfilled]: (state, action) => {
      return { ...state, isLoading: false, authData: action.payload };
    },
    [loginGoogleInitial.rejected]: (state, action) => {
      return { ...state, isLoading: false, error: action.payload };
    },
  },
});
const AuthReducer = AuthSlice.reducer;

export const { resetDataAuth } = AuthSlice.actions;

export default AuthReducer;
