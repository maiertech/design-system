import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import '@storybook/addon-console';
import { GlobalStyle, theme } from '../../src';

addParameters({
  options: {
    panelPosition: 'bottom',
  },
});

// Add decorators before require.context:
// https://github.com/storybooks/storybook/issues/3246
addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {story()}
    </>
  </ThemeProvider>
));

function loadStories() {
  // You can have multiple definitions from where to load stories.
  // Loading order determines order in UI.
  const req = require.context('../../src/components', true, /\.stories\.js$/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
