import BatReducer from "./batReducer";
import BallReducer from "./ballReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    bat : BatReducer,
    ball : BallReducer
})

export default rootReducer;