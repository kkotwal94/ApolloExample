import React from "react";
import { graphql } from "react-apollo";
import { allPokemon } from "../Graphql/Pokemon";

const Pokedex = ({ allPokemon }) => <div>Pokedex</div>;

export default graphql(allPokemon, {
  name: "allPokemon",
  options: ownProps => ({
    variables: { first: 10 }
  })
})(Pokedex);
