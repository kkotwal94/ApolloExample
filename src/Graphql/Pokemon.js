import gql from "graphql-tag";

const allPokemon = gql`
  query allPokemon($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      types
      evolutions {
        name
      }
      maxHP
      image
    }
  }
`;

export { allPokemon };
