import React from "react";
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs/react";
import Icon from "./Icon";
import NewTabLink from "../NewTabLink";

storiesOf("Primitives/Icon", module)
  .addWithJSX("knobs", () => (
    <Icon
      type={select("type", { github: "GitHub", twitter: "Twitter" }, "github")}
      username={text("username", "mdotasia")}
      color={text("color", "accent")}
      m={2}
    />
  ))
  .addWithJSX("custom link", () => (
    <Icon link={NewTabLink} type="github" username="mdotasia" m={2} />
  ));
