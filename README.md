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

Visual regression testing is done with [Puppeteer](https://pptr.dev/). In order to eliminate cross-plattform rendering differences, we standardize on Chromium screenshots on Linux.

### Running Tests Locally

On Linux simply run

```bash
yarn test
```

The same command on Mac will lead to subtle cross-plattform rendering differences and fail some of the tests. Therefore, on Mac you need to build a Docker image that can run Puppeteer. Run

```bash
docker build config/docker/puppeteer -t puppeteer
```

to build image `puppeteer` from `config/docker/puppeteer/Dockerfile`. Then run

```bash
docker run --rm -it -v $(pwd):/components -w /components puppeteer yarn
```

to install Puppeteer for Linux and other Linux specific dependencies. Type

```bash
docker run --rm -it -v $(pwd):/components -w /components puppeteer yarn test
```

to run all visual regression tests with Docker.

You can review diffs of failing tests in the `test` folder.

### Running Tests on Zeit Now

Whenever you push a branch to GitHub, open a pull request or push to an existing pull request, visual regression tests are run on Zeit Now via [Zeit's GitHub integration](https://zeit.co/github). Check individual commits or pull request comments for a link to the deployment on Zeit Now. If the logs show that tests have failed, you can access corresponding screenshot diffs at https://diff.maier.asia.

### Managing Screenshots

The screenshots against which visual regression tests run are hosted at https://screenshots.maier.asia. They are published manually to [Zeit Now](https://zeit.co/dashboard) from the `screenshots` folder. After test run, all existing or updated screenshots are copied to `screenshots`. From there you can publish manually by running `now` inside this folder.

To update failing screenshots, run

```bash
yarn test -u
```

on Linux or

```bash
docker run --rm -it -v $(pwd):/components -w /components puppeteer yarn test -u
```

on Mac.

### Updating the Docker Image

Every now and then you should rebuild the `puppeteer` Docker image and pull the underlying base image to receive the latest patches and updates:

```bash
docker build --pull config/docker/puppeteer -t puppeteer
```
