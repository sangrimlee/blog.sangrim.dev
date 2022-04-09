const path = require('path');
const lodash = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        assets: path.resolve(__dirname, 'src/assets'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        utils: path.resolve(__dirname, 'src/utils'),
        layouts: path.resolve(__dirname, 'src/layouts'),
        contexts: path.resolve(__dirname, 'src/contexts'),
        constants: path.resolve(__dirname, 'src/constants'),
        components: path.resolve(__dirname, 'src/components'),
        containers: path.resolve(__dirname, 'src/containers'),
      },
    },
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode }).replace(/\/$/, '');
    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(
    __dirname,
    'src/templates/PostTemplate.tsx',
  );
  const postByTagTemplate = path.resolve(
    __dirname,
    'src/templates/PostByTagTemplate.tsx',
  );

  const queryResult = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
        filter: { fileAbsolutePath: { regex: "/posts/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  if (queryResult.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  const {
    data: {
      allMarkdownRemark: { edges: posts },
      tagsGroup: { group: tags },
    },
  } = queryResult;

  const generatePostPage = ({
    node: {
      fields: { slug },
    },
    previous,
    next,
  }) => {
    const pageOptions = {
      path: slug,
      component: postTemplate,
      context: { slug, previous, next },
    };
    createPage(pageOptions);
  };

  const generateTagPage = (tag) => {
    const pageOptions = {
      path: `/tags/${lodash.kebabCase(tag.fieldValue)}/`,
      component: postByTagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    };
    createPage(pageOptions);
  };

  posts.forEach(generatePostPage);
  tags.forEach(generateTagPage);
};
