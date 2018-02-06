Footer with internal and external links:

```jsx
const colors = require("../../theme").colors;
const NavLink = require("react-router-dom").NavLink;
const MemoryRouter = require("react-router").MemoryRouter;
const Provider = require("rebass").Provider;
<MemoryRouter>
  <Provider theme={{ colors }}>
    <Footer
      title="Footer with internal and external links"
      internalLinkComponent={NavLink}
      internalLinks={[
        { to: "/archive/", text: "Archive" },
        { to: "/about/", text: "About" }
      ]}
      externalLinks={[
        { to: "http://twitter.com/mdotasia", text: "Twitter" },
        { to: "https://github.com/mdotasia/", text: "GitHub" }
      ]}
    />
  </Provider>
</MemoryRouter>;
```

Footer with internal links only:

```jsx
const colors = require("../../theme").colors;
const NavLink = require("react-router-dom").NavLink;
const MemoryRouter = require("react-router").MemoryRouter;
const Provider = require("rebass").Provider;
<MemoryRouter>
  <Provider theme={{ colors }}>
    <Footer
      title="Footer with internal links only"
      internalLinkComponent={NavLink}
      internalLinks={[
        { to: "/archive/", text: "Archive" },
        { to: "/about/", text: "About" }
      ]}
    />
  </Provider>
</MemoryRouter>;
```

Footer with external links only:

```jsx
const colors = require("../../theme").colors;
const NavLink = require("react-router-dom").NavLink;
const MemoryRouter = require("react-router").MemoryRouter;
const Provider = require("rebass").Provider;
<MemoryRouter>
  <Provider theme={{ colors }}>
    <Footer
      title="Footer with external links only"
      internalLinkComponent={NavLink}
      externalLinks={[
        { to: "http://twitter.com/mdotasia", text: "Twitter" },
        { to: "https://github.com/mdotasia/", text: "GitHub" }
      ]}
    />
  </Provider>
</MemoryRouter>;
```

Footer with no links:

```jsx
const colors = require("../../theme").colors;
const NavLink = require("react-router-dom").NavLink;
const MemoryRouter = require("react-router").MemoryRouter;
const Provider = require("rebass").Provider;
<MemoryRouter>
  <Provider theme={{ colors }}>
    <Footer title="Footer with no links" internalLinkComponent={NavLink} />
  </Provider>
</MemoryRouter>;
```

Footer with many links that wrap:

```jsx
const colors = require("../../theme").colors;
const NavLink = require("react-router-dom").NavLink;
const MemoryRouter = require("react-router").MemoryRouter;
const Provider = require("rebass").Provider;
<MemoryRouter>
  <Provider theme={{ colors }}>
    <Footer
      title="Footer with many links"
      internalLinkComponent={NavLink}
      internalLinks={[
        { to: "/1/", text: "One" },
        { to: "/2/", text: "Two" },
        { to: "/3/", text: "Three" },
        { to: "/4/", text: "Four" },
        { to: "/5/", text: "Five" },
        { to: "/6/", text: "Six" },
        { to: "/7/", text: "Seven" },
        { to: "/8/", text: "Eight" },
        { to: "/9/", text: "Nine" },
        { to: "/10/", text: "Ten" },
        { to: "/11/", text: "Eleven" },
        { to: "/12/", text: "Twelve" },
        { to: "/13/", text: "Thirteen" },
        { to: "/14/", text: "Fourteen" },
        { to: "/15/", text: "Fifteen" },
        { to: "/16/", text: "Sixteen" },
        { to: "/17/", text: "Seventeen" },
        { to: "/18/", text: "Eighteen" },
        { to: "/19/", text: "Nineteen" },
        { to: "/20/", text: "Twenty" }
      ]}
    />
  </Provider>
</MemoryRouter>;
```
