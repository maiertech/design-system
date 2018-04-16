# @mdotasia/components

A library of reusable [React](https://facebook.github.io/react/) components. Built with [Styled Components](https://www.styled-components.com/).

## Explore

You can explore all components by launching the catalog:

    yarn catalog-start

and open your browser at [http://localhost:4000/](http://localhost:4000/). You can also explore the catalog online: [https://components.maier.asia](https://components.maier.asia).

## Installation

Run

    yarn add @mdotasia/components

to add package [@mdotasia/components](https://github.com/mdotasia/components) to your dependencies. You can then import components like this

```code
lang: js
---
import { Header, Footer } from "@mdotasia/components";
```

## Global CSS

You will likely need some global styles, e.g. a browser reset such as [normalize.css](https://necolas.github.io/normalize.css/) or `@font-face` declarations. There are many ways to add global CSS. This library leaves it up to you to decide which global CSS you use and how to include it.

For a minimalistic reset, you can use [`injectGlobal`](https://www.styled-components.com/docs/api#injectglobal) from
[styled components](https://www.styled-components.com/):

```code
lang: js
---
import { injectGlobal } from "styled-components";

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`;
```
