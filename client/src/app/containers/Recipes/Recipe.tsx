import * as React from "react";
import { IRecipeDetails } from "app/types/RecipeTypes";
import { WithLoader } from "app/components/WithLoader";
import * as style from "./style.css";

interface IProps {
  recipe?: IRecipeDetails;
}

const Recipe: React.FC<IProps> = ({ recipe }) => {
  if (!recipe) return null;
  const { name, images } = recipe
  return (
    <React.Fragment>
      <div className={style.recipe_page_header}>
        <div className={style.recipe_page_container}>
        <div className={style.recipe_page_image}>
            <img src={images[0].url} alt={name} />
        </div>
          <div className={style.recipe_page_description}>
            <h1>{recipe.name}</h1>
          </div>
          
        </div>
      </div>
    </React.Fragment>
  );
};
export default WithLoader(Recipe);
