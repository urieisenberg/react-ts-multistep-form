import React from "react";
import { FormInput } from "./Input";

type AccountData = {
  email: string;
  password: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

export const AccountForm = ({
  email,
  password,
  updateFields,
}: AccountFormProps) => {
  return (
    <>
      <h2>Account Details</h2>
      <FormInput
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <FormInput
        label="Password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </>
  );
};
