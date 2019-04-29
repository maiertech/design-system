# @mdotasia/components

Design system for [@mdotasia](https://github.com/mdotasia/) websites. Built with [Rebass](https://rebassjs.org/). Explore online: https://components.maier.asia.

## Install

Run

```bash
yarn add @mdotasia/components
```

to add package [@mdotasia/components](https://github.com/mdotasia/components) to your dependencies. Import components like this

```jsx
import { Header, Footer } from "@mdotasia/components";
```

## Development

Use [Storybook](https://storybook.js.org/) to develop components in isolation. Run

```bash
yarn start
```

Then open your browser at http://localhost:9009/.

## Testing

Visual regression testing is done with [Puppeteer](https://pptr.dev/) on [Zeit Now v1](https://zeit.co/docs/v1/). Standardizing on Chromium screenshots on Linux eliminates cross-plattform rendering differences that would occur when running visual regression tests locally on different operating systems.

To launch visual regression tests on Zeit Now, run `npx now` from the project root. Obviously, this only works if you have sufficient permissions. If visual regression tests fail, you can access diffs of the most recent visual regression tests at https://diff.maier.asia and updated screenshots at the URL provided by Zeit Now (app ID: `screenshots`). If you are satisfied with the screenshots you need to manually create an alias for https://screenshots.maier.asia, which is the URL from which the comparison screenshots are pulled when running visual regression tests.

Here is an overview of the deployments that get triggered when running visual regression tests:

| URL                      | Type            | Config                      | Source Directory                    | Comment                                                                                                                                                       |
| :----------------------- | :-------------- | :-------------------------- | :---------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `components.maier.asia`  | v1 static build | `now.json` and `Dockerfile` | `/public` (inside Docker container) | Default deployment behavior for static builds on Zeit Now v1. Deploys only if visual regression tests pass. Run `now alias components` manually upon release. |
| `screenshots.maier.asia` | v1 static       | `test/now.screenshots.json` | `screenshots`                       | Deployment is triggered by `image-reporter.js`. Run `now alias screenshots` manually after verifying screenshots.                                             |
| `diff.maier.asia`        | v1 static       | `test/now.diff.json`        | `/public` (inside Docker container) | Deployment and alias is triggerd by `image-reporter.js`.                                                                                                      |

You should normally never run

```bash
yarn test
```

locally. Tests should pass on Linux, but will probably fail on other platforms due to subtle cross-platform rendering differences in Chromium.

Whenever you push a branch to GitHub, open a pull request or push to an existing pull request, visual regression tests are run on Zeit Now via [Zeit's GitHub app](https://zeit.co/github). Check individual commits or pull request comments for a link to the deployment on Zeit Now. If the logs show that tests have failed, you can access screenshot diffs at https://diff.maier.asia as described before.
