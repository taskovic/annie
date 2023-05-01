import { useState } from "react";
import LoginForm from "features/LoginForm";
import { login } from "api/auth";
import LocalStorage from "services/local-storage";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: null,
    password: null,
  });
  const [hasError, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: Event) {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) return setError("EMAIL OR PASSWORD MUST BE PROVIDED");
    login(formData)
    .then((response) => {
      if (response) {
        const { data } = response;
        LocalStorage.setUser(data);
        navigate('/dashboard');
      }
    }).catch(error => {
      console.log("LOGIN ERROR: ", error)
    })
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
