import { combineReducers } from "redux";
import taskReducer from "./taskReducer";

export const rootReducer = combineReducers({
  task: taskReducer,
  user: userReducer
});

export type AppState = typeof rootReducer;
