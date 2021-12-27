import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GITHUB_API_URI, GITHUB_AUTH_TOKEN } from './constants';

const githubClient = new ApolloClient({
  uri: GITHUB_API_URI,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${GITHUB_AUTH_TOKEN}`,
  },
});

export default githubClient;
