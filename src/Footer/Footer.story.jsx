import React from "react";
import { storiesOf } from "@storybook/react";
import { Provider } from "rebass";
import { MemoryRouter } from "react-router";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../theme";
import Footer from "./Footer";

const internalLinks = [
  { to: "/archive/", text: "Archive" },
  { to: "/about/", text: "About" }
];
const externalLinks = [
  { to: "http://twitter.com/mdotasia", text: "Twitter" },
  { to: "https://github.com/mdotasia/", text: "GitHub" }
];

storiesOf("components/Footer", module)
  .add("internal and external links", () => (
    <MemoryRouter>
      <Provider theme={{ colors }}>
        <Footer
          title="Footer with internal and external links"
          internalLinkComponent={NavLink}
          internalLinks={internalLinks}
          externalLinks={externalLinks}
        />
      </Provider>
    </MemoryRouter>
  ))
  .add("internal links only", () => (
    <MemoryRouter>
      <Provider theme={{ colors }}>
        <Footer
          title="Footer with internal links only"
          internalLinkComponent={NavLink}
          internalLinks={internalLinks}
        />
      </Provider>
    </MemoryRouter>
  ))
  .add("external links only", () => (
    <MemoryRouter>
      <Provider theme={{ colors }}>
        <Footer
          title="Footer with external links only"
          internalLinkComponent={NavLink}
          externalLinks={externalLinks}
        />
      </Provider>
    </MemoryRouter>
  ))
  .add("no links", () => (
    <MemoryRouter>
      <Provider theme={{ colors }}>
        <Footer title="Footer with no links" internalLinkComponent={NavLink} />
      </Provider>
    </MemoryRouter>
  ))
  .add("links wrap", () => (
    <MemoryRouter>
      <Provider theme={{ colors }}>
        <Footer
          title="Footer with many links"
          internalLinkComponent={NavLink}
          internalLinks={[
            { to: "/1/", text: "One" },
            { to: "/2/", text: "Two" },
            { to: "/3/", text: "Three" },
            { to: "/4/", text: "Four" },
            { to: "/5/", text: "Five" },
            { to: "/6/", text: "Six" },
            { to: "/7/", text: "Seven" },
            { to: "/8/", text: "Eight" },
            { to: "/9/", text: "Nine" },
            { to: "/10/", text: "Ten" },
            { to: "/11/", text: "Eleven" },
            { to: "/12/", text: "Twelve" },
            { to: "/13/", text: "Thirteen" },
            { to: "/14/", text: "Fourteen" },
            { to: "/15/", text: "Fifteen" },
            { to: "/16/", text: "Sixteen" },
            { to: "/17/", text: "Seventeen" },
            { to: "/18/", text: "Eighteen" },
            { to: "/19/", text: "Nineteen" },
            { to: "/20/", text: "Twenty" }
          ]}
        />
      </Provider>
    </MemoryRouter>
  ))
  .add("override CSS with className prop", () => {
    // `styled` adds generated class via className prop.
    const StyledFooter = styled(Footer)`
      color: palevioletred;
      background-color: papayawhip;
      a {
        color: palevioletred;
      }
    `;
    return (
      <MemoryRouter>
        <Provider theme={{ colors }}>
          <StyledFooter
            title="Override CSS with className prop"
            internalLinkComponent={NavLink}
            internalLinks={internalLinks}
            externalLinks={externalLinks}
          />
        </Provider>
      </MemoryRouter>
    );
  });
