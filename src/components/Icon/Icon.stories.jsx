import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import Icon from "./Icon";

storiesOf("Icon", module)
  .add("default render prop", () => (
    <div>
      <Icon type="github" username="mdotasia" m={1} />
      <Icon type="twitter" username="mdotasia" m={1} />
    </div>
  ))
  .add("custom render prop", () => (
    <MemoryRouter>
      <div>
        <Icon
          type="github"
          username="mdotasia"
          render={(href, text) => <NavLink to={href}>{text}</NavLink>}
          m={1}
        />
        <Icon
          type="twitter"
          username="mdotasia"
          render={(href, text) => <NavLink to={href}>{text}</NavLink>}
          m={1}
        />
      </div>
    </MemoryRouter>
  ));
