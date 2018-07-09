import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import posts from "../posts";
import PostList from "./PostList";

storiesOf("PostList", module)
  .add("default anchor", () => <PostList posts={posts} />)
  .add("custom anchor", () => (
    <MemoryRouter>
      <PostList
        posts={posts}
        anchor={(href, text) => <NavLink to={href}>{text}</NavLink>}
      />
    </MemoryRouter>
  ))
  .add("1 post only", () => <PostList posts={posts.slice(0, 1)} />);
