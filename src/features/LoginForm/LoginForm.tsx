import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "api/authSlice";
import { useFormDataHandler } from "~/hooks/useFormDataHandler";
import InputEmail from "components/forms/InputEmail/InputEmail";
import LocalStorage from "services/local-storage";
import InputPassword from "components/forms/InputPassword/InputPassword";
import InputCheckbox from "components/forms/InputCheckbox/InputCheckbox";
import CTAButton from "components/ui/CTAButton/CTAButton";
import ForgotPasswordButton from "components/ui/ForgotPasswordButton/ForgotPasswordButton";
import ErrorMessage from "components/ui/ErrorMessage/ErrorMessage";
import { TLogin } from "types";

export default function LoginForm() {
  const [hasError, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const { 
    formData, 
    handleInputChange 
  } = useFormDataHandler({
    email: "",
    password: "",
    rememberMe: true
  });
  const { email, password, rememberMe } = formData as TLogin;

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
          onChange={handleInputChange} 
          name="remember"
          placeholder="Remember me"
          checked={rememberMe} />
        <ForgotPasswordButton path="/forgot-password" />
      </div>
      <CTAButton
        text="Login"
        click={handleSubmit} />
    </>
  );
}
