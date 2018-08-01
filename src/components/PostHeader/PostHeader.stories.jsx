import React from "react";
import { storiesOf } from "@storybook/react";
import PostHeader from "./PostHeader";
import Box from "../Box";

storiesOf("components/PostHeader", module)
  .addDecorator(story => <Box m={1}>{story()}</Box>)
  .add("short title", () => (
    <PostHeader
      author="Thilo Maier"
      date="Aug 1, 2017"
      title="Cras ut malesuada"
    />
  ))
  .add("long title", () => (
    <PostHeader
      author="Thilo Maier"
      date="Aug 1, 2017"
      title="Sed rhoncus mi eu quam varius rutrum morbi eget condimentum velit nam sit amet est non tortor ullamcorper fringilla."
    />
  ));
