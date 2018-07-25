import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import Header from "./Header";

storiesOf("Header", module)
  .add("default anchor", () => (
    <Header
      title={{
        href: "#",
        text: "Linked Header Title"
      }}
      links={[
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
      ]}
    />
  ))
  .add("custom anchor", () => (
    <MemoryRouter>
      <Header
        title={{
          href: "#",
          text: "Linked Header Title"
        }}
        links={[
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
        ]}
        anchor={({ href, children }) => <NavLink to={href}>{children}</NavLink>}
      />
    </MemoryRouter>
  ));
