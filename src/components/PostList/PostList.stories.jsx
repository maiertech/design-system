import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import posts from "../posts";
import PostList from "./PostList";

storiesOf("components/PostList", module)
  .add("default anchor", () => <PostList values={posts} />)
  .add("custom anchor", () => (
    <MemoryRouter>
      <PostList
        values={posts}
        anchor={({ href, children }) => <NavLink to={href}>{children}</NavLink>}
      />
    </MemoryRouter>
  ))
  .add("1 post only", () => <PostList values={posts.slice(0, 1)} />);
