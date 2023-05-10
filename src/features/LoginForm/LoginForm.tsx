import InputEmail from "components/forms/InputEmail/InputEmail";
import { useState } from "react";
import LocalStorage from "services/local-storage";
import { useNavigate } from "react-router-dom";
import InputPassword from "components/forms/InputPassword/InputPassword";
import InputCheckbox from "components/forms/InputCheckbox/InputCheckbox";
import CTAButton from "components/ui/CTAButton/CTAButton";
import ForgotPasswordButton from "components/ui/ForgotPasswordButton/ForgotPasswordButton";
import ErrorMessage from "components/ui/ErrorMessage/ErrorMessage";
import { useLoginMutation } from "api/authSlice";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: true
  });
  const [hasError, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { email, password } = formData;

  const [
    login,
    { 
      data,
      isLoading, 
      isSuccess,
      isError,
      error 
    }
   ] = useLoginMutation();
  
   if (isLoading) {
    console.log("Loading... ");
   }

   if (isSuccess) {
    LocalStorage.setUser(data);
    navigate("/dashboard");
   }

   if (isError) {
    console.error("LoginError: ", error);
   }

  function handleSubmit() {
    if (!email || !password) return setError("Email or password must be provided.");
    login(formData);
  }

  function handleInputChange(e: any) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleCheckboxChange(name: string, value: boolean) {
    setFormData({ ...formData, [name]: value });
  }

  return (
    <>
      <InputEmail 
        onChange={handleInputChange} 
        email={email}
        hasError={hasError ? true : false}
        placeholder="Email Address" />
      <InputPassword 
        onChange={handleInputChange} 
        password={password}
        hasError={hasError ? true : false}
        placeholder="Password" />
      { hasError &&
        <ErrorMessage 
          message={hasError} 
          onClick={() => setError("")} />
      }
      <div className="remember-me">
        <InputCheckbox 
          onChange={handleCheckboxChange} 
          name="remember"
          placeholder="Remember me"
          checked={formData.rememberMe} />
        <ForgotPasswordButton path="/forgot-password" />
      </div>
      <CTAButton
        text="Login"
        click={handleSubmit} />
    </>
  );
}
