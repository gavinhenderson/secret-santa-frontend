import React, { useState } from "react";
import { Box, Button, Checkbox, Stack, Text } from "@chakra-ui/core";

const SinglePerson = ({ person, people, toggleException }) => {
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
        {restOfPeople.map((currentPerson) => {
          const isChecked = !person.exceptions.includes(currentPerson.id);

          const onChange = () => toggleException(person.id, currentPerson.id);
          return (
            <Box key={currentPerson.id}>
              <Checkbox onChange={onChange} isChecked={isChecked}>
                {currentPerson.name}
              </Checkbox>
            </Box>
          );
        })}
      </Stack>
    </>
  );
};

export const ExceptionSetting = ({ people, toggleException, onSubmit }) => {
  return (
    <Box padding={4}>
      <Stack spacing={6}>
        {people.map((person) => (
          <Box key={person.id}>
            <SinglePerson
              toggleException={toggleException}
              person={person}
              people={people}
            ></SinglePerson>
          </Box>
        ))}
      </Stack>
      <Box pt={4}>
        <Button onClick={onSubmit}>Submit</Button>
      </Box>
    </Box>
  );
};
