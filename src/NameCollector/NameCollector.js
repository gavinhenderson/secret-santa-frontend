import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Tooltip,
} from "@chakra-ui/core";
import { gql, useMutation } from "@apollo/client";

import usePeopleForm from "./usePeopleForm";

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

const NameCollector = () => {
  const [generateMatches, { data, loading, error }] = useMutation(
    GENERATE_MATCHES
  );
  const onSubmit = (data) => {
    const peopleWithIds = data.people.map((person) => ({
      ...person,
      id: uuidv4(),
      number: `+44${person.number}`,
    }));

    generateMatches({ variables: { people: peopleWithIds } });
  };
  const { people, newBlankPerson, handleSubmit } = usePeopleForm(onSubmit);

  return (
    <Box padding={4}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={6}>
          {people.map((person) => (
            <FormControl key={person.id}>
              <Stack>
                <Box>
                  <FormLabel {...person.nameLabelProps}>Name</FormLabel>
                  <Input
                    {...person.nameInputProps}
                    placeholder="Gavin Henderson"
                  />
                  <FormErrorMessage isInvalid={person.nameInputProps.isInvalid}>
                    {person.nameError}
                  </FormErrorMessage>
                </Box>

                <Box>
                  <FormLabel {...person.numberLabelProps}>
                    Phone Number
                  </FormLabel>
                  <InputGroup>
                    <InputLeftAddon children="+44" />
                    <Input
                      {...person.numberInputProps}
                      type="tel"
                      roundedLeft="0"
                      placeholder="7414565754"
                    />
                  </InputGroup>
                  <FormErrorMessage
                    isInvalid={person.numberInputProps.isInvalid}
                  >
                    {person.numberError}
                  </FormErrorMessage>
                </Box>
              </Stack>
            </FormControl>
          ))}
        </Stack>
        <Box pt={8}>
          <Button mr={3} onClick={newBlankPerson}>
            Add Person
          </Button>
          <Button type="submit">Submit</Button>
        </Box>
      </form>
    </Box>
  );
};

export default NameCollector;
