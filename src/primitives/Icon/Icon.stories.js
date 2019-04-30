import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import NewTabLink from '../NewTabLink';
import Icon from './Icon';

storiesOf('Primitives/Icon', module)
  .addDecorator(withKnobs)
  .add('knobs', () => (
    <Icon
      type={select('type', { GitHub: 'github', Twitter: 'twitter' }, 'github')}
      username={text('username', '454de6e')}
      color={text('color', 'accent')}
      m={2}
    />
  ))
  .add('custom link', () => (
    <Icon link={NewTabLink} type="github" username="454de6e" m={2} />
  ));
