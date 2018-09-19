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
  .addWithJSX("default link", () => <PostList values={posts} m={3} />)
  .addWithJSX("custom link", () => (
    <PostList values={posts} link={NewTabLink} m={3} />
  ));
