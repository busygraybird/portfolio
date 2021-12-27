import { ApolloClient, InMemoryCache } from '@apollo/client';
// import { GITHUB_AUTH_TOKEN } from './constants';

const githubClient = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: 'Bearer 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',
  },
});

export default githubClient;
