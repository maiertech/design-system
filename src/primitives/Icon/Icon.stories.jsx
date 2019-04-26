import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import Icon from "./Icon";
import NewTabLink from "../NewTabLink";

storiesOf("Primitives/Icon", module)
  .addDecorator(withKnobs)
  .add("knobs", () => (
    <Icon
      type={select("type", { GitHub: "github", Twitter: "twitter" }, "github")}
      username={text("username", "454de6e")}
      color={text("color", "accent")}
      m={2}
    />
  ))
  .add("custom link", () => (
    <Icon link={NewTabLink} type="github" username="mdotasia" m={2} />
  ));
