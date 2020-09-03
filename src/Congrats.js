import React from "react";
import PropTypes from "prop-types";

/**
 * Functional React component for congratulatory message
 * @function
 * @param {object} props React props
 * @returns {JSX.Element} Rendered component or "null" if success prop is falsy
 */
const Congrats = ({ success = false }) => {
  if (success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">Yay! Success!</span>
      </div>
    );
  }
  return <div data-test="component-congrats"></div>;
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
