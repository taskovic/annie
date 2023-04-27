import { useState } from "react";
import LoginForm from "../components/LoginForm"

export default function Login() {

  const [formData, setFormData] = useState({})
  
  function handleSubmit(e: Event) {
    e.preventDefault();
    console.log("Form data: ", formData);
  }

  function handleInputChange(e: any) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return <LoginForm onSubmit={handleSubmit} handleInputChange={handleInputChange} />
}
