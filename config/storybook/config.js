import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import Provider from '../../src/helpers/Provider';
import '@storybook/addon-console';

addParameters({
  options: {
    panelPosition: 'bottom',
  },
});

// Add decorators before require.context:
// https://github.com/storybooks/storybook/issues/3246
addDecorator(story => <Provider>{story()}</Provider>);

function loadStories() {
  // Sort order of nested stories is determined by loading order.

  // Load primitives.
  let req = require.context('../../src/primitives', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));

  // Load composites.
  req = require.context('../../src/composites', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
