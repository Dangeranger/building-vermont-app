import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const ArchitectPage = ({ data }) => (
  <Layout>
    <h1>Architects</h1>
    <ul>
      {data.allStrapiArchitect.edges.map(document => (
        <li key={document.node.id}>
          <h3>
            <Link to={`architects/${(document.node.name).split(' ').join('-')}`}>
              {document.node.name}
            </Link>
          </h3>
        </li>
      ))}
    </ul>
  </Layout>
);

export default ArchitectPage;

export const pageQuery = graphql`
  query ArchitectQuery {
    allStrapiArchitect(
      sort: {
        fields: [ name ], order: ASC
      }
    ) {
      edges {
        node {
          id
          name
          bio
        }
      }
    }
  }
`;
