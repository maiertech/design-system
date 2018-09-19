import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "./Header";
import NewTabLink from "../../primitives/NewTabLink";

const title = "Header Title";
const links = [
  {
    href: "#blog",
    text: "Blog"
  },
  {
    href: "#about",
    text: "About"
  },
  {
    href: "#archive",
    text: "Archive"
  }
];

storiesOf("Composites/Header", module)
  .addWithJSX("default link", () => <Header title={title} links={links} />)
  .addWithJSX("custom link", () => (
    <Header title={title} links={links} link={NewTabLink} />
  ));
