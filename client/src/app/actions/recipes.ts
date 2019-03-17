import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  IRecipe,
  IRecipesGetAllAction,
  IRecipesIsFetchingAction,
  IRecipesState,
  RecipesActionTypes,
  IRecipesGetSingleAction,
  IRecipesPaging
} from "../types/RecipeTypes";

export const recipes: IRecipe[] = [
  {
    content: {
      id: "99f4c5ebca5d11e7ae7e42010a9a0035",
      name: "Spanish chicken traybake with chorizo & peppers",
      description:
        "Add this easy dinner recipe to your repertoire - simply pop herby chicken thighs into a roasting tin with colourful veg and spicy sausage",
      ingredients: [
        {
          text: "4 fat garlic cloves"
        },
        {
          text: "1 tbsp fresh thyme leaves, plus a few sprigs"
        }
      ],
      images: [
        {
          url:
            "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/take-it-to-10-chicken.jpg",
          responsive: {
            url:
              "https://whisk-res.cloudinary.com/image/upload/v1523012230/recipe/707fc86b9221c28ccaf853ff156bf37c.jpg",
            width: 454,
            height: 500
          }
        }
      ],
      author: {
        name: "Sara Buenfeld"
      },
      language: "en"
    }
  },
  {
    content: {
      id: "991ab6f4ca5d11e7ae7e42010a9a0035",
      name: "Indian mince with fresh tomato salad",
      description: "This flavour-packed dish is super-cheap and speedy to make, the perfect family meal",
      ingredients: [
        {
          text: "1 red onion, sliced"
        },
        {
          text: "300g beef mince"
        },
        {
          text: "2 tbsp medium or mild curry powder"
        },
        {
          text: "100g dried red lentils"
        },
        {
          text: "700ml hot beef stock"
        },
        {
          text: "3 tomatoes"
        },
        {
          text: "handful coriander leaves"
        },
        {
          text: "4 mini naan bread"
        }
      ],
      images: [
        {
          url:
            "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--47835_11.jpg",
          responsive: {
            url:
              "https://whisk-res.cloudinary.com/image/upload/v1523011785/recipe/664f8e78ade7d30abf5d24a8b66c5341.jpg",
            width: 454,
            height: 500
          }
        }
      ],
      author: {
        name: "Good Food"
      },
      language: "en"
    }
  }
];

export const getRecipesFromAPI = async (after: string): Promise<{ data: IRecipe[]; paging: IRecipesPaging }> => {
  const limit = 24;
  let pathWithQuery = `?type=recipe&limit=${limit}`;
  if (after) {
    pathWithQuery += `&after=${after}`;
  }
  const url = "https://ayijkoz9n4.execute-api.eu-west-1.amazonaws.com/dev/recipes/search" + pathWithQuery;
  console.log("TCL: url", url);
  const response = await fetch(url);
  const json = await response.json();
  return json;
};
export const getRecipeFromAPI = async (id: string): Promise<IRecipe> => {
  await wait(2000);
  return recipes[0];
};

const loading: ActionCreator<IRecipesIsFetchingAction> = () => ({
  type: RecipesActionTypes.IS_FETCHING
});

export const getRecipes: ActionCreator<ThunkAction<Promise<AnyAction>, IRecipesState, null, IRecipesGetAllAction>> = (
  after: string
) => {
  return async (dispatch: Dispatch) => {
    dispatch(loading());
    const { data: items, paging } = await getRecipesFromAPI(after);
    return dispatch({
      items,
      paging,
      type: RecipesActionTypes.GET_ALL
    });
  };
};
export const getRecipe: ActionCreator<ThunkAction<Promise<AnyAction>, IRecipesState, null, IRecipesGetSingleAction>> = (
  id: string
) => {
  return async (dispatch: Dispatch) => {
    dispatch(loading());
    const items = await getRecipeFromAPI(id);
    return dispatch({
      items,
      type: RecipesActionTypes.GET_SINGLE,
      id
    });
  };
};

const wait = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
