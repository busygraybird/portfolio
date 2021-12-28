import { gql, useQuery } from '@apollo/client';
import { atom, useRecoilState } from 'recoil';
import { DEFAULT_REPOS_PAGE_SIZE, DEFAULT_USER_NAME } from './constants';
import { useEffect } from 'react';

const myRepos = gql`
  query getMyRepos($login: String!, $count: Int!, $cursor: String) {
    user(login: $login) {
      repositories(first: $count, after: $cursor) {
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
        totalCount
        pageInfo {
          endCursor
          startCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;

export const useMyReposQuery = ({ cursor }) => {
  const { loading, data, error } = useQuery(myRepos, {
    variables: {
      login: DEFAULT_USER_NAME,
      count: DEFAULT_REPOS_PAGE_SIZE,
      cursor,
    },
  });

  return { loading, data, error };
};

export const reposCursorState = atom({
  key: 'reposCursorState',
  default: null,
});
