import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";

import App from "./App";

/**
 * Factory function to create a ShallowWrapper for Congrats component
 * @funtion setup
 * @param {object} props
 * @return {ShallowWrapper}
 */

const setup = (props = {}) => {
  return shallow(<App {...props} />);
};

test("renders without crashing", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "app-container");
  expect(appComponent.length).toBe(1);
});
