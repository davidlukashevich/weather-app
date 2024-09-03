import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";

const thunkMiddleware = thunk;

let reducers = combineReducers({});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;