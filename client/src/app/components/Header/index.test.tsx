import * as React from "react";
import { shallow } from "enzyme";

import { Header } from "./index";

it("renders the heading", () => {
  const result = shallow(<Header />).contains(<h1>Recipes</h1>);
  expect(result).toBeTruthy();
});
