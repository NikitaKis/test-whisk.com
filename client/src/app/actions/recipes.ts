import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  IRecipe,
  IRecipeDetails,
  IRecipesGetAllAction,
  IRecipesIsFetchingAction,
  IRecipesIsFetchingSingleAction,
  IRecipesState,
  RecipesActionTypes,
  IRecipesGetSingleAction,
  IRecipesPaging
} from "../types/RecipeTypes";

export const getRecipesFromAPI = async (
  after: string
): Promise<{ data: IRecipe[]; paging: IRecipesPaging }> => {
  const limit = 24;
  let pathWithQuery = `?type=recipe&limit=${limit}`;
  if (after) {
    pathWithQuery += `&after=${after}`;
  }
  const url =
    "https://ayijkoz9n4.execute-api.eu-west-1.amazonaws.com/dev/recipes/search" +
    pathWithQuery;
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

export const getRecipeFromAPI = async (id: string): Promise<IRecipeDetails> => {
  const url = `https://ayijkoz9n4.execute-api.eu-west-1.amazonaws.com/dev/recipe/?id=${id}`;
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

const loadingAll: ActionCreator<IRecipesIsFetchingAction> = () => ({
  type: RecipesActionTypes.IS_FETCHING
});
const loadingSingle: ActionCreator<IRecipesIsFetchingSingleAction> = () => ({
  type: RecipesActionTypes.IS_FETCHING_SINGLE
});

export const getRecipes: ActionCreator<
  ThunkAction<Promise<AnyAction>, IRecipesState, null, IRecipesGetAllAction>
> = (after: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingAll());
    // TODO make check if this after has already loaded
    const { data: items, paging } = await getRecipesFromAPI(after);
    return dispatch({
      items,
      paging,
      type: RecipesActionTypes.GET_ALL
    });
  };
};
export const getRecipe: ActionCreator<
  ThunkAction<Promise<AnyAction>, IRecipesState, null, IRecipesGetSingleAction>
> = (id: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingSingle());
    const item = await getRecipeFromAPI(id);
    return dispatch({
      item,
      type: RecipesActionTypes.GET_SINGLE
    });
  };
};
