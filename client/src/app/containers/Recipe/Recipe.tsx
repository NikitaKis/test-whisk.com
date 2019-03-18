import * as React from "react";
import { hot } from "react-hot-loader/root";
import { IRecipeDetails } from "app/types/RecipeTypes";
import { WithLoader } from "app/components/WithLoader";
import * as style from "./style.css";

interface IProps {
  recipe?: IRecipeDetails;
}

const Recipe: React.FC<IProps> = ({ recipe }) => {
  if (!recipe) return null;
  const { name, images, ingredients, instructions, description } = recipe;
  return (
    <React.Fragment>
      <div className={style.recipe_page_header}>
        <div className={style.recipe_page_container}>
          <div className={style.recipe_page_image}>
            <img src={images[0].url} alt={name} />
          </div>
          <div className={style.recipe_page_description}>
            <h1>{name}</h1>
            <div>{description}</div>
          </div>
        </div>
      </div>
      <div className={style.recipe_page_content}>
        <div className={style.recipe_page_container}>
          <div className={style.block_content}>
            <div>
              <h2>Ingredients</h2>
              <ul className={style.recipe_ingredients_container}>
                {ingredients.map(item => (
                  <li className={style.recipe_ingredients_item} key={item.text}>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Instructions</h2>
              <ul className={style.recipe_instructions_container}>
                {instructions &&
                  instructions.steps &&
                  instructions.steps.map(item => (
                    <li className={style.recipe_instructions_item} key={item.text}>
                      {item.text}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default hot(WithLoader(Recipe));
