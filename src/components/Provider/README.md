This component injects a default or custom theme into all compatible child components. Compatible components are all components from this library and any component built with [styled-components](https://www.styled-components.com/). Components in this library need to be wrapped into `Provider` to work propertly. `Provider` makes theming a breeze since you do not have to provide a `theme` prop to every single component.

## Provider without theme prop

```react
showSource: true
---
<Provider>
  <CompatibleComponent>This component is rendered with the default theme.</CompatibleComponent>
</Provider>
```

`<Provider>` injects default theme into `<CompatibleComponent>` (via [context](https://reactjs.org/docs/context.html)) and makes it available as `props.theme` inside `<CompatibleComponent>`. This works for any compatible component no matter how deep down in the component tree.

## Provider with theme prop

```react
showSource: true
---
<Provider theme={theme}>
  <CompatibleComponent>This component is rendered with a custom theme.</CompatibleComponent>
</Provider>
```

The `theme` prop is shallow merged into the default theme.
