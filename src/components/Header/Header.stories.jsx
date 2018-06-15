import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import Header from "./Header";

storiesOf("Header", module)
  .add("default anchor", () => (
    <Header
      title={{
        href: "/?selectedKind=Header&selectedStory=default%20anchor",
        text: "With default anchor"
      }}
      links={[
        {
          href: "/?selectedKind=Header&selectedStory=default%20anchor",
          text: "Blog"
        },
        {
          href: "/?selectedKind=Header&selectedStory=default%20anchor",
          text: "About"
        },
        {
          href: "/?selectedKind=Header&selectedStory=default%20anchor",
          text: "Archive"
        }
      ]}
    />
  ))
  .add("custom anchor", () => (
    <MemoryRouter>
      <Header
        title={{
          href: "/?selectedKind=Header&selectedStory=custom%20anchor",
          text: "With custom anchor"
        }}
        links={[
          {
            href: "/?selectedKind=Header&selectedStory=custom%20anchor",
            text: "Blog"
          },
          {
            href: "/?selectedKind=Header&selectedStory=custom%20anchor",
            text: "About"
          },
          {
            href: "/?selectedKind=Header&selectedStory=custom%20anchor",
            text: "Archive"
          }
        ]}
        anchor={(href, text) => <NavLink to={href}>{text}</NavLink>}
      />
    </MemoryRouter>
  ));
