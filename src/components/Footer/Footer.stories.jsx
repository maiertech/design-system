import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import Footer from "./Footer";

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

storiesOf("components/Footer", module)
  .add("default anchors", () => (
    <Footer title="This is the Footer Title" name="Thilo Maier" links={links} />
  ))
  .add("custom internal anchor", () => (
    <MemoryRouter>
      <Footer
        title="This is the Footer Title"
        name="Thilo Maier"
        links={links}
        internalAnchor={({ href, children }) => (
          <NavLink to={href}>{children}</NavLink>
        )}
      />
    </MemoryRouter>
  ))
  .add("custom external anchor", () => (
    <Footer
      title="This is the Footer Title"
      name="Thilo Maier"
      links={links}
      externalAnchor={({ href, children }) => (
        <a href={href} target="_blank" rel="noreferrer noopener">
          {children}
        </a>
      )}
    />
  ))
  .add("last updated", () => (
    <Footer
      lastUpdated="Aug 1, 2018"
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
