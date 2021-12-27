import { gql } from '@apollo/client';

export const myRepos = gql`
  query getMyRepos($login: String!, $count: Int!) {
    user(login: $login) {
      repositories(first: $count) {
        nodes {
          name
          createdAt
          description
          descriptionHTML
          id
          languages(first: 10) {
            nodes {
              name
              id
              color
            }
          }
          openGraphImageUrl
        }
      }
    }
  }
`;
