import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Icon from "./Icon";
import Provider from "../Provider";

// jest-styled-components does not work with react-testing-library, therefor use react-test-renderer.

describe("Icon", () => {
  test("GitHub icon", () => {
    expect(
      renderer
        .create(
          <Provider>
            <Icon type="github" username="mdotasia" />
          </Provider>
        )
        .toJSON()
    ).toMatchSnapshot();
  });

  test("Twitter icon", () => {
    expect(
      renderer.create(
        <Provider>
          <Icon type="twitter" username="mdotasia" />
        </Provider>
      )
    ).toMatchSnapshot();
  });
});
