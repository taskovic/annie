import InputEmail from "components/forms/InputEmail/InputEmail";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CTAButton from "components/ui/CTAButton/CTAButton";
import ErrorMessage from "components/ui/ErrorMessage/ErrorMessage";
import { useForgotPasswordMutation } from "api/authSlice";

export default function ForgotPasswordForm() {
  const [formData, setFormData] = useState({
    email: "",
  });
  
  const [hasError, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { email } = formData;

  const [
    forgotPassword,
    { 
      isLoading, 
      isSuccess,
      isError,
      error 
    }
  ] = useForgotPasswordMutation();

  if (isLoading) {
    console.log("Loading... ");
   }

   if (isSuccess) {
    navigate("/email-sended");
   }

   if (isError) {
    console.error("LoginError: ", error);
   }

  function handleSubmit() {
    if (!email) return setError("Email is required!");
    forgotPassword({email: email});
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
        hasError={hasError ? true : false}
        placeholder="Email Address" />
      { hasError &&
        <ErrorMessage 
          message={hasError} 
          onClick={() =>setError("")} />
      }
      <CTAButton
        text="Reset Password"
        click={handleSubmit} />
    </>
  );
}
