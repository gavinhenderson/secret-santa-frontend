import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

import NameCollector from "../NameCollector/NameCollector";
import { Box, Link, Text } from "@chakra-ui/core";

function App() {
  return (
    <>
      <Box margin={4}>
        <Text fontSize="4xl" as="h1">
          Secret Santa
        </Text>
        <Text fontSize="s" fontStyle="italic">
          by{" "}
          <Link color="teal.500" href="https://www.gavinhenderson.me">
            Gavin Henderson
          </Link>
        </Text>
        <Text>
          Enter the names and phone numbers of all the people you want to take
          part in your secret santa game. They will all then be sent a text
          letting them know who they have to buy a present for.
        </Text>
      </Box>
      <NameCollector></NameCollector>
    </>
  );
}

export default App;
