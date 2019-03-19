import React, { Component } from "react";
import { graphql, compose, withApollo } from "react-apollo";
import { allTodos, updateTodo } from "../Graphql/Todo";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import Todo from "../Components/Todo";

/**
 * Graphql HOC Example
 */

class TodoList extends Component {
  state = {
    loadedTodos: []
  };

  loadTodos = async () => {
    const { data } = await this.props.client.query({
      query: allTodos,
      fetchPolicy: "network-only" //Bug?
    });
    console.log(data);
    const { allTodos: loadedTodos } = data;
    this.setState({
      loadedTodos
    });
  };

  render() {
    const { updateTodo } = this.props;
    const { loadedTodos } = this.state;
    return (
      <Grid container>
        <div style={{ marginTop: "20px" }}>
          <Button
            variant="raised"
            color="secondary"
            onClick={() => this.loadTodos()}
          >
            Load TODOS
          </Button>
        </div>
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
  }
}

export default compose(
  graphql(updateTodo, {
    name: "updateTodo"
  }),
  withApollo
)(TodoList);
