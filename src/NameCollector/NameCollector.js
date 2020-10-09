import React from "react";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/core";

import usePeopleForm from "./usePeopleForm";

const NameCollector = () => {
  const onSubmit = (data) => console.log("data", data);
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
