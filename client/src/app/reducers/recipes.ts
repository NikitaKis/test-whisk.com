import { Reducer } from "redux";

import { IRecipesState, RecipesActions, RecipesActionTypes } from "../types/RecipeTypes";

const initialProductState: IRecipesState = {
  items: [],
  nextPage: null,
  isFetching: false,
  details: {
    isFetching: false,
    byId: {}
  }
};

export const recipeReducer: Reducer<IRecipesState, RecipesActions> = (state = initialProductState, action) => {
  switch (action.type) {
    case RecipesActionTypes.IS_FETCHING: {
      return {
        ...state,
        isFetching: true
      };
    }
    case RecipesActionTypes.GET_ALL: {
      let nextPage = null;
      try {
        if (action.paging.cursors) nextPage = action.paging.cursors.after;
      } catch (e) {
        nextPage = null;
      }
      return {
        ...state,
        nextPage,
        items: [...state.items, ...action.items],
        isFetching: false
      };
    }
    case RecipesActionTypes.GET_SINGLE: {
      return {
        ...state,
        currentRecipe: action.recipe,
        isFetching: false
      };
    }
  }
  return state;
};
