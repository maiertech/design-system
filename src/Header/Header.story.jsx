import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'rebass';
import { MemoryRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../theme';
import Header from './Header';

const links = [
  { to: '/', text: 'Home' },
  { to: '/about/', text: 'About' },
  { to: '/archive/', text: 'Archive' },
];

storiesOf('components/Header', module)
  .add('root route', () => (
    <MemoryRouter initialEntries={['/']}>
      <Provider theme={{ colors }}>
        <Header
          title="Root route active"
          linkComponent={NavLink}
          links={links}
        />
      </Provider>
    </MemoryRouter>
  ))
  .add('non-root route', () => (
    <MemoryRouter initialEntries={['/about/']}>
      <Provider theme={{ colors }}>
        <Header
          title="Non-root route active"
          linkComponent={NavLink}
          links={links}
        />
      </Provider>
    </MemoryRouter>
  ))
  .add('many links causing line wrap', () => (
    <MemoryRouter initialEntries={['/']}>
      <Provider theme={{ colors }}>
        <Header
          title="Many links causing line wrap"
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
  ))
  .add('override CSS with with className prop', () => {
    // `styled` adds generated class via className prop.
    const StyledHeader = styled(Header)`
      color: palevioletred;
      background-color: papayawhip;
      a {
        color: palevioletred;
        border-bottom-color: papayawhip;
        &.active {
          border-bottom-color: palevioletred !important;
        }
      }
      h2 {
        color: palevioletred;
      }
    `;
    return (
      <MemoryRouter initialEntries={['/']}>
        <Provider theme={{ colors }}>
          <StyledHeader
            title="Override CSS with className prop"
            linkComponent={NavLink}
            links={links}
          />
        </Provider>
      </MemoryRouter>
    );
  });
