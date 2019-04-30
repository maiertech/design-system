import React from 'react';
import { storiesOf } from '@storybook/react';
import { NewTabLink } from '..';
import Header from './Header';

const title = 'Header Title';
const links = [
  {
    href: '#blog',
    text: 'Blog',
  },
  {
    href: '#about',
    text: 'About',
  },
  {
    href: '#archive',
    text: 'Archive',
  },
];

storiesOf('Header', module)
  .add('default link', () => <Header title={title} links={links} />)
  .add('custom link', () => (
    <Header title={title} links={links} link={NewTabLink} />
  ));
