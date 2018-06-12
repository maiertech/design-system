import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import Footer from "./Footer";

const links = [
  {
    href: "/?selectedKind=Footer&selectedStory=default%20render%20prop",
    text: "Blog"
  },
  {
    href: "/?selectedKind=Footer&selectedStory=default%20render%20prop",
    text: "About"
  },
  {
    href: "/?selectedKind=Footer&selectedStory=default%20render%20prop",
    text: "Archive"
  }
];

storiesOf("Footer", module)
  .add("default render prop", () => (
    <Footer
      title="Footer with default render prop"
      name="Thilo Maier"
      links={links}
    />
  ))
  .add("custom render prop", () => (
    <MemoryRouter>
      <Footer
        title="Footer with custom render prop"
        name="Thilo Maier"
        links={links}
        render={(href, text) => <NavLink to={href}>{text}</NavLink>}
      />
    </MemoryRouter>
  ))
  .add("many links that wrap", () => (
    <Footer
      title="Footer with many links that wrap"
      name="Thilo Maier"
      links={[
        {
          href:
            "/?selectedKind=Footer&selectedStory=many%20links%20that%20wrap",
          text: "One"
        },
        {
          href:
            "/?selectedKind=Footer&selectedStory=many%20links%20that%20wrap",
          text: "Two"
        },
        {
          href:
            "/?selectedKind=Footer&selectedStory=many%20links%20that%20wrap",
          text: "Three"
        },
        {
          href:
            "/?selectedKind=Footer&selectedStory=many%20links%20that%20wrap",
          text: "Four"
        },
        {
          href:
            "/?selectedKind=Footer&selectedStory=many%20links%20that%20wrap",
          text: "Five"
        },
        {
          href:
            "/?selectedKind=Footer&selectedStory=many%20links%20that%20wrap",
          text: "Six"
        },
        {
          href:
            "/?selectedKind=Footer&selectedStory=many%20links%20that%20wrap",
          text: "Seven"
        },
        {
          href:
            "/?selectedKind=Footer&selectedStory=many%20links%20that%20wrap",
          text: "Eight"
        },
        {
          href:
            "/?selectedKind=Footer&selectedStory=many%20links%20that%20wrap",
          text: "Nine"
        },
        {
          href:
            "/?selectedKind=Footer&selectedStory=many%20links%20that%20wrap",
          text: "Ten"
        },
        {
          href:
            "/?selectedKind=Footer&selectedStory=many%20links%20that%20wrap",
          text: "Eleven"
        },
        {
          href:
            "/?selectedKind=Footer&selectedStory=many%20links%20that%20wrap",
          text: "Twelve"
        },
        {
          href:
            "/?selectedKind=Footer&selectedStory=many%20links%20that%20wrap",
          text: "Thirteen"
        },
        {
          href:
            "/?selectedKind=Footer&selectedStory=many%20links%20that%20wrap",
          text: "Fourteen"
        },
        {
          href:
            "/?selectedKind=Footer&selectedStory=many%20links%20that%20wrap",
          text: "Fifteen"
        },
        {
          href:
            "/?selectedKind=Footer&selectedStory=many%20links%20that%20wrap",
          text: "Sixteen"
        },
        {
          href:
            "/?selectedKind=Footer&selectedStory=many%20links%20that%20wrap",
          text: "Seveteen"
        },
        {
          href:
            "/?selectedKind=Footer&selectedStory=many%20links%20that%20wrap",
          text: "Eighteen"
        },
        {
          href:
            "/?selectedKind=Footer&selectedStory=many%20links%20that%20wrap",
          text: "Nineteen"
        },
        {
          href:
            "/?selectedKind=Footer&selectedStory=many%20links%20that%20wrap",
          text: "Twenty"
        }
      ]}
    />
  ));
