import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@chakra-ui/core";

import "./index.css";
import App from "./App/App";
import * as serviceWorker from "./serviceWorker";
import { client } from "./apollo-client";
import { chakraTheme } from "./config";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={chakraTheme}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
