import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import useSiteMetadata from '../components/SiteMetadata';

export const AboutPageTemplate = ({
  title, content, contentComponent, helmet,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      {helmet || ''}
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  helmet: PropTypes.node,
};

AboutPageTemplate.defaultProps = {
  helmet: null,
  content: null,
  contentComponent: null,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const { title } = useSiteMetadata();
  const helmet = (
    <Helmet>
      <title>{`${title} | ${post.frontmatter.title}`}</title>
      <meta property="og:type" content="profile" />
      <meta property="profile:first_name" content="Robert" />
      <meta property="profile:last_name" content="Durgin" />
      <meta property="profile:gender" content="male" />
    </Helmet>
  );

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        helmet={helmet}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }).isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
