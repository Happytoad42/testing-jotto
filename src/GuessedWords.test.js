import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../test/testUtils";

import GuessedWords from "./GuessedWords";

const defaultProps = [
  {
    guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
  },
];

/**
 * Factory function to create a ShallowWrapper for Congrats component
 * @funtion setup
 * @param {object} props
 * @return {ShallowWrapper}
 */

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("does not crash with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});
