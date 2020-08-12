module.exports = {
  siteMetadata: {
    title: 'MDS (@maiertech design system)',
    shortName: 'MDS',
    description: 'Design system for @maiertech websites.',
  },
  plugins: [
    {
      resolve: '@primer/gatsby-theme-doctocat',
      options: {
        repoRootPath: '..',
      },
    },
  ],
};
