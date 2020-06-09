import React from 'react';
import { Container, Heading, Grid, Link, Text } from 'theme-ui';
import { PostPreview } from '@maiertech/components';

const posts = [
  {
    id: 'f0c6b008-19bc-4e78-b79b-1e9a437afc16',
    href: '/2018/07/04/slug',
    title: (
      <Heading as="h2" mb={3}>
        Amet amet eiusmod irure irure tempor magna ullamco excepteur veniam in
        exercitation consequat
      </Heading>
    ),
    description: (
      <Text as="p" mb={3}>
        Exercitation irure ea nisi ea. Anim sit proident nisi consectetur
        ullamco. Cillum veniam anim culpa nostrud. Ad nulla sint cupidatat
        consectetur dolore reprehenderit ex ipsum quis consequat proident velit
        ex. Dolore ex anim laboris Lorem. Commodo aliquip deserunt nulla aliqua
        ut reprehenderit qui dolor. Ea eu fugiat velit proident amet.
      </Text>
    ),
    author: 'Abigail Lyptratt',
    date: 'July 4, 2018',
  },
  {
    id: '008fbc3b-102e-41d1-8ccf-11e2a3235aba',
    href: '/2018/06/12/slug',
    title: (
      <Heading as="h2" mb={3}>
        Occaecat et ut in ut ad anim quis
      </Heading>
    ),
    description: (
      <Text as="p" mb={3}>
        Est dolore irure minim dolor anim sint minim id do fugiat laborum et
        irure ullamco. Cupidatat consequat magna elit nulla qui eu. Laborum
        ipsum non qui officia proident sit sunt nisi dolor incididunt et. Labore
        aliqua cupidatat labore laborum mollit sit occaecat labore duis
        voluptate minim officia laborum ut. Elit quis nulla commodo officia
        exercitation et cupidatat laborum non voluptate labore eiusmod culpa.
        Minim nulla occaecat velit irure velit nostrud exercitation mollit ut
        voluptate qui pariatur.
      </Text>
    ),
    author: 'Lon Kamena',
    date: 'June 12, 2018',
  },
  {
    id: 'a3e1d0c3-7188-49b1-945b-0c079c160064',
    href: '/2018/05/31/slug',
    title: (
      <Heading as="h2" mb={3}>
        Nostrud labore enim id amet enim proident nostrud exercitation laborum
      </Heading>
    ),
    description: (
      <Text as="p" mb={3}>
        Labore non dolore anim excepteur deserunt. Sint occaecat id occaecat non
        ut consequat veniam consectetur ea ea aute ad enim. Labore officia enim
        ipsum aute veniam laborum id ad Lorem dolore eu reprehenderit laborum.
        Ea enim proident tempor mollit fugiat incididunt eiusmod consequat.
        Commodo aute labore ipsum dolor irure sunt incididunt commodo veniam.
        Irure labore non deserunt sint.
      </Text>
    ),
    author: 'Orin Sissons',
    date: 'May 31, 2018',
  },
  {
    id: 'e72b1ae2-c1a2-4255-bf19-976074f78291',
    href: '/2018/05/15/slug',
    title: (
      <Heading as="h2" mb={3}>
        Ea irure irure occaecat cupidatat pariatur elit aliquip deserunt sit
        mollit excepteur ex dolor
      </Heading>
    ),
    description: (
      <Text as="p" mb={3}>
        Ipsum dolor consequat est incididunt. Occaecat voluptate tempor
        incididunt cillum labore aliquip. Excepteur cupidatat aliqua quis
        pariatur veniam consectetur reprehenderit dolor excepteur anim dolore
        anim eu tempor. Tempor dolore consectetur sit voluptate reprehenderit
        nisi ut elit est tempor laboris fugiat.
      </Text>
    ),
    author: 'Knox Simes',
    date: 'May 15, 2018',
  },
  {
    id: 'f8374972-768d-4f54-be36-ae986da7343e',
    href: '/2018/05/02/slug',
    title: (
      <Heading as="h2" mb={3}>
        Officia enim aute amet sit minim veniam nostrud veniam
      </Heading>
    ),
    description: (
      <Text as="p" mb={3}>
        Esse nisi eiusmod labore commodo pariatur dolore dolor sint officia ad
        pariatur. Labore qui aliqua nulla nulla proident in ut do sint eiusmod
        exercitation. Elit do ipsum exercitation esse mollit ipsum enim eiusmod
        ea aute duis amet. Sit dolor ut nostrud fugiat est aute labore voluptate
        adipisicing.
      </Text>
    ),
    author: 'Adelaida Hurndall',
    date: 'May 2, 2018',
  },
  {
    id: 'de501562-fc22-4c38-984e-db27623273fc',
    href: '/2018/04/20/slug',
    title: (
      <Heading as="h2" mb={3}>
        Sunt commodo fugiat qui culpa excepteur occaecat cupidatat
      </Heading>
    ),
    description: (
      <Text as="p" mb={3}>
        Occaecat amet in laboris tempor amet reprehenderit exercitation esse
        tempor tempor id in tempor ullamco. Excepteur qui Lorem commodo
        cupidatat consequat cupidatat eiusmod ipsum commodo. Magna consequat
        dolore do do cillum veniam cupidatat pariatur minim.
      </Text>
    ),
    author: 'Jeff Holsall',
    date: 'April 20, 2018',
  },
  {
    id: 'e4c404a7-1d41-4a35-bd0f-6e18b2c54926',
    href: '/2018/04/05/slug',
    title: (
      <Heading as="h2" mb={3}>
        Aliquip duis pariatur enim cupidatat eu laborum cillum pariatur minim id
      </Heading>
    ),
    description: (
      <Text as="p" mb={3}>
        Laborum ea sunt voluptate in cupidatat aliquip dolore cillum Lorem. Sint
        esse exercitation laboris dolor minim. Cupidatat quis ea in incididunt
        anim ad ea labore ipsum qui.
      </Text>
    ),
    date: 'April 5, 2018',
    author: 'Chaddie Bordes',
  },
  {
    id: '8328492a-335f-4226-bd56-a8c5f3778242',
    href: '/2018/03/14/slug',
    title: (
      <Heading as="h2" mb={3}>
        Pariatur ad sunt minim velit ex incididunt quis
      </Heading>
    ),
    description: (
      <Text as="p" mb={3}>
        Qui amet exercitation minim dolore. Excepteur sint irure id culpa duis
        enim culpa cillum excepteur non eiusmod deserunt et ut. Ea excepteur ad
        consequat laborum adipisicing. Ut nulla ipsum enim pariatur non laboris
        eu duis non nostrud nostrud. Laboris non id mollit cillum aliqua Lorem
        nostrud aute aute tempor occaecat. Ullamco labore Lorem et adipisicing
        dolor non in culpa.
      </Text>
    ),
    author: 'Ruthi Kunat',
    date: 'March 14, 2018',
  },
  {
    id: '99272059-a47a-4609-8318-3bdca47d0a80',
    href: '/2018/02/28/slug',
    title: (
      <Heading as="h2" mb={3}>
        Sit elit est ullamco non amet irure
      </Heading>
    ),
    description: (
      <Text as="p" mb={3}>
        Nulla aliqua irure consectetur et occaecat ut dolore et velit.
        Exercitation et duis irure amet eiusmod quis veniam culpa duis culpa.
        Non enim Lorem labore et dolor ullamco tempor deserunt officia.
        Excepteur do dolore nostrud occaecat voluptate adipisicing tempor velit
        anim amet ad exercitation proident.
      </Text>
    ),
    author: 'Deanna Effnert',
    date: 'February 28, 2018',
  },
  {
    id: 'b1760e59-3cd4-46b7-a929-e6208442503a',
    href: '/2018/02/13/slug',
    title: (
      <Heading as="h2" mb={3}>
        Ex in elit ullamco ad Lorem deserunt exercitation excepteur aliquip eu
        ad consequat
      </Heading>
    ),
    description: (
      <Text as="p" mb={3}>
        Minim aliqua dolor fugiat voluptate sunt adipisicing veniam nostrud.
        Occaecat amet tempor consequat Lorem sint veniam esse excepteur mollit.
        Incididunt excepteur dolor reprehenderit excepteur ipsum enim magna
        velit elit enim id cupidatat anim non. Officia dolor ad pariatur mollit
        ea cupidatat. Consequat ullamco enim esse fugiat.
      </Text>
    ),
    author: 'Carr Missenden',
    date: 'February 13, 2018',
  },
];

const GridOfPosts = () => (
  <Container variant="narrow" my={3}>
    <Grid gap={4} columns={1}>
      {posts.map(({ id, href, ...post }) => (
        <Link key={id} href={href} variant="text">
          <PostPreview post={{ ...post }} />
        </Link>
      ))}
    </Grid>
  </Container>
);

export default GridOfPosts;
