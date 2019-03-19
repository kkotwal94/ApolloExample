import gql from "graphql-tag";

export const resolvers = {
  Mutation: {
    toggleNotification: (_, { open, variant, message }, { cache }) => {
      console.log("Something is happening");
      const query = gql`
        query Notification {
          notification @client {
            message
            variant
            open
          }
        }
      `;
      const previousState = cache.readQuery({ query });
      const data = {
        ...previousState,
        notification: {
          ...previousState.notification,
          open,
          variant,
          message
        }
      };
      cache.writeData({ query, data });
      return null;
    }
  }
};
