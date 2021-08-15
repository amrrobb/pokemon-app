import {InMemoryCache, ApolloClient} from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache: new InMemoryCache()
})

export default client