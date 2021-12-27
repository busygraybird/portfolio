import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GITHUB_AUTH_TOKEN } from './constants';

const githubClient = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${GITHUB_AUTH_TOKEN}`,
  },
});

export default githubClient;
