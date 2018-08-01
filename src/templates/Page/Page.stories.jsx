import React from "react";
import { storiesOf } from "@storybook/react";
import Page from "./Page";

storiesOf("templates/Page", module)
  .add("short heading", () => (
    <Page title="This is a short heading">
      <div>This is the page content.</div>
    </Page>
  ))
  .add("long heading", () => (
    <Page title="This is a very very very very very very very very very very very very very very very very very very very very very very very very very very very long heading">
      <div>This is the page content.</div>
    </Page>
  ));
