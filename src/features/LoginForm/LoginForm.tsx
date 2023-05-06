import InputEmail from "components/forms/InputEmail/InputEmail";
import { useState } from "react";
import { login } from "api/auth";
import LocalStorage from "services/local-storage";
import { useNavigate } from "react-router-dom";
import InputPassword from "components/forms/InputPassword/InputPassword";
import InputCheckbox from "components/forms/InputCheckbox/InputCheckbox";
import CTAButton from "components/ui/CTAButton/CTAButton";
import ForgotPasswordButton from "components/ui/ForgotPasswordButton/ForgotPasswordButton";
import ErrorMessage from "components/ui/ErrorMessage/ErrorMessage";

export default function LoginForm() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const [hasError, setError] = useState("");
  const navigate = useNavigate();
  const { email, password } = formData;

  function handleSubmit() {
    if (!email || !password) return setError("Email or password must be provided.");
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
      <InputPassword 
        onChange={handleInputChange} 
        password={password}
        placeholder="Password" />
      { hasError &&
        <ErrorMessage 
          message={hasError} 
          onClick={() =>setError("")} />
      }
      <div className="remember-me">
        <InputCheckbox 
          onChange={handleInputChange} 
          name="remember"
          placeholder="Remember me" />
        <ForgotPasswordButton path="/sdasds" />
      </div>
      <CTAButton
        text="Login"
        onClick={handleSubmit} />
    </>
  );
}
