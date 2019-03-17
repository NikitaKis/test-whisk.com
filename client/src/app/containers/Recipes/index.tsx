import * as React from "react";
import * as style from "./style.css";
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
  constructor(props: RecipesPageProps, context?: any) {
    super(props, context);
  }

  public componentDidMount() {
    this.props.getRecipes();
  }
  handleShowMore = () => {
    const { getRecipes, nextPage } = this.props;
    getRecipes(nextPage);
  };
  render() {
    const { recipes, isFetching } = this.props;
    return (
      <div className={style.app_container}>
        <Header />
        <RecipesList recipes={recipes} />
        <BtnWithLoader isFetching={isFetching} handleClick={this.handleShowMore}/>
      </div>
    );
  }
}
function mapStateToProps(state: IRootState) {
  const { recipes } = state;
  return {
    isFetching: recipes.isFetching,
    recipes: recipes.items,
    nextPage: recipes.nextPage
  };
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    getRecipes: (after: string) => dispatch(getRecipes(after))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RecipesPage));
