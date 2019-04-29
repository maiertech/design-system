import React from 'react';
import { storiesOf } from '@storybook/react';
import NewTabLink from '../../primitives/NewTabLink';
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

storiesOf('Composites/Header', module)
  .add('default link', () => <Header title={title} links={links} />)
  .add('custom link', () => (
    <Header title={title} links={links} link={NewTabLink} />
  ));
