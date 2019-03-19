import * as React from "react";
import { IRecipe } from "../../types/RecipeTypes";
import * as style from "./style.css";
import RecipesListItem from './RecipesListItem'

interface IProps {
  recipes?: IRecipe[];
}

const RecipesList: React.FC<IProps> = props => {
  const { recipes } = props;
  return (
    <div className={style.app_container}>
    <div className={style.feed_list}>
      {recipes &&
        recipes.map(recipe => <RecipesListItem key={recipe.content.id} recipe={recipe} />)}
    </div>
    </div>
  );
};

export default RecipesList;
