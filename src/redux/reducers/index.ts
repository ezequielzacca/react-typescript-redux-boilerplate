import { counterReducer } from "./counter.reducer";
import { combineReducers } from "redux";

export const appReducer = combineReducers({
    counter: counterReducer
});
