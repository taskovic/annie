import { useEffect } from "react";
import InputEmail from "components/forms/InputEmail/InputEmail";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CTAButton from "components/ui/CTAButton/CTAButton";
import ErrorMessage from "components/ui/ErrorMessage/ErrorMessage";
import { forgotPassword } from "~/api/auth";

export default function ForgotPasswordForm() {
  const [formData, setFormData] = useState({
    email: "",
  });
  
  const [hasError, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { email } = formData;

  function handleSubmit() {
    if (!email) return setError("Email must be provided.");
    forgotPassword(email)
      .then(() => {
        navigate("/email-sended");
      }).catch((err) => {
        console.log("forgotpasswordERROR: ", err);
        return setError("Server error");
      });
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
