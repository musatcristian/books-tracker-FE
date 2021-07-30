const enum GRAPHQL_CONSTANTS {
  localURI = 'http://localhost:4001/',
  herokuURI = 'https://bookstracker.herokuapp.com/',
}

export const API_URI =
  process.env.NODE_ENV === 'development' ? GRAPHQL_CONSTANTS.localURI : GRAPHQL_CONSTANTS.herokuURI;
