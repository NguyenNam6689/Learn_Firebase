import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: [],
  isloading: false,
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
  extraReducers: {},
});

const AuthReducer = AuthSlice.reducer;
// export const {} = CocktailSlice.actions;
export default AuthReducer;
