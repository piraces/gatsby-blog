import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Disqus } from 'gatsby-plugin-disqus';

export const PureComments = ({ data, postTitle, postSlug }) => {
  const disqusConfig = {
    url: `${data.site.siteMetadata.url + postSlug}`,
    identifier: postTitle,
    title: postTitle,
  };

  return (
    <Disqus config={disqusConfig} />
  );
};

export const Comments = (props) => (
  <StaticQuery
    query={graphql`
      query CommentsQuery {
        site {
          siteMetadata {
            url
          }
        }
      }
    `}
    render={(data) => <PureComments {...props} data={data}/>}
  />
);

export default Comments;
