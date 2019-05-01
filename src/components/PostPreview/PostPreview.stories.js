import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { Image } from 'rebass';

import PostPreview from './PostPreview';

storiesOf('PostPreview', module)
  .addDecorator(withKnobs)
  .add('knobs', () => (
    <PostPreview
      post={object('post', {
        title: 'Aliquet maecenas leo odio condimentum id luctus nec molestie',
        author: 'Abigail Lyptratt',
        date: 'July 4, 2018',
        lead:
          'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
        href: '/2018/07/04/slug',
        renderImage: function renderImage() {
          return (
            <Image
              css={{ display: 'block' }}
              alt="Spaceman."
              src="https://source.unsplash.com/dBaz0xhCkPY/900x600"
            />
          );
        },
      })}
      m={[0, 0, 3]}
    />
  ));
