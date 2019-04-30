import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { Provider } from '../../src';
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
  // You can have multiple definitions from where to load stories.
  // Loading order determines order in UI.
  const req = require.context('../../src/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
