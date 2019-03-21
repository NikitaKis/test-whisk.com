import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import RecipesPage from "app/containers/Recipes";
import RecipePage from "app/containers/Recipe";
import { Navbar } from "app/components";
import NotFoundPage from "app/NotFoundPage";
import { configureStore } from "app/store";

const store = configureStore();

const renderApp = () =>
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Redirect exact from="/" to="/recipes" />
          <Route path="/recipes/:id" component={RecipePage} />
          <Route exact path="/recipes" component={RecipesPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
renderApp();

if (module.hot) {
  module.hot.accept(() => {
    renderApp();
  });
}
