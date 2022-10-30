import React from "react";
import { FormInput } from "./Input";

type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export const AddressForm = ({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressFormProps) => {
  return (
    <>
      <h2>Address Details</h2>
      <FormInput
        label="Street"
        name="street"
        type="text"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <FormInput
        label="City"
        name="city"
        type="text"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <FormInput
        label="State"
        name="state"
        type="text"
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <FormInput
        label="Zip"
        name="zip"
        type="text"
        value={zip}
        onChange={(e) => updateFields({ zip: e.target.value })}
      />
    </>
  );
};
