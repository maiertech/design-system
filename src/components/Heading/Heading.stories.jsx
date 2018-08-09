import React from "react";
import { storiesOf } from "@storybook/react";
import Heading from "./Heading";
import Box from "../Box";

// eslint-disable-next-line react/prop-types
const anchor = ({ href, children }) => <a href={href}>{children}</a>;

storiesOf("components/Heading", module)
  .addDecorator(story => <Box m={1}>{story()}</Box>)

  .add("default heading without link", () => (
    <Heading>Default heading without link</Heading>
  ))
  .add("default heading with link", () => (
    <Heading
      link={{
        anchor,
        href: "#"
      }}
    >
      Default heading with link
    </Heading>
  ))
  .add("custom heading without link", () => (
    <Heading heading={children => <h2>{children}</h2>}>
      Custom heading without link
    </Heading>
  ))
  .add("custom heading with link", () => (
    <Heading
      link={{
        anchor,
        href: "#"
      }}
      heading={children => <h2>{children}</h2>}
    >
      Custom heading with link
    </Heading>
  ))
  .add("custom lineHeight", () => (
    <React.Fragment>
      <Heading>
        Default line height heading which is very very very very very very very
        very very very long to demonstrate title line height
      </Heading>
      <Heading lineHeight="solid">
        Custom line height heading which is very very very very very very very
        very very very long to demonstrate solid line height
      </Heading>
      <Heading lineHeight="copy">
        Custom line height heading which is very very very very very very very
        very very very long to demonstrate copy line height
      </Heading>
    </React.Fragment>
  ));
