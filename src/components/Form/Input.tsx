import React from "react";

type FormInputProps = {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormInput = ({
  label,
  name,
  type,
  value,
  onChange,
}: FormInputProps) => {
  return (
    <>
      <div className="form-wrapper">
        <label>{label}</label>
        <input
          required
          type={type}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};
