import gql from "graphql-tag";

export default gql`
  mutation toggleNotification(
    $open: Boolean!
    $variant: String!
    $message: String!
  ) {
    toggleNotification(open: $open, variant: $variant, message: $message)
      @client {
      open
      variant
      message
    }
  }
`;
