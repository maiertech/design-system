import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import PostPreview from "./PostPreview";
import posts from "../posts";

storiesOf("PostPreview", module)
  .add("default anchor", () => <PostPreview px={[2, 3]} py={3} {...posts[0]} />)
  .add("custom anchor", () => (
    <MemoryRouter>
      <PostPreview
        anchor={({ href, children }) => <NavLink to={href}>{children}</NavLink>}
        px={[2, 3]}
        py={3}
        {...posts[1]}
      />
    </MemoryRouter>
  ));
