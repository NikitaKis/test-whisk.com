import { Store, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { IRootState, rootReducer } from "app/reducers";

export const configureStore = (
  initialState?: IRootState
): Store<IRootState> => {
  const middleware = [thunk, logger];
  const enhancer = composeWithDevTools(applyMiddleware(...middleware));
  const store = createStore(
    rootReducer as any,
    initialState as any,
    enhancer
  ) as Store<IRootState>;

  if (module.hot) {
    module.hot.accept("app/reducers", () => {
      const nextReducer = require("app/reducers");
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
