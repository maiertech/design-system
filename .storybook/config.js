import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { injectGlobal } from 'styled-components';
import pkg from '../package.json';

// Set global styles.
// See https://github.com/jxnblk/rebass#components.
injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`

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
