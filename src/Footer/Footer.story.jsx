import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'rebass';
import { MemoryRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { colors } from '../theme';
import Footer from './Footer';

const internalLinks = [
  { to: '/archive/', text: 'Archive' },
  { to: '/about/', text: 'About' },
];
const externalLinks = [
  { to: 'http://twitter.com/mdotasia', text: 'Twitter' },
  { to: 'https://github.com/mdotasia/', text: 'GitHub' },
];
const title = 'Coding for the Web';

storiesOf('components/Footer', module)
  .add('internal and external links', () => (
    <MemoryRouter>
      <Provider theme={{ colors }}>
        <Footer
          title={title}
          internalLinkComponent={NavLink}
          internalLinks={internalLinks}
          externalLinks={externalLinks}
        />
      </Provider>
    </MemoryRouter>
  ))
  .add('internal links only', () => (
    <MemoryRouter>
      <Provider theme={{ colors }}>
        <Footer
          title={title}
          internalLinkComponent={NavLink}
          internalLinks={internalLinks}
        />
      </Provider>
    </MemoryRouter>
  ))
  .add('external links only', () => (
    <MemoryRouter>
      <Provider theme={{ colors }}>
        <Footer
          title={title}
          internalLinkComponent={NavLink}
          externalLinks={externalLinks}
        />
      </Provider>
    </MemoryRouter>
  ))
  .add('no links', () => (
    <MemoryRouter>
      <Provider theme={{ colors }}>
        <Footer title={title} internalLinkComponent={NavLink} />
      </Provider>
    </MemoryRouter>
  ))
  .add('links wrap', () => (
    <MemoryRouter>
      <Provider theme={{ colors }}>
        <Footer
          title={title}
          internalLinkComponent={NavLink}
          internalLinks={[
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
            { to: '/16/', text: 'Sixteen' },
            { to: '/17/', text: 'Seventeen' },
            { to: '/18/', text: 'Eighteen' },
            { to: '/19/', text: 'Nineteen' },
            { to: '/20/', text: 'Twenty' },
          ]}
        />
      </Provider>
    </MemoryRouter>
  ));
