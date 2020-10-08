import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

import logo from "./logo.svg";
import "./App.css";

const HELLO_WORLD_QUERY = gql`
  query helloWorld {
    helloWorld
  }
`;

function App() {
  const { data, loading, error } = useQuery(HELLO_WORLD_QUERY);

  return (
    <div className="App">
      <header className="App-header">
        <div>{JSON.stringify({ data, loading, error }, null, 2)}</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
