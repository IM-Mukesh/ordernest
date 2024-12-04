import { combineReducers } from "@reduxjs/toolkit";
import user from "./UserReducer";
import recipes from "./RecipeReducer";
const appReducer = combineReducers({
  user,
  recipes,
});
const rootReducer = (state, action) => {
  if (action.type === "user/LOG_OUT") {
    return appReducer(undefined, { type: undefined });
  }
  return appReducer(state, action);
};

export default rootReducer;
