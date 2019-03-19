import React, { Component } from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";
import { Apollo as client, Theme as theme } from "./Initialize";
import {
  Home,
  CreateTodo,
  TodoList,
  LoadingTodoList,
  OptimisticResponse
} from "./Screens";
import { Navigation, Notification } from "./Components";
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ApolloProviderHooks client={client}>
          <MuiThemeProvider theme={theme}>
            <BrowserRouter>
              <div>
                <Navigation />
                <Route exact path="/todos" component={TodoList} />
                <Route exact path="/loaded-todos" component={LoadingTodoList} />
                <Route exact path="/create-todo" component={CreateTodo} />
                <Route
                  exact
                  path="/optimistic-response"
                  component={OptimisticResponse}
                />
                <Route exact path="/" component={Home} />
                <Notification />
              </div>
            </BrowserRouter>
          </MuiThemeProvider>
        </ApolloProviderHooks>
      </ApolloProvider>
    );
  }
}

export default App;
