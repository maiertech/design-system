import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import PostPreview from "./PostPreview";
import posts from "../posts";

storiesOf("components/PostPreview", module)
  .add("default anchor", () => <PostPreview {...posts[0]} />)
  .add("custom anchor", () => (
    <MemoryRouter>
      <PostPreview
        anchor={({ href, children }) => <NavLink to={href}>{children}</NavLink>}
        {...posts[1]}
      />
    </MemoryRouter>
  ))
  .add("multiple siblings", () => (
    <React.Fragment>
      <PostPreview {...posts[2]} pb={3} mb={3} />
      <PostPreview {...posts[3]} pb={3} mb={3} />
    </React.Fragment>
  ));
