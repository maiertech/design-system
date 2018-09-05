import React from "react";
import { storiesOf } from "@storybook/react";
import ContentPage from "./ContentPage";

storiesOf("templates/ContentPage", module).add("default", () => (
  <ContentPage
    debug
    title="This is the page title"
    description="This is the page description."
  >
    Nunc mollis nulla sed nunc pharetra, sit amet rutrum mi volutpat. Aliquam
    erat volutpat. Suspendisse vitae velit at turpis mollis ornare ac sed
    libero. Phasellus malesuada quam non felis dapibus condimentum. Nullam ut
    nibh volutpat, laoreet magna sed, ultrices nibh. Integer in massa odio.
    Donec eu diam iaculis, iaculis tortor ut, lacinia eros. Integer et gravida
    lacus. Nulla venenatis aliquet odio, vel facilisis neque tempus in. Nullam
    iaculis sagittis enim, sit amet molestie nisi malesuada ut. Fusce et felis
    aliquam, pharetra enim ut, gravida lectus. Nam sodales, velit quis porttitor
    tempus, ipsum elit faucibus eros, vel maximus justo arcu vel mi. Nullam
    ornare mauris felis, nec scelerisque ligula hendrerit eget. Morbi ultricies
    dapibus rutrum.
  </ContentPage>
));