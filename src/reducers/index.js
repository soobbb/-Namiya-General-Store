import { combineReducers } from "redux";
import counselorReducer from "./counselorReducer";

const rootReducer = combineReducers({
  counselorReducer,
});

export default rootReducer;
