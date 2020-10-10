import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { v4 as uuidv4 } from "uuid";

import NameCollector from "../NameCollector/NameCollector";
import { Box, Link, Text } from "@chakra-ui/core";
import { ExceptionSetting } from "../ExceptionSetting/ExceptionSetting";

const NAME_COLLECTION = "NAME_COLLECTION";
const EXCEPTION_SETTING = "EXCEPTION_SETTING";

function App() {
  const [people, setPeople] = useState([]);
  const [step, setStep] = useState(NAME_COLLECTION);

  // const [people, setPeople] = useState([
  //   { id: uuidv4(), name: "Gavin", number: 1234 },
  //   { id: uuidv4(), name: "Linsey", number: 1234 },
  //   { id: uuidv4(), name: "Scott", number: 1234 },
  //   { id: uuidv4(), name: "Roland", number: 1234 },
  //   { id: uuidv4(), name: "Steph", number: 1234 },
  //   { id: uuidv4(), name: "Naomi", number: 1234 },
  //   { id: uuidv4(), name: "Elaine", number: 1234 },
  //   { id: uuidv4(), name: "Stephen", number: 1234 },
  // ]);
  // const [step, setStep] = useState(EXCEPTION_SETTING);

  const nextStage = (people) => {
    setPeople(people);
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
        <ExceptionSetting people={people}></ExceptionSetting>
      )}
    </>
  );
}

export default App;
