import * as React from "react";
import { Link } from "react-router-dom";
import { IRecipe } from "../../types/RecipeTypes";
import * as style from "./style.css";

interface IProps {
  recipe: IRecipe;
}

const RecipesListItem: React.FC<IProps> = ({ recipe }) => {
  const { id, name, author, images } = recipe.content;
  return (
    <div className={style.recipe_card}>
      <div className={style.recipe_card_container}>
        <Link to={`/recipes/${id}`}>
          <div className={style.recipe_card_image_container}>
            <img src={images[0].url} alt={name} />
          </div>
          <div className={style.recipe_card_content}>
            <div className={style.recipe_card_title}>{name}</div>
            <div className={style.recipe_card_subtitle}>{author && author.name}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default RecipesListItem;
