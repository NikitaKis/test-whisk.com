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
      const items = [...state.items];
      action.items.forEach(item => {
        const alreadyExisted = items.find(stateItem => stateItem.content.id === item.content.id)
        if (!alreadyExisted) {
          items.push(item)
        }
      })
      return {
        ...state,
        nextPage,
        items,
        isFetching: false
      };
    }
    case RecipesActionTypes.IS_FETCHING_SINGLE: {
      return {
        ...state,
        details: {
          ...state.details,
          isFetching: true
        }
      };
    }
    case RecipesActionTypes.GET_SINGLE: {
      return {
        ...state,
        details: {
          byId: {
            ...state.details.byId,
            [action.item.id]: action.item
          },
          isFetching: false
        }
      };
    }
  }
  return state;
};
