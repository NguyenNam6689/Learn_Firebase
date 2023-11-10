import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";

//* REDUX
import AuthReducer from "./auth/authSlice";
import { APP_NODE } from "@/common/constants";

const middleware = [thunk];

const shouldEnvironment = process.env.NODE_APP === APP_NODE.DEV;
if (shouldEnvironment) {
  middleware.push(logger);
}

const reducer = combineReducers({
  auth: AuthReducer,
});
const store = configureStore({
  reducer: reducer,
});
export default store;
