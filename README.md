# @mdotasia/components

Design system for [@mdotasia](https://github.com/mdotasia/) websites. Built with [Rebass](https://rebassjs.org/). Explore online: https://components.maier.asia.

## Install

Run

    yarn add @mdotasia/components

to add package [@mdotasia/components](https://github.com/mdotasia/components) to your dependencies. Import components like this

    import { Header, Footer } from "@mdotasia/components";

## Development

Use [Storybook](https://storybook.js.org/) to develop components in isolation. Run

    yarn start

Then open your browser at http://localhost:9009/.

## Testing

Visual regression testing is done with [Puppeteer](https://pptr.dev/). In order to eliminate cross-plattform rendering differences, we standardize component screenshots to Chromium screenshots on Linux. This means that on Mac and Windows you need to run visual regression tests with Docker.

On Linux simply run `yarn test`. On Mac and Windows you need to build a Docker image that can run Puppeteer. Run

    docker build config/docker/puppeteer -t puppeteer

to build image `puppeteer`. Then run

    docker run --rm -it -v $(pwd):/components -w /components puppeteer yarn test

to launch visual regression tests.

## Deployment

The storybook build is deployed to [Zeit](https://zeit.co/). If the deployed instance throws errors you can reproduce hosting on Zeit locally by running

    yarn run serve

This spins up [serve](https://github.com/zeit/serve) and serve a static pages as configured in `now.json`, just like in production.
