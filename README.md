# @mdotasia/components

A library of reusable [React](https://facebook.github.io/react/) components. Built with [styled-system](http://jxnblk.com/styled-system/). Explore online: https://components.maier.asia.

## Install

Run

    yarn add @mdotasia/components

to add package [@mdotasia/components](https://github.com/mdotasia/components) to your dependencies. Import components like this

    import { Header, Footer } from "@mdotasia/components";

## Development

Use [Storybook](https://storybook.js.org/) to develop components in isolation. Run

    yarn start

and opening your browser at http://localhost:9009/. While Storybook is up and running, you can run screenshot tests with

    yarn test

in a second terminal.

The storybook build is deployed to [Zeit](https://zeit.co/). If the deployed instance throws errors you can reproduce hosting on Zeit locally by running

    yarn run serve

This spins up [serve](https://github.com/zeit/serve) and serve a static pages as configured in `now.json`, just like in production.
