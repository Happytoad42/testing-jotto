import { ShallowWrapper } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import rootReducer from '../reducers';
import { middlewares } from '../configureStore';
import { createStore, applyMiddleware } from 'redux';

/**
 * Factory function to create a store using desired mock state, existing reducers and middleware
 * @global rootReducer, middlewares
 * @funtion storeFactory
 * @param {object} initialState Mock state to test with
 * @returns {Store} Redux store
 */
export const storeFactory = (initialState = {}) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};

/**
 * Returns node(s) with given data-test attribute
 * @param {ShallowWrapper} wrapper Enzyme shallow wrapper
 * @param {string} val Value of data-test attribute to find
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

/**
 * Checks if component prop-types match given value
 * @function checkProps
 * @param {JSXComponent} component React component to perform check on
 * @param {object} props Default props to match component prop-types
 * @returns If given props matches component prop types
 */
export const checkProps = (component, props) => {
  const propError = checkPropTypes(
    component.propTypes,
    props,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};
