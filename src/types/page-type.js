import { shape, string } from 'prop-types';

export const PageType = shape({
  data: shape({
    markdownRemark: shape({
      frontmatter: shape({
        title: string,
        description: string,
      }),
    }),
  }),
});

export const PageTypeDefaultProps = {
  data: {},
};
