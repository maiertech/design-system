import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "./Icon";
import NewTabLink from "../NewTabLink";

storiesOf("Primitives/Icon", module)
  .addWithJSX("GitHub", () => <Icon type="github" username="mdotasia" m={2} />)
  .addWithJSX("Twitter", () => (
    <Icon type="twitter" username="mdotasia" m={2} />
  ))
  .addWithJSX("custom anchor", () => (
    <Icon link={NewTabLink} type="github" username="mdotasia" m={2} />
  ))
  .addWithJSX("custom color", () => (
    <Icon color="alternate" type="github" username="mdotasia" m={2} />
  ));
