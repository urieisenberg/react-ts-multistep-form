import React from "react";
import { FormInput } from "./Input";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export const UserForm = ({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) => {
  return (
    <>
      <h2>User Details</h2>
      <FormInput
        label="First Name"
        name="firstName"
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <FormInput
        label="Last Name"
        name="lastName"
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <FormInput
        label="Age"
        name="age"
        type="number"
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </>
  );
};
