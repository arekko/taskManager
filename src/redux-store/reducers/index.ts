import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
  task: taskReducer,
  user: userReducer
});

export type AppState = typeof rootReducer;
