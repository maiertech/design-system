# @mdotasia/components

A library of reusable [React](https://facebook.github.io/react/) components. Built with

* [Rebass](http://jxnblk.com/rebass/)
* [Styled System](http://jxnblk.com/styled-system/)
* [Styled Components](https://www.styled-components.com/).
  Explore with [Storybook](https://storybooks.js.org/).

## Installation and Use

Run

```bash
yarn add mda-components
```

to add package [mda-components](https://github.com/mdotasia/mda-components) to your dependencies.

You can import components like this

```javascript
import { Header } from "mda-components";
```

and and use them like any other component in your code.

## Global CSS

You will likely need some global styles, e.g. a browser reset such as
[normalize.css](https://necolas.github.io/normalize.css/) or `@font-face` declarations. There are
many ways to add global CSS and this library leaves it up to you to decide which global CSS you use
and how to include it.

For a minimalistic reset, you can use
[`injectGlobal`](https://www.styled-components.com/docs/api#injectglobal) from
[styled components](https://www.styled-components.com/):

```javascript
import { injectGlobal } from "styled-components";

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`;
```
