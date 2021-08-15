import {gql} from '@apollo/client'

export const POKEMON_LIST = gql `
query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
    next
    previous
    nextOffset
    prevOffset
    status
    message
    results {
      id
      url
      name
      image
    }
  }
}
`

export const POKEMON_ONE = gql `
query pokemon($name: String!) {
  pokemon(name: $name) {
    id
    name
    sprites {
      front_default
      back_default
    }
    height
    weight
    stats {
      base_stat
      stat {
        name
      }
    }
    status
    moves {
      move {
        name
      }
    }
    types {
      type {
        name
      }
    }
  }
}
`