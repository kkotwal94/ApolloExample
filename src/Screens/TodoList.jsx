import React from "react";
import { graphql, Query, compose, Mutation } from "react-apollo";
import { allTodos, updateTodo } from "../Graphql/Todo";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Todo from "../Components/Todo";
import { useQuery, useMutation } from "react-apollo-hooks";

//TODO: Talking points: skip!, HOC vs RenderProps vs Hooks.

/**
 * Graphql HOC Example
 */

const TodoList = ({ allTodos, updateTodo }) => {
  const { loading, allTodos: loadedTodos, error } = allTodos;
  console.log(loading);
  console.log(loadedTodos);

  if (loading) {
    return <p>{loading}</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Grid container>
      <List>
        {loadedTodos.map((aTodo, index) => (
          <Grid item xs={12} key={`TodoLoaded-${index}`}>
            <Todo
              id={aTodo._id}
              author={aTodo.author}
              todo={aTodo.todo}
              isComplete={aTodo.isComplete}
              onToggle={() =>
                updateTodo({
                  variables: {
                    author: aTodo.author,
                    _id: aTodo._id,
                    isComplete: !aTodo.isComplete,
                    todo: aTodo.todo
                  }
                })
              }
            />
          </Grid>
        ))}
      </List>
    </Grid>
  );
};

export default compose(
  graphql(allTodos, {
    name: "allTodos"
  }),
  graphql(updateTodo, {
    name: "updateTodo"
  })
)(TodoList);

/**
 * React hooks example
 */
// const TodoList = () => {
//   const { data, loading, error } = useQuery(allTodos);
//   const updateTodoMutation = useMutation(updateTodo);
//   if (loading) {
//     return <p>{loading}</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   const { allTodos: loadedTodos } = data;

//   console.log(loading);
//   console.log(loadedTodos);

//   return (
//     <Grid container>
//       {loadedTodos.map((aTodo, index) => (
//         <Grid item xs={12} key={`TodoLoaded-${index}`}>
//           <Todo
//             id={aTodo._id}
//             author={aTodo.author}
//             todo={aTodo.todo}
//             isComplete={aTodo.isComplete}
//             onToggle={() =>
//               updateTodoMutation({
//                 variables: {
//                   author: aTodo.author,
//                   _id: aTodo._id,
//                   isComplete: !aTodo.isComplete,
//                   todo: aTodo.todo
//                 }
//               })
//             }
//           />
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default TodoList;

// const TodoList = () => {
//   return (
//     <Query query={allTodos}>
//       {({ loading, error, data }) => {
//         if (loading) return "Loading...";
//         if (error) return `Error! ${error.message}`;
//         const { allTodos: loadedTodos } = data;
//         return (
//           <Mutation mutation={updateTodo}>
//             {updateTodoMutation => (
//               <Grid container>
//                 {loadedTodos.map((aTodo, index) => (
//                   <Grid item xs={12} key={`TodoLoaded-${index}`}>
//                     <Todo
//                       id={aTodo._id}
//                       author={aTodo.author}
//                       todo={aTodo.todo}
//                       isComplete={aTodo.isComplete}
//                       onToggle={() =>
//                         updateTodoMutation({
//                           variables: {
//                             author: aTodo.author,
//                             _id: aTodo._id,
//                             isComplete: !aTodo.isComplete,
//                             todo: aTodo.todo
//                           }
//                         })
//                       }
//                     />
//                   </Grid>
//                 ))}
//               </Grid>
//             )}
//           </Mutation>
//         );
//       }}
//     </Query>
//   );
// };

// export default TodoList;
