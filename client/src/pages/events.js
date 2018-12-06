import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import moment from 'moment';

const EventPage = ({ data }) => (
  <Layout>
    <h1>Upcoming Events</h1>
    <ul>
      {data.allStrapiEvent.edges.map(document => (
        <li key={(document.node.name).split(' ').join('-')}>
          <h2>
          <Link to={`/events/${moment(document.node.date).format('MM-DD-YY')}`}>{moment(document.node.date).format('MMMM Do')}</Link>
          </h2>
          <p>
          <Link to={`/events/${moment(document.node.date).format('MM-DD-YY')}/${(document.node.name).split(' ').join('-')}`}>{document.node.name}</Link>
          </p>
        </li>
      ))}
    </ul>
  </Layout>
);

export default EventPage;

export const pageQuery = graphql`
  query EventQuery {
    allStrapiEvent {
      edges {
        node {
          id
          name
          date
        }
      }
    }
  }
`;
