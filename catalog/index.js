import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const config = {
  title: "Styleguide",
  imports: {
    colors: require("../src/theme").colors,
    MemoryRouter: require("react-router").MemoryRouter,
    NavLink: require("react-router-dom").NavLink,
    Provider: require("rebass").Provider
  },
  pages: [
    {
      path: "/",
      title: "Introduction",
      content: pageLoader(() => import("../README.md"))
    },
    {
      title: "Components",
      pages: [
        {
          path: "/Footer",
          title: "Footer",
          content: pageLoader(() =>
            import("../src/components/Footer/README.md")
          ),
          imports: { Footer: require("../src/components/Footer") }
        },
        {
          path: "/Header",
          title: "Header",
          content: pageLoader(() =>
            import("../src/components/Header/README.md")
          ),
          imports: { Header: require("../src/components/Header") }
        }
      ]
    }
  ]
};

ReactDOM.render(<Catalog {...config} />, document.getElementById("catalog"));
