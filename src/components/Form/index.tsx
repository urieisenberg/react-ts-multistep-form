import React, { FormEvent, useState } from "react";
import { AccountForm } from "./Account";
import { AddressForm } from "./Address";
import { UserForm } from "./User";
import { useMultiStepForm } from "../../hooks/useMultiStepForm";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  password: string;
  street: string;
  city: string;
  state: string;
  zip: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  email: "",
  password: "",
  street: "",
  city: "",
  state: "",
  zip: "",
};

export const Form = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    previous,
    next,
  } = useMultiStepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
  ]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Creation");
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <div className="form-steps">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className="form-steps">
          {!isFirstStep && <button type="button" onClick={previous}>Back</button>}
          <button type="submit">{isLastStep ? "Submit" : "Next"}</button>
        </div>
      </form>
    </div>
  );
};
