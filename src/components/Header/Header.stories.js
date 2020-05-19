import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, text } from '@storybook/addon-knobs';

import Header from './Header';

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('knobs', () => (
    <Header
      title={text('title', 'Header Title')}
      links={object('links', [
        {
          href: '/blog',
          text: 'Blog',
        },
        {
          href: '/about',
          text: 'About',
        },
        {
          href: '/archive',
          text: 'Archive',
        },
      ])}
    />
  ));
