// import todoReducer from './todo';
import productReducer from './product';
// import authenticationReducer from './authentication';
// import cartReducer from './cart';
import { combineReducers } from "redux";

export default combineReducers({ productReducer });