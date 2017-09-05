import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'rebass';
import { MemoryRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { colors } from '../theme';

import Header from './Header';

const blogLinks = [
  { to: '/', text: 'Home' },
  { to: '/archive/', text: 'Archive' },
  { to: '/about/', text: 'About' },
];
const title = 'Coding for the Web';

storiesOf('components/Header', module)
  .add("'/' route", () => (
    <MemoryRouter initialEntries={['/']}>
      <Provider theme={{ colors }}>
        <Header title={title} element={NavLink} links={blogLinks} />
      </Provider>
    </MemoryRouter>
  ))
  .add("'/archive/' route", () => (
    <MemoryRouter initialEntries={['/archive/']}>
      <Provider theme={{ colors }}>
        <Header title={title} element={NavLink} links={blogLinks} />
      </Provider>
    </MemoryRouter>
  ))
  .add("'/about/' route", () => (
    <MemoryRouter initialEntries={['/about/']}>
      <Provider theme={{ colors }}>
        <Header title={title} element={NavLink} links={blogLinks} />
      </Provider>
    </MemoryRouter>
  ))
  .add('navigation links wrap', () => (
    <MemoryRouter initialEntries={['/']}>
      <Provider theme={{ colors }}>
        <Header
          title={title}
          element={NavLink}
          links={[
            { to: '/1/', text: 'One' },
            { to: '/2/', text: 'Two' },
            { to: '/3/', text: 'Three' },
            { to: '/4/', text: 'Four' },
            { to: '/5/', text: 'Five' },
          ]}
        />
      </Provider>
    </MemoryRouter>
  ));
