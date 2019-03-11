# Apollo setup example

## Dependencies

First we need to install dependencies

`npm install apollo-boost react-apollo graphql gql`

## For Hooks?

`npm install react-apollo-hooks`

## Client Initialization

Barebones we require a uri for us to connect to a endpoint, whether its localhost:4000 or a public api

```
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "https://graphql-pokemon.now.sh"
});

export default client;
```

## Appending our client to our DOM tree

Once that has been done, we need to have our application (or sub application) that uses apollo to be wrapped by a <ApolloProvier> component. Whether we use hooks, or regular client the result is the same:

```
<ApolloProvider client={client}>
    <Switch>
        <Route path="/" />
        <Route path="/home" />
    </Switch>
</ApolloProvider>
```
