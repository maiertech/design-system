import React from "react";
import { storiesOf } from "@storybook/react";
import { Image } from "rebass";
import PostList from "./PostList";
import NewTabLink from "../../primitives/NewTabLink";
import rawPosts from "../../posts";

const posts = rawPosts.map(({ image: { alt, src }, ...props }) => ({
  ...props,
  image: () => <Image css={{ display: "block" }} alt={alt} src={src} />
}));

storiesOf("Composites/PostList", module)
  .add("default link", () => <PostList values={posts} />)
  .add("custom link", () => <PostList values={posts} link={NewTabLink} />);
