A simple header.

## Header with root route active

```react
showSource: true
---
<MemoryRouter initialEntries={["/"]}>
  <Provider theme={{ colors }}>
    <Header
      title="Root route active"
      linkComponent={NavLink}
      links={[
        { to: "/", text: "Home" },
        { to: "/about/", text: "About" },
        { to: "/archive/", text: "Archive" }
      ]}
    />
  </Provider>
</MemoryRouter>
```

## Header with non-root route active

```react
showSource: true
---
<MemoryRouter initialEntries={["/about/"]}>
  <Provider theme={{ colors }}>
    <Header
      title="Non-root route active"
      linkComponent={NavLink}
      links={[
        { to: "/", text: "Home" },
        { to: "/about/", text: "About" },
        { to: "/archive/", text: "Archive" }
      ]}
    />
  </Provider>
</MemoryRouter>
```

## Header with many links that wrap

```react
showSource: true
---
<MemoryRouter initialEntries={["/"]}>
  <Provider theme={{ colors }}>
    <Header
      title="Many links causing line wrap"
      linkComponent={NavLink}
      links={[
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
        { to: "/15/", text: "Fifteen" }
      ]}
    />
  </Provider>
</MemoryRouter>
```
