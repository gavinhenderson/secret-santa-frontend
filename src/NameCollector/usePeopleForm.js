import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";

const DEFAULT_PEOPLE = [
  {
    name: "",
    number: "",
  },
];

const usePeopleForm = (onSubmit) => {
  const { register, control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      people: DEFAULT_PEOPLE,
    },
  });

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "people",
    }
  );

  const people = fields.map((field, index) => {
    return {
      ...field,
      numberLabelProps: {
        htmlFor: `number-${field.id}`,
      },
      numberInputProps: {
        id: `number-${field.id}`,
        name: `people[${index}].number`,
        ref: register(),
      },
      nameLabelProps: {
        htmlFor: `name-${field.id}`,
      },
      nameInputProps: {
        name: `people[${index}].name`,
        ref: register(),
        id: `name-${field.id}`,
      },
    };
  });

  return {
    handleSubmit: handleSubmit(onSubmit),
    people,
    newBlankPerson: () => append({ name: "", number: "" }),
  };
};

export default usePeopleForm;
