import { combineReducers } from "redux";
import authReducer from "./authReducer";
import chatReducer from "./chatReducer";
import messageReducer from "./messagesReducer";

const bigR = combineReducers({
  messageReducer,
  authReducer,
  chatReducer,
});

export default bigR;
