import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, text } from '@storybook/addon-knobs';

import Footer from './Footer';

storiesOf('Footer', module)
  .addDecorator(withKnobs)
  .add('knobs', () => (
    <Footer
      title={text('title', 'This is the Footer Title')}
      name={text('name', 'Thilo Maier')}
      lastUpdated={text('lastUpdated', 'Aug 1, 2018')}
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
  ))
  .add('many links that wrap', () => (
    <Footer
      title={text('title', 'This is the Footer Title')}
      name={text('name', 'Thilo Maier')}
      links={object('links', [
        {
          href: '/one',
          text: 'One',
        },
        {
          href: '/two',
          text: 'Two',
        },
        {
          href: '/three',
          text: 'Three',
        },
        {
          href: '/four',
          text: 'Four',
        },
        {
          href: '/five',
          text: 'Five',
        },
        {
          href: '/six',
          text: 'Six',
        },
        {
          href: '/seven',
          text: 'Seven',
        },
        {
          href: '/eight',
          text: 'Eight',
        },
        {
          href: '/nine',
          text: 'Nine',
        },
        {
          href: '/ten',
          text: 'Ten',
        },
        {
          href: '/eleven',
          text: 'Eleven',
        },
        {
          href: '/twelve',
          text: 'Twelve',
        },
        {
          href: '/thirteen',
          text: 'Thirteen',
        },
        {
          href: '/fourteen',
          text: 'Fourteen',
        },
        {
          href: '/fifteen',
          text: 'Fifteen',
        },
        {
          href: '/sixteen',
          text: 'Sixteen',
        },
        {
          href: '/seventeen',
          text: 'Seventeen',
        },
        {
          href: '/eighteen',
          text: 'Eighteen',
        },
        {
          href: '/nineteen',
          text: 'Nineteen',
        },
        {
          href: '/twenty',
          text: 'Twenty',
        },
      ])}
    />
  ));
