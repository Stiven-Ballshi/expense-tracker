import { useState, ChangeEvent } from "react";

interface FieldsType {
  [key: string | symbol]: string;
}

export function useFormFields(initialFields: FieldsType) {
  const [fields, setFields] = useState(initialFields);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFields((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFields(initialFields);
  };

  return { handleChange, resetForm, fields };
}
