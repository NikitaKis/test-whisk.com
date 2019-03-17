import { combineReducers } from "redux";
import { IRootState } from "./state";
import { recipeReducer } from "./recipes";

export { IRootState };

// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<IRootState>({
  recipes: recipeReducer as any
});
