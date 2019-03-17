import * as React from "react";
import { Route, Switch } from "react-router";
import RecipesPage from "app/containers/Recipes";
import { hot } from "react-hot-loader";

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" component={RecipesPage} />
  </Switch>
));
