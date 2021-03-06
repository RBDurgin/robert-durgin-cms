import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import { PageTemplateType, PageTemplateDefaultProps } from '../types/page-template-type';
import { PageType, PageTypeDefaultProps } from '../types/page-type';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: '4rem' }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={`${tag}tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  ...PageTemplateType,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  tags: PropTypes.arrayOf(PropTypes.string),
};

BlogPostTemplate.defaultProps = {
  ...PageTemplateDefaultProps,
  contentComponent: null,
  tags: [],
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  const ogArticleTags = post.frontmatter.tags.map(tag => (
    <meta property="aritcle:tag" content={tag} key={`og_article_tag_${tag}`} />
  ));

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={(
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
            <meta property="og:type" content="article" />
            {ogArticleTags}
          </Helmet>
)}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = PageType;
BlogPost.defaultProps = PageTypeDefaultProps;

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
