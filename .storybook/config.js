import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import pkg from '../package.json';

// Automatically import all *.story.jsx files.
const req = require.context('../src', true, /story\.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

setOptions({
  name: pkg.name,
  url: pkg.homepage,
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: true,
});

configure(loadStories, module);
