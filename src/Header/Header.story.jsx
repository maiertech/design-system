import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'rebass';
import { MemoryRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { colors } from '../theme';
import Header from './Header';

const links = [
  { to: '/', text: 'Home' },
  { to: '/about/', text: 'About' },
  { to: '/archive/', text: 'Archive' },
];
const title = 'Coding for the Web';

storiesOf('components/Header', module)
  .add("'/' route", () => (
    <MemoryRouter initialEntries={['/']}>
      <Provider theme={{ colors }}>
        <Header title={title} linkComponent={NavLink} links={links} />
      </Provider>
    </MemoryRouter>
  ))
  .add("'/about/' route", () => (
    <MemoryRouter initialEntries={['/about/']}>
      <Provider theme={{ colors }}>
        <Header title={title} linkComponent={NavLink} links={links} />
      </Provider>
    </MemoryRouter>
  ))
  .add("'/archive/' route", () => (
    <MemoryRouter initialEntries={['/archive/']}>
      <Provider theme={{ colors }}>
        <Header title={title} linkComponent={NavLink} links={links} />
      </Provider>
    </MemoryRouter>
  ))
  .add('links wrap', () => (
    <MemoryRouter initialEntries={['/']}>
      <Provider theme={{ colors }}>
        <Header
          title={title}
          linkComponent={NavLink}
          links={[
            { to: '/1/', text: 'One' },
            { to: '/2/', text: 'Two' },
            { to: '/3/', text: 'Three' },
            { to: '/4/', text: 'Four' },
            { to: '/5/', text: 'Five' },
            { to: '/6/', text: 'Six' },
            { to: '/7/', text: 'Seven' },
            { to: '/8/', text: 'Eight' },
            { to: '/9/', text: 'Nine' },
            { to: '/10/', text: 'Ten' },
            { to: '/11/', text: 'Eleven' },
            { to: '/12/', text: 'Twelve' },
            { to: '/13/', text: 'Thirteen' },
            { to: '/14/', text: 'Fourteen' },
            { to: '/15/', text: 'Fifteen' },
          ]}
        />
      </Provider>
    </MemoryRouter>
  ));
