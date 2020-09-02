import React from "react";
import Enzyme, { shallow, cofigure, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

test("renders without crashing", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='app-container']");

  expect(appComponent.length).toBe(1);
});
