import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import moment from 'moment';
import marked from 'marked';

const PostPage = ({ data }) => (
  <Layout>
    <ul>
      {data.allStrapiPost.edges.map(document => (
        <li key={document.node.id}>
          <p>{moment(document.node.date).format("MMMM Do, YYYY")}</p>
          <h2>
            {document.node.title}
          </h2>

            <div dangerouslySetInnerHTML={{ __html: (marked(document.node.body))}} />          
          <p>Posted by: {document.node.author}
          </p>
        </li>
      ))}
    </ul>
  </Layout>
);

export default PostPage;

export const pageQuery = graphql`
  query PostQuery {
    allStrapiPost {
      edges {
        node {
          id
          title
          body
          author
          date
          image1
          image2
        }
      }
    }
  }
`;