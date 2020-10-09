import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

import NameCollector from "../NameCollector/NameCollector";

const HELLO_WORLD_QUERY = gql`
  query helloWorld {
    helloWorld
  }
`;

function App() {
  const { data, loading, error } = useQuery(HELLO_WORLD_QUERY);
  console.log({ data, loading, error });

  return (
    <div>
      <NameCollector></NameCollector>
    </div>
  );
}

export default App;
