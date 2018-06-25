import React from "react";
import { configure, addDecorator } from "@storybook/react";
import Provider from "../src/components/Provider";

// Add decorators before require.context:
// https://github.com/storybooks/storybook/issues/3246
addDecorator(story => <Provider>{story()}</Provider>);

const req = require.context("../src", true, /\.stories\.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
