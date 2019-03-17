import * as React from "react";
import { IRecipeDetails } from "app/types/RecipeTypes";
import { WithLoader } from "app/components/WithLoader";

interface IProps {
  recipe?: IRecipeDetails;
}

const Recipe: React.FC<IProps> = ({ recipe }) => {

  if (!recipe) return null;
  return (
    <React.Fragment>
      <h1>{recipe.name}</h1>
    </React.Fragment>
  );
};
export default WithLoader(Recipe);
