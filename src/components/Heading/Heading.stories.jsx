import React from "react";
import { storiesOf } from "@storybook/react";
import Heading from "./Heading";

storiesOf("Heading", module)
  .add("default heading without link", () => (
    <Heading p={2}>Default heading without link</Heading>
  ))
  .add("default heading with link", () => (
    <Heading
      link={{
        anchor: (href, text) => <a href={href}>{text}</a>,
        href: "#"
      }}
      p={2}
    >
      Default heading with link
    </Heading>
  ))
  .add("custom heading without link", () => (
    <Heading heading={children => <h2>{children}</h2>} p={2}>
      Custom heading without link
    </Heading>
  ))
  .add("custom heading with link", () => (
    <Heading
      link={{
        anchor: (href, text) => <a href={href}>{text}</a>,
        href: "#"
      }}
      heading={children => <h2>{children}</h2>}
      p={2}
    >
      Custom heading with link
    </Heading>
  ));
