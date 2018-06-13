import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import Icon from "./Icon";

storiesOf("Icon", module)
  .add("default anchor", () => (
    <div>
      <Icon type="github" username="mdotasia" m={1} />
      <Icon type="twitter" username="mdotasia" m={1} />
    </div>
  ))
  .add("custom anchor", () => (
    <MemoryRouter>
      <div>
        <Icon
          anchor={(href, text) => <NavLink to={href}>{text}</NavLink>}
          type="github"
          username="mdotasia"
          m={1}
        />
        <Icon
          anchor={(href, text) => <NavLink to={href}>{text}</NavLink>}
          type="twitter"
          username="mdotasia"
          m={1}
        />
      </div>
    </MemoryRouter>
  ));
