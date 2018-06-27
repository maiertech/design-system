# @mdotasia/components

A library of reusable [React](https://facebook.github.io/react/) components. Built with [styled-components](https://www.styled-components.com/) and [styled-system](http://jxnblk.com/styled-system/).

## Explore

You can explore all components by launching [Storybook](https://storybook.js.org/) with

    yarn start

and opening your browser at [http://localhost:9009/](http://localhost:9009/). You can also explore the storybook online: [https://components.maier.asia](https://components.maier.asia).

## Install

Run

    yarn add @mdotasia/components

to add package [@mdotasia/components](https://github.com/mdotasia/components) to your dependencies. You can then import components like this

    import { Header, Footer } from "@mdotasia/components";

## Use

Even though this library uses [styled-system](http://jxnblk.com/styled-system/) under the hood, it is not necessary to understand the styled-system API to use its components. You can think of styled-components and styled-system as implementation details which you can levarage if you want or simply ignore. Neither are peer dependencies.

## Development

Run Storybook locally with

    yarn start

while you develop. Use Storybook to develop components in isolation. In order to run screenshot tests, while Storybook is up and running, run

    yarn test

in a separate terminal.

## Releases

Releases are done with [release](https://github.com/zeit/release) by [Zeit](https://zeit.co/dashboard). Run

    yarn run release

with one of `major`, `minor` and `patch` as argument. This created the release and release notes. Subsequently, Storybook is published to Zeit.
