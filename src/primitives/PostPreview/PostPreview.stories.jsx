import React from "react";
import { storiesOf } from "@storybook/react";
import { Image } from "rebass";
import PostPreview from "./PostPreview";
import NewTabLink from "../NewTabLink";
import posts from "../../posts";

const image = () => (
  <Image
    css={{ display: "block" }}
    src="https://source.unsplash.com/random/900x600"
  />
);

storiesOf("Primitives/PostPreview", module)
  .add("default link", () => (
    <PostPreview
      title={posts[0].title}
      lead={posts[0].lead}
      href={posts[0].href}
      author={posts[0].author}
      date={posts[0].date}
      image={image}
    />
  ))
  .add("custom link", () => (
    <PostPreview
      title={posts[1].title}
      lead={posts[1].lead}
      href={posts[1].href}
      author={posts[1].author}
      date={posts[1].date}
      image={image}
      link={NewTabLink}
    />
  ));
