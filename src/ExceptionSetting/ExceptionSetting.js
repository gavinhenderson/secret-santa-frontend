import React from "react";
import { Box, Button, Checkbox, Stack, Text } from "@chakra-ui/core";

const SinglePerson = ({ person, people }) => {
  const restOfPeople = people.filter((x) => x.id !== person.id);

  return (
    <>
      <Text fontSize="xl" textDecoration="underline">
        {person.name}
      </Text>
      <Text fontStyle="italic">
        Check the names that {person.name}{" "}
        <Text as="span" textDecoration="underline" fontWeight="bold">
          can
        </Text>{" "}
        get given.
      </Text>
      <Stack>
        {restOfPeople.map((currentPerson) => (
          <Box>
            <Checkbox defaultIsChecked>{currentPerson.name}</Checkbox>
          </Box>
        ))}
      </Stack>
    </>
  );
};

export const ExceptionSetting = ({ people }) => {
  return (
    <Box padding={4}>
      <Stack spacing={6}>
        {people.map((person) => (
          <Box>
            <SinglePerson person={person} people={people}></SinglePerson>
          </Box>
        ))}
      </Stack>
      <Box pt={4}>
        <Button>Submit</Button>
      </Box>
    </Box>
  );
};
