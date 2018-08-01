import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import Header from "./Header";

const title = "Header Title";
const links = [
  {
    href: "#",
    text: "Blog"
  },
  {
    href: "#",
    text: "About"
  },
  {
    href: "#",
    text: "Archive"
  }
];

storiesOf("components/Header", module)
  .add("default anchor", () => <Header title={title} links={links} />)
  .add("custom anchor", () => (
    <MemoryRouter>
      <Header
        title={title}
        links={links}
        anchor={({ href, children }) => <NavLink to={href}>{children}</NavLink>}
      />
    </MemoryRouter>
  ));
