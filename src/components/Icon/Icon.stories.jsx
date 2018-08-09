import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import Icon from "./Icon";
import Box from "../Box";

storiesOf("components/Icon", module)
  .addDecorator(story => <Box m={1}>{story()}</Box>)
  .add("default anchor", () => (
    <React.Fragment>
      <Icon type="github" username="mdotasia" m={1} />
      <Icon type="twitter" username="mdotasia" m={1} />
    </React.Fragment>
  ))
  .add("custom anchor", () => {
    // eslint-disable-next-line react/prop-types
    const anchor = ({ href, children }) => (
      <NavLink to={href}>{children}</NavLink>
    );
    return (
      <MemoryRouter>
        <React.Fragment>
          <Icon anchor={anchor} type="github" username="mdotasia" m={1} />
          <Icon anchor={anchor} type="twitter" username="mdotasia" m={1} />
        </React.Fragment>
      </MemoryRouter>
    );
  });
