import { useState } from "react";

export const useFormDataHandler = (form: object) => {
  const [formData, setFormData] = useState(form);

  function handleInputChange(key: string, value: string) {
    setFormData({ ...formData, [key]: value });
  }

  return { formData, handleInputChange };
}
