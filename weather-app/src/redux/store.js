import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import weatherReducer from "./reducers/weather-reducer";

const thunkMiddleware = thunk;

let reducers = combineReducers({
    weather: weatherReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;