import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import Provider from "./Provider";
import "jest-styled-components";
import defaultTheme from "../../themes/default";
import alternateTheme from "../../themes/alternate";

const Div = styled.div`
  color: ${props => props.theme.colors.default.text};
  background-color: ${props => props.theme.colors.default.background};
`;

describe("Provider", () => {
  test("no theme prop", () => {
    const tree = renderer
      .create(
        <Provider>
          <Div>I am a colorful div.</Div>
        </Provider>
      )
      .toJSON();
    // Colors from default theme.
    expect(tree).toHaveStyleRule("color", defaultTheme.colors.default.text);
    expect(tree).toHaveStyleRule(
      "background-color",
      defaultTheme.colors.default.background
    );
  });

  test("with theme prop", () => {
    const tree = renderer
      .create(
        <Provider theme={alternateTheme}>
          <Div>I am a colorful div.</Div>
        </Provider>
      )
      .toJSON();
    // Colors from theme prop.
    expect(tree).toHaveStyleRule("color", alternateTheme.colors.default.text);
    expect(tree).toHaveStyleRule(
      "background-color",
      alternateTheme.colors.default.background
    );
  });
});
