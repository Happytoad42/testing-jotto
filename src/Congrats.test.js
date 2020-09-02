import React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { findByTestAttr } from "../test/testUtils";
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory function to create a ShallowWrapper for Congrats component
 * @funtion setup
 * @param {object} props
 * @return {ShallowWrapper}
 */

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("renders without crashing", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test('renders no text whten "succes" prop is falsy', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});
test('renders non-empty success message then "success" prop is truthy', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});