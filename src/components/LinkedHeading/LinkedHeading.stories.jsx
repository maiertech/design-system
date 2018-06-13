import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import LinkedHeading from "./LinkedHeading";

storiesOf("LinkedHeading", module)
  .add("default heading and anchor", () => (
    <LinkedHeading
      href="/?selectedKind=LinkedHeading&selectedStory=default%20heading%20and%20anchor"
      p={2}
    >
      Default heading and anchor
    </LinkedHeading>
  ))
  .add("custom heading and anchor", () => (
    <MemoryRouter>
      <LinkedHeading
        anchor={(href, text) => <NavLink to={href}>{text}</NavLink>}
        href="/?selectedKind=LinkedHeading&selectedStory=custom%20heading%20and%20anchor"
        heading={children => <h2>{children}</h2>}
        p={2}
      >
        Custom heading and anchor
      </LinkedHeading>
    </MemoryRouter>
  ));
