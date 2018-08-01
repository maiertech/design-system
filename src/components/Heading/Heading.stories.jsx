import React from "react";
import { storiesOf } from "@storybook/react";
import Heading from "./Heading";
import Box from "../Box";

const link = ({ href, children }) => <a href={href}>{children}</a>;

storiesOf("components/Heading", module)
  .addDecorator(story => <Box m={1}>{story()}</Box>)

  .add("default heading without link", () => (
    <Heading>Default heading without link</Heading>
  ))
  .add("default heading with link", () => (
    <Heading
      link={{
        anchor: link,
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
        anchor: link,
        href: "#"
      }}
      heading={children => <h2>{children}</h2>}
    >
      Custom heading with link
    </Heading>
  ));
