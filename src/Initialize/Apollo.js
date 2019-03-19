import ApolloClient from "apollo-boost";
import { resolvers } from "../Resolvers";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  resolvers
});

// Set defaults here
client.writeData({
  data: {
    notification: {
      __typename: "Notification",
      message: "Success",
      variant: "Success",
      open: false
    }
  }
});

export default client;
