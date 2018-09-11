import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "./Icon";
import NewTabLink from "../NewTabLink";

storiesOf("Primitives/Icon", module)
  .add("GitHub", () => <Icon type="github" username="mdotasia" m={2} />)
  .add("Twitter", () => <Icon type="twitter" username="mdotasia" m={2} />)
  .add("custom anchor", () => (
    <Icon link={NewTabLink} type="github" username="mdotasia" m={2} />
  ));
