import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { getRecipes } from "app/actions";
import { IRootState } from "app/reducers";
import { IRecipe } from "app/types/RecipeTypes";
import { Header } from "app/components";
import BtnWithLoader from "app/components/BtnWithLoader";
import RecipesList from "./RecipesList";

interface RecipesPageProps extends RouteComponentProps<void> {
  recipes: IRecipe[];
  isFetching: boolean;
  getRecipes: typeof getRecipes;
  nextPage: string;
}

class RecipesPage extends React.Component<RecipesPageProps> {
  public componentDidMount() {
    const { recipes, isFetching } = this.props;
    if (recipes.length === 0 && !isFetching) this.props.getRecipes();
  }
  handleShowMore = () => {
    const { getRecipes, nextPage } = this.props;
    getRecipes(nextPage);
  };
  render() {
    const { recipes, isFetching } = this.props;
    return (
      <div>
        <Header />
        <RecipesList recipes={recipes} />
        <BtnWithLoader isFetching={isFetching} handleClick={this.handleShowMore} />
      </div>
    );
  }
}
const mapStateToProps = (state: IRootState) => {
  const { recipes } = state;
  return {
    isFetching: recipes.isFetching,
    recipes: recipes.items,
    nextPage: recipes.nextPage
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    getRecipes: (after: string) => dispatch(getRecipes(after))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RecipesPage));
