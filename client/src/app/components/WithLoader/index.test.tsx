import * as React from "react";
import { mount } from "enzyme";

import { WithLoader } from "./index";

const Component: React.FC<any> = props => {
  return <div>Component</div>;
};

const WithLoaderComponent = WithLoader(Component);

const wrapperWithLoader = mount(<WithLoaderComponent isFetching={true} />);
it("renders the loader with isFetching=true", () => {
  expect(wrapperWithLoader.contains(<div>Component</div>)).toEqual(false);
});

const wrapperWOLoader = mount(<WithLoaderComponent isFetching={false} />);
it("renders the Component with isFetching=false", () => {
  expect(wrapperWOLoader.contains(<div>Component</div>)).toEqual(true);
});
