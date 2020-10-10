import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { v4 as uuidv4 } from "uuid";

import NameCollector from "../NameCollector/NameCollector";
import { Box, Link, Text } from "@chakra-ui/core";
import { ExceptionSetting } from "../ExceptionSetting/ExceptionSetting";

const NAME_COLLECTION = "NAME_COLLECTION";
const EXCEPTION_SETTING = "EXCEPTION_SETTING";

const GENERATE_MATCHES = gql`
  mutation generateMatches($people: [PeopleInput!]!) {
    generateMatches(people: $people) {
      validationErrors {
        personId
        field
        error
      }
    }
  }
`;

const HELLO_WORLD = gql`
  query hello {
    helloWorld
  }
`;

function App() {
  // Wake up the server
  useQuery(HELLO_WORLD);

  const [people, setPeople] = useState([]);
  const [step, setStep] = useState(NAME_COLLECTION);

  const [generateMatches, { data, loading, error }] = useMutation(
    GENERATE_MATCHES
  );

  // const [people, setPeople] = useState([
  //   { id: uuidv4(), name: "Gavin", number: 1234, exceptions: [] },
  //   { id: uuidv4(), name: "Linsey", number: 1234, exceptions: [] },
  //   { id: uuidv4(), name: "Scott", number: 1234, exceptions: [] },
  //   { id: uuidv4(), name: "Roland", number: 1234, exceptions: [] },
  //   { id: uuidv4(), name: "Steph", number: 1234, exceptions: [] },
  //   { id: uuidv4(), name: "Naomi", number: 1234, exceptions: [] },
  //   { id: uuidv4(), name: "Elaine", number: 1234, exceptions: [] },
  //   { id: uuidv4(), name: "Stephen", number: 1234, exceptions: [] },
  // ]);
  // const [step, setStep] = useState(EXCEPTION_SETTING);

  const toggleException = (personToToggleId, exception) => {
    const newPeople = people.map((person) => {
      if (person.id !== personToToggleId) return person;

      const oldExceptions = person.exceptions;
      let newExceptions = [];
      if (oldExceptions.includes(exception)) {
        newExceptions = oldExceptions.filter((x) => x !== exception);
      } else {
        newExceptions = [...oldExceptions, exception];
      }

      return {
        ...person,
        exceptions: newExceptions,
      };
    });

    setPeople(newPeople);
  };

  const nextStage = (people) => {
    const fullPeople = people.map((x) => ({ ...x, exceptions: [] }));
    setPeople(fullPeople);
    setStep(EXCEPTION_SETTING);
  };

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
      {step === NAME_COLLECTION && (
        <NameCollector nextStage={nextStage}></NameCollector>
      )}
      {step === EXCEPTION_SETTING && (
        <ExceptionSetting
          people={people}
          toggleException={toggleException}
          onSubmit={() => generateMatches({ variables: { people } })}
        ></ExceptionSetting>
      )}
    </>
  );
}

export default App;
