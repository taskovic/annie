import InputEmail from "components/forms/InputEmail/InputEmail";
import { useState } from "react";
import { login } from "api/auth";
import LocalStorage from "services/local-storage";
import { useNavigate } from "react-router-dom";
import CTAButton from "components/ui/CTAButton/CTAButton";
import ErrorMessage from "components/ui/ErrorMessage/ErrorMessage";

export default function ForgotPasswordForm() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const [hasError, setError] = useState("Incorrect email or password");
  const navigate = useNavigate();
  const { email, password } = formData;

  function handleSubmit() {
    if (!email || !password) return setError("EMAIL OR PASSWORD MUST BE PROVIDED");
    login(formData)
    .then((response) => {
      if (response) {
        const { data } = response;
        LocalStorage.setUser(data);
        navigate('/dashboard');
      }
    }).catch(error => {
      setError(error);
      console.log("LOGIN ERROR: ", error)
    })
  }

  function handleInputChange(e: any) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <>
      <InputEmail 
        onChange={handleInputChange} 
        email={email}
        placeholder="Email Address" />
      { hasError &&
      <ErrorMessage 
        message={hasError} 
        onClick={() =>setError("")} />
      }
      <CTAButton
        text="Reset Password"
        onClick={() => console.log("sta se radi")} />
    </>
  );
}
