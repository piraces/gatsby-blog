import React from 'react';
import { withPrefix, graphql } from 'gatsby';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';

const imgStyle = {
  maxWidth: '50%'
};

const NotFoundTemplate = ({ data }) => {
  const {
    title,
    subtitle
  } = data.site.siteMetadata;

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="🔍 There's nothing around here...">
        <picture>
          <source
            srcSet={`${withPrefix('/not-found')}.webp`}
            className={imgStyle}
            alt="Not found animation"
            type="image/webp"
          />
          <source
            srcSet={`${withPrefix('/not-found')}.jpg`}
            className={imgStyle}
            alt="Not found animation"
            type="image/jpeg"
          />
          <img
            src={`${withPrefix('/not-found')}.jpg`}
            className={imgStyle}
            alt="Not found animation"
          />
        </picture>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`;

export default NotFoundTemplate;
