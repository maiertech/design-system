import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import Footer from "./Footer";

storiesOf("Footer", module)
  .add("default anchor", () => {
    return (
      <Footer
        title="This is the Footer Title"
        name="Thilo Maier"
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
    );
  })
  .add("custom anchor", () => (
    <MemoryRouter>
      <Footer
        title="This is the Footer Title"
        name="Thilo Maier"
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
        anchor={(href, text) => <NavLink to={href}>{text}</NavLink>}
      />
    </MemoryRouter>
  ))
  .add("many links that wrap", () => (
    <Footer
      title="This is the Footer Title"
      name="Thilo Maier"
      links={[
        {
          href: "#",
          text: "One"
        },
        {
          href: "#",
          text: "Two"
        },
        {
          href: "#",
          text: "Three"
        },
        {
          href: "#",
          text: "Four"
        },
        {
          href: "#",
          text: "Five"
        },
        {
          href: "#",
          text: "Six"
        },
        {
          href: "#",
          text: "Seven"
        },
        {
          href: "#",
          text: "Eight"
        },
        {
          href: "#",
          text: "Nine"
        },
        {
          href: "#",
          text: "Ten"
        },
        {
          href: "#",
          text: "Eleven"
        },
        {
          href: "#",
          text: "Twelve"
        },
        {
          href: "#",
          text: "Thirteen"
        },
        {
          href: "#",
          text: "Fourteen"
        },
        {
          href: "#",
          text: "Fifteen"
        },
        {
          href: "#",
          text: "Sixteen"
        },
        {
          href: "#",
          text: "Seveteen"
        },
        {
          href: "#",
          text: "Eighteen"
        },
        {
          href: "#",
          text: "Nineteen"
        },
        {
          href: "#",
          text: "Twenty"
        }
      ]}
    />
  ));
