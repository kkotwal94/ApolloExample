import gql from "graphql-tag";

const allTodos = gql`
  query allTodos {
    allTodos {
      _id
      author
      todo
      isComplete
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

const addTodo = gql`
  mutation addTodo($author: String!, $isComplete: Boolean!, $todo: String!) {
    addTodo(todo: { author: $author, isComplete: $isComplete, todo: $todo }) {
      _id
      author
      isComplete
      todo
    }
  }
`;

const updateTodo = gql`
  mutation updateTodo(
    $_id: ID!
    $author: String!
    $isComplete: Boolean!
    $todo: String!
  ) {
    updateTodo(
      _id: $_id
      todo: { author: $author, isComplete: $isComplete, todo: $todo }
    ) {
      _id
      author
      isComplete
      todo
    }
  }
`;

export { allTodos, addTodo, updateTodo };
