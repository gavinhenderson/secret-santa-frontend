import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

import NameCollector from "../NameCollector/NameCollector";

function App() {
  return (
    <div>
      <NameCollector></NameCollector>
    </div>
  );
}

export default App;
