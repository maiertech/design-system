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

Visual regression testing is done with [Puppeteer](https://pptr.dev/). In order to eliminate cross-plattform rendering differences, we standardize component screenshots to Chromium screenshots on Linux. This means that on Mac you need to run visual regression tests with Docker.

On Linux simply run `yarn test`. On Mac you need to build a Docker image that can run Puppeteer. Run

    docker build config/docker/puppeteer -t puppeteer

to build image `puppeteer` from `config/docker/puppeteer/Dockerfile`. Then run

    docker run --rm -it -v $(pwd):/components -w /components puppeteer yarn test

to run visual regression with Docker. Every now and then you should rebuild the `puppeteer` image and pull the underlying base image to receive the latest patches and updates:

    docker build --pull config/docker/puppeteer -t puppeteer

As an alternative to Docker, any pull request triggers visual regression testing on [Zeit Now](https://zeit.co/dashboard) via [Zeit's GitHub integration](https://zeit.co/github). Check GitHub's pull request checks for a link to the logs in case tests fail. You can access the latest screenshot diffs at https://diff.maier.asia.

The screenshots used for testing are hosted on https://screenshots.maier.asia.
