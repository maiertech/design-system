import React from "react";
import { mount, shallow } from "enzyme";
import { MemoryRouter, NavLink } from "react-router-dom";
import "jest-styled-components";
import Header from "./Header";
import Provider from "../Provider";

describe("Header", () => {
  describe("href prop", () => {
    test("with href", () => {
      const wrapper = mount(<Header href="#">Test</Header>).find("Title");
      // <h1><a href="#">Title</a></h1>
      expect(wrapper).toMatchSnapshot();
    });

    test("without href", () => {
      const wrapper = mount(<Header>Test</Header>).find("Title");
      // <h1>Title</h1>
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("links prop", () => {
    test("without links", () => {
      const wrapper = shallow(<Header>Test</Header>);
      // <Grid>
      //   <Title>Test</Title>
      // </Grid>
      expect(wrapper).toMatchSnapshot();
    });

    test("with links", () => {
      const wrapper = shallow(
        <Header
          links={[
            { text: "Blog", href: "#" },
            { text: "Portfolio", href: "#" },
            { text: "About", href: "#" }
          ]}
        >
          Test
        </Header>
      );
      // <Grid>
      //   <Title>Test</Title>
      //   <Link href="#">Blog></Link>
      //   <Link href="#">Portfolio</Link>
      //   <Link href="#">About</Link>
      // </Grid>
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("render prop", () => {
    test("default render function", () => {
      const wrapper = mount(
        <Header
          href="#"
          links={[
            { text: "Blog", href: "#" },
            { text: "Portfolio", href: "#" },
            { text: "About", href: "#" }
          ]}
        >
          Test
        </Header>
      );
      const title = wrapper.find("Title");
      // <h1><a href="#">Test</a></h1>
      expect(title).toMatchSnapshot();
      const links = wrapper.find("Link");
      // [
      //   <Link><a href="#">Blog</a></Link>,
      //   <Link><a href="#">Portfolio</a></Link>.
      //   <Link><a href="#">About</a></Link>
      // ]
      expect(links).toMatchSnapshot();
    });

    test("custom render function", () => {
      const wrapper = mount(
        <MemoryRouter>
          <Header
            href="#"
            links={[
              { text: "Blog", href: "#" },
              { text: "Portfolio", href: "#" },
              { text: "About", href: "#" }
            ]}
            render={(text, href) => <NavLink to={href}>{text}</NavLink>}
          >
            Test
          </Header>
        </MemoryRouter>
      );
      const title = wrapper.find("Title");
      // <h1><NavLink to+"#">Test</NavLink></h1>
      expect(title).toMatchSnapshot();
      const links = wrapper
        .find("Grid")
        .childAt(0)
        .children()
        .not("Title");
      // [
      //   <NavLink to="#">Blog</NavLink>,
      //   <NavLink to="#">Portfolio</NavLink>,
      //   <NavLink to="#">About</NavLink>
      // ]
      expect(links).toMatchSnapshot();
    });
  });
});
