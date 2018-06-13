import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import Footer from "./Footer";

storiesOf("Footer", module)
  .add("default anchor", () => (
    <Footer
      title="Footer with default anchor"
      name="Thilo Maier"
      links={[
        {
          href: "/?selectedKind=Footer&selectedStory=default%20anchor",
          text: "Blog"
        },
        {
          href: "/?selectedKind=Footer&selectedStory=default%20anchor",
          text: "About"
        },
        {
          href: "/?selectedKind=Footer&selectedStory=default%20anchor",
          text: "Archive"
        }
      ]}
    />
  ))
  .add("custom anchor", () => (
    <MemoryRouter>
      <Footer
        title="Footer with custom anchor"
        name="Thilo Maier"
        links={[
          {
            href: "/?selectedKind=Footer&selectedStory=custom%20anchor",
            text: "Blog"
          },
          {
            href: "/?selectedKind=Footer&selectedStory=custom%20anchor",
            text: "About"
          },
          {
            href: "/?selectedKind=Footer&selectedStory=custom%20anchor",
            text: "Archive"
          }
        ]}
        anchor={(href, text) => <NavLink to={href}>{text}</NavLink>}
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
