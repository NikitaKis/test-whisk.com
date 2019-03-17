import { IRecipesState } from "../types/RecipeTypes";

export interface IRootState {
  recipes: IRecipesState;
  router?: any;
}
