export interface IRecipe {
  content: {
    id: string;
    name: string;
    description: string;
    ingredients: Array<{ text: string }>;
    images: Array<{
      url: string;
      responsive: {
        url: string;
        width: number;
        height: number;
      };
    }>;
    author: {
      name: string;
    };
    language: string;
  };
}
export interface IRecipeDetails extends IRecipe {
  instructions?: {
    steps?: [];
  };
}
export type RecipeDetailsList = {
  [key: string]: IRecipeDetails;
};
export enum RecipesActionTypes {
  GET_ALL = "RECIPES/GET_ALL",
  GET_SINGLE = "RECIPES/GET_SINGLE",
  IS_FETCHING = "RECIPES/IS_FETCHING"
}

export interface IRecipesGetAllAction {
  type: RecipesActionTypes.GET_ALL;
  items: IRecipe[];
  paging: {
    cursors?: {
      after?: string;
    };
    total: number;
  };
}
export interface IRecipesIsFetchingAction {
  type: RecipesActionTypes.IS_FETCHING;
}

export interface IRecipesGetSingleAction {
  type: RecipesActionTypes.GET_SINGLE;
  recipe: IRecipe;
}

export type RecipesActions = IRecipesGetAllAction | IRecipesGetSingleAction | IRecipesIsFetchingAction;

export interface IRecipesState {
  nextPage?: string | null;
  details: {
    isFetching: boolean;
    byId: RecipeDetailsList;
  };
  items: IRecipe[];
  isFetching: boolean;
}
export interface IRecipesPaging {
  cursors: {
    after?: string;
    before?: string;
  };
  total: number;
}
