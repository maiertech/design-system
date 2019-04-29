import React from 'react';
import { storiesOf } from '@storybook/react';
import NewTabLink from '../../primitives/NewTabLink';
import Footer from './Footer';

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

storiesOf('Composites/Footer', module)
  .add('default anchors', () => (
    <Footer title="This is the Footer Title" name="Thilo Maier" links={links} />
  ))
  .add('custom intLink', () => (
    <Footer
      title="This is the Footer Title"
      name="Thilo Maier"
      links={links}
      intLink={NewTabLink}
    />
  ))
  .add('custom extLink', () => (
    <Footer
      title="This is the Footer Title"
      name="Thilo Maier"
      links={links}
      extLink={NewTabLink}
    />
  ))
  .add('last updated', () => (
    <Footer
      lastUpdated="Aug 1, 2018"
      title="This is the Footer Title"
      name="Thilo Maier"
      links={links}
    />
  ))
  .add('many links that wrap', () => (
    <Footer
      title="This is the Footer Title"
      name="Thilo Maier"
      links={[
        {
          href: '#one',
          text: 'One',
        },
        {
          href: '#two',
          text: 'Two',
        },
        {
          href: '#three',
          text: 'Three',
        },
        {
          href: '#four',
          text: 'Four',
        },
        {
          href: '#five',
          text: 'Five',
        },
        {
          href: '#six',
          text: 'Six',
        },
        {
          href: '#seven',
          text: 'Seven',
        },
        {
          href: '#eight',
          text: 'Eight',
        },
        {
          href: '#nine',
          text: 'Nine',
        },
        {
          href: '#ten',
          text: 'Ten',
        },
        {
          href: '#eleven',
          text: 'Eleven',
        },
        {
          href: '#twelve',
          text: 'Twelve',
        },
        {
          href: '#thirteen',
          text: 'Thirteen',
        },
        {
          href: '#fourteen',
          text: 'Fourteen',
        },
        {
          href: '#fifteen',
          text: 'Fifteen',
        },
        {
          href: '#sixteen',
          text: 'Sixteen',
        },
        {
          href: '#seventeen',
          text: 'Seveteen',
        },
        {
          href: '#eighteen',
          text: 'Eighteen',
        },
        {
          href: '#nineteen',
          text: 'Nineteen',
        },
        {
          href: '#twenty',
          text: 'Twenty',
        },
      ]}
    />
  ));
