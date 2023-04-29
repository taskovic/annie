import { useState } from "react";
import LoginForm from "../features/LoginForm";
import { login } from "../api/auth";

export default function Login() {
  const [formData, setFormData] = useState({
    email: null,
    password: null,
  });
  const [hasError, setError] = useState({});

  function handleSubmit(e: Event) {
    e.preventDefault();

    login(formData)
      .then((resp) => {
        //TODO: Redirect user on proper page
      })
      .catch((err) => {
        setError(err);
      });
  }

  function handleInputChange(e: any) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <LoginForm
      onSubmit={handleSubmit}
      handleInputChange={handleInputChange}
      formData={formData}
      hasError={hasError}
    />
  );
}
