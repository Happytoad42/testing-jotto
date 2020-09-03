import { ShallowWrapper } from "enzyme";
import checkPropTypes from "check-prop-types";

/**
 * Returns node(s) with given data-test attribute
 * @param {ShallowWrapper} wrapper Enzyme shallow wrapper
 * @param {string} val Value of data-test attribute to find
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, props) => {
  const propError = checkPropTypes(
    component.propTypes,
    props,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
