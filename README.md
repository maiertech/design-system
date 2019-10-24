# @maiertech/components

Design system for [@maiertech](https://github.com/maiertech) websites. Built with [Theme UI](https://theme-ui.com/). Explore online: https://components.maier.tech.

## Install

Run

```bash
yarn add @maiertech/components
```

to add package [@maiertech/components](https://github.com/maiertech/components) to your dependencies. Import components like this

```jsx
import { Header, Footer } from '@maiertech/components';
```

## Development

Use [Storybook](https://storybook.js.org/) to develop components. Run

```bash
yarn run develop
```

Then open your browser at http://localhost:8000.

## Testing

Visual regression testing leverages the [Pixeldiff API](https://github.com/maiertech/pixeldiff) using [Jest](https://jestjs.io/) as test runner. The benchmark screenshots are managed in [this repository](https://github.com/maiertech/screenshots) and served from https://screenshots.maier.tech.

You need to tell the test runner which deployment to use via environment variable `DEPLOYMENT_URL`. You can set this environment variable manually, e.g. via your CI config. If `DEPLOYMENT_URL` is not set, the test runner will try to read it from file `.env` in the project root and, if unsuccessful, will test https://components.maier.tech.

If a test fails because the benmark screenshot and the deployment differ, you can copy `diffImgUrl` from the console and look at the visual diff to see why the test failed.
