# @mdotasia/components

A library of reusable [React](https://facebook.github.io/react/) components. Built with [styled-system](http://jxnblk.com/styled-system/). Explore online: https://components.maier.asia.

## Install

Run

    yarn add @mdotasia/components

to add package [@mdotasia/components](https://github.com/mdotasia/components) to your dependencies. Import components like this

    import { Header, Footer } from "@mdotasia/components";

## Development

You can develop on Linux, Mac or Windows. For Mac and Windows you need to install [Docker](https://www.docker.com/). Use [Storybook](https://storybook.js.org/) to develop components in isolation. Run

    yarn start

on Linux and Mac and

    docker run --rm -it -v "$(pwd)":/components -w /components -p 9009:9009 mhart/alpine-node:8 yarn start

on Windows. Then open your browser at http://localhost:9009/. For any other yarn/npm commands you can omit port mapping:

    docker run --rm -it -v "$(pwd)":/components -w /components mhart/alpine-node:8 <command>

## Testing

Visual regression testing is done with [Puppeteer](https://pptr.dev/). In order to eliminate cross-plattform rendering differences, we take component screenshots on Linux only. This means that on Mac and Windows you need to run visual regression test with Docker.

On Linux simply run

    yarn test

On Mac and Windows you need to build a Docker image that can run Puppeteer. Run

    docker build config/docker/puppeteer -t puppeteer

to build image `puppeteer`. Then run

    docker run --rm -it -v "$(pwd)":/components -w /components puppeteer yarn test

to launch visual regression tests.

## Deployment

The storybook build is deployed to [Zeit](https://zeit.co/). If the deployed instance throws errors you can reproduce hosting on Zeit locally by running

    yarn run serve

This spins up [serve](https://github.com/zeit/serve) and serve a static pages as configured in `now.json`, just like in production.
