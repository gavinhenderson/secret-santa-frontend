import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/core";
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
    }));

    generateMatches({ variables: { people: peopleWithIds } });
  };
  const { people, newBlankPerson, handleSubmit } = usePeopleForm(onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      {people.map((person) => (
        <FormControl key={person.id}>
          <FormLabel {...person.nameLabelProps}>Given Name</FormLabel>
          <Input {...person.nameInputProps} placeholder="Gavin Hendereson" />
          <FormLabel {...person.numberLabelProps}>Phone Number</FormLabel>
          <Input {...person.numberInputProps} placeholder="+4778634873838" />
        </FormControl>
      ))}
      <Button onClick={newBlankPerson}>Add Person</Button>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default NameCollector;
