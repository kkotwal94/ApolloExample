import React, { Component } from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";
import { Home, Pokedex } from "./Screens";
import { Navigation } from "./Components";
import { Apollo as client, Theme as theme } from "./Initialize";
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ApolloProviderHooks client={client}>
          <MuiThemeProvider theme={theme}>
            <BrowserRouter>
              <div>
                <Navigation />
                <Route exact path="/pokedex" component={Pokedex} />
                <Route exact path="/" component={Home} />
              </div>
            </BrowserRouter>
          </MuiThemeProvider>
        </ApolloProviderHooks>
      </ApolloProvider>
    );
  }
}

export default App;
