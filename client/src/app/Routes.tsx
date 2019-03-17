import * as React from "react";
import { BrowserRouter as Router, Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import RecipesPage from "./containers/Recipes";
import RecipePage from "./containers/Recipes/RecipePage";
import NotFoundPage from "./NotFoundPage";



const RoutesWrap: React.FC = () => {
  return (
    <Router>
      <Route component={Routes} />
    </Router>
  );
};

class Routes extends React.Component<RouteComponentProps> {
  public constructor(props: RouteComponentProps) {
    super(props);
  }
  public render() {
    return (
      <div>
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} timeout={500} classNames="animate">
            <Switch>
              <Redirect exact={true} from="/" to="/recipes" />
              <Route path="/recipes/:id" component={RecipePage} />
              <Route exact={true} path="/recipes" component={RecipesPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default RoutesWrap;
