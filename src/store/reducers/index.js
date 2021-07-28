import { combineReducers } from "redux";
import authReducer from "./authReducer";
import messageReducer from "./messagesReducer";

const bigR = combineReducers({
  messageReducer,
  authReducer,
});

export default bigR;
