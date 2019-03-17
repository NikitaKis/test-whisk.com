import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import Recipe from "./Recipe";
import { getRecipe } from "app/actions";
import { IRecipeDetails } from "app/types/RecipeTypes";
import { IRootState } from "app/reducers";


const getRecipeDetailsById = (state: IRootState, id: string | null): IRecipeDetails | undefined => {
  let res;
  if (!id) return res;
  try {
    res = state.recipes.details.byId[id];
  } catch (e) {
    res = undefined;
  }
  return res;
};
interface IMatchParams {
  id: string;
}
interface RecipePageProps extends RouteComponentProps<IMatchParams> {
  getRecipe: typeof getRecipe;
  isFetching: boolean;
  recipe?: IRecipeDetails;
}

class RecipePage extends React.Component<RecipePageProps> {
  public componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getRecipe(this.props.match.params.id);
    }
  }

  public render() {
    const { recipe, isFetching } = this.props;
    if (!recipe && !isFetching) {
      return <p>Recipe not found!</p>;
    }
    return (
      <div className="page-container">
        <Recipe isFetching={isFetching} recipe={recipe} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getRecipe: (id: string) => dispatch(getRecipe(id))
  };
};

const mapStateToProps = (state: IRootState, ownProps: any) => {
  let id;
  try {
    ({ id } = ownProps.match.params);
  } catch (e) {
    id = null;
		
  }
  
  return {
    isFetching: state.recipes.details.isFetching,
    recipe: getRecipeDetailsById(state, id)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RecipePage));
