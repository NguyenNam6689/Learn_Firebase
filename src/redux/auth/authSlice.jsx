import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: [],
  isloading: false,
  error: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {},
});

const AuthReducer = AuthSlice.reducer;
// export const {} = CocktailSlice.actions;
export default AuthReducer;
