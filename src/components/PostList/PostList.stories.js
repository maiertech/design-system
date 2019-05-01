import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { Image } from 'rebass';
import PostList from './PostList';

storiesOf('PostList', module)
  .addDecorator(withKnobs)
  .add('knobs', () => (
    <PostList
      values={object('values', [
        {
          id: 'f0c6b008-19bc-4e78-b79b-1e9a437afc16',
          post: {
            title:
              'Aliquet maecenas leo odio condimentum id luctus nec molestie',
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
          },
        },
        {
          id: '008fbc3b-102e-41d1-8ccf-11e2a3235aba',
          post: {
            title: 'Pretium iaculis justo in hac habitasse platea',
            author: 'Lon Kamena',
            date: 'June 12, 2018',
            lead:
              'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
            href: '/2018/06/12/slug',
            renderImage: function renderImage() {
              return (
                <Image
                  css={{ display: 'block' }}
                  alt="Parking."
                  src="https://source.unsplash.com/EI32DgwN450/900x600"
                />
              );
            },
          },
        },
        {
          id: 'a3e1d0c3-7188-49b1-945b-0c079c160064',
          post: {
            title: 'Vestibulum proin eu mi nulla ac enim in tempor turpis',
            author: 'Orin Sissons',
            date: 'May 31, 2018',
            lead:
              'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
            href: '/2018/05/31/slug',
            renderImage: function renderImage() {
              return (
                <Image
                  css={{ display: 'block' }}
                  alt="Tea."
                  src="https://source.unsplash.com/ulPd2UCwZYk/900x600"
                />
              );
            },
          },
        },
        {
          id: 'e72b1ae2-c1a2-4255-bf19-976074f78291',
          post: {
            title:
              'Vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat',
            author: 'Knox Simes',
            date: 'May 15, 2018',
            lead:
              'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
            href: '/2018/05/15/slug',
            renderImage: function renderImage() {
              return (
                <Image
                  css={{ display: 'block' }}
                  alt="Structure."
                  src="https://source.unsplash.com/AU1rKyKPJco/900x600"
                />
              );
            },
          },
        },
        {
          id: 'f8374972-768d-4f54-be36-ae986da7343e',
          post: {
            title: 'Primis in faucibus orci luctus est',
            author: 'Adelaida Hurndall',
            date: 'May 2, 2018',
            lead:
              'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
            href: '/2018/05/02/slug',
            renderImage: function renderImage() {
              return (
                <Image
                  css={{ display: 'block' }}
                  alt="Tiger."
                  src="https://source.unsplash.com/Yju1DCmp39I/900x600"
                />
              );
            },
          },
        },
        {
          id: 'de501562-fc22-4c38-984e-db27623273fc',
          post: {
            title: 'Suscipit ligula in lacus curabitur at ipsum',
            author: 'Jeff Holsall',
            date: 'April 20, 2018',
            lead:
              'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
            href: '/2018/04/20/slug',
            renderImage: function renderImage() {
              return (
                <Image
                  css={{ display: 'block' }}
                  alt="Code."
                  src="https://source.unsplash.com/466ENaLuhLY/900x600"
                />
              );
            },
          },
        },
        {
          id: 'e4c404a7-1d41-4a35-bd0f-6e18b2c54926',
          post: {
            title: 'Orci eget orci vehicula condimentum curabitur in',
            date: 'April 5, 2018',
            author: 'Chaddie Bordes',
            lead:
              'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
            href: '/2018/04/05/slug',
            renderImage: function renderImage() {
              return (
                <Image
                  css={{ display: 'block' }}
                  alt="Seattle."
                  src="https://source.unsplash.com/dpVJtfywdX4/900x600"
                />
              );
            },
          },
        },
        {
          id: '8328492a-335f-4226-bd56-a8c5f3778242',
          post: {
            title: 'Quam pede lobortis ligula sit',
            author: 'Ruthi Kunat',
            date: 'March 14, 2018',
            lead:
              'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
            href: '/2018/03/14/slug',
            renderImage: function renderImage() {
              return (
                <Image
                  css={{ display: 'block' }}
                  alt="Colors."
                  src="https://source.unsplash.com/8UeQgz9Wazw/900x600"
                />
              );
            },
          },
        },
        {
          id: '99272059-a47a-4609-8318-3bdca47d0a80',
          post: {
            title:
              'Diam cras pellentesque volutpat dui maecenas tristique est et tempus',
            author: 'Deanna Effnert',
            date: 'February 28, 2018',
            lead:
              'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
            href: '/2018/02/28/slug',
            renderImage: function renderImage() {
              return (
                <Image
                  css={{ display: 'block' }}
                  alt="Road."
                  src="https://source.unsplash.com/bciXX0xjcwc/900x600"
                />
              );
            },
          },
        },
        {
          id: 'b1760e59-3cd4-46b7-a929-e6208442503a',
          post: {
            title: 'Metus sapien ut nunc vestibulum ante',
            author: 'Carr Missenden',
            date: 'February 13, 2018',
            lead:
              'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
            href: '/2018/02/13/slug',
            renderImage: function renderImage() {
              return (
                <Image
                  css={{ display: 'block' }}
                  alt="Architecture."
                  src="https://source.unsplash.com/FK0RhfEeY0w/900x600"
                />
              );
            },
          },
        },
      ])}
      m={3}
    />
  ));
