import InputPassword from "components/forms/InputPassword/InputPassword";
import { useState } from "react";
import LocalStorage from "services/local-storage";
import { useNavigate, useSearchParams } from "react-router-dom";
import CTAButton from "components/ui/CTAButton/CTAButton";
import ErrorMessage from "components/ui/ErrorMessage/ErrorMessage";
import PasswordStrength from "components/forms/PasswordStrength/PasswordStrength";
import passwordStrengthChecker from "utils/password-strength-checker";
import { TSetNewPasswordStrength, TSetNewPassword } from "types";
import { useFormDataHandler } from "hooks/useFormDataHandler";
import { useUpdatePasswordMutation } from "api/authSlice";

export default function SetNewPasswordForm() {
  const [searchParams] = useSearchParams();
  const [hasError, setError] = useState<string | null>("");
  const navigate = useNavigate();

  const { 
    formData, 
    handleInputChange 
  } = useFormDataHandler({
    password: "",
    rePassword: ""
  });
  const { password, rePassword } = formData as TSetNewPassword;

  const [strength, setStrength] = useState<TSetNewPasswordStrength>({
    minChar: "idle",
    containNumber: "idle",
    uppercaseChar: "idle",
    specialChar: "idle",
    lowercaseChar: "idle"
  });

  const [
    updatePassword,
    { 
      isLoading, 
      isSuccess,
      isError,
      error 
    }
  ] = useUpdatePasswordMutation();

  if (isLoading) {
    console.log("Loading... ");
   }

   if (isSuccess) {
    LocalStorage.clear();
    navigate("/password-changed");
   }

   if (isError) {
    console.error("LoginError: ", error);
   }

  const checkErrors = (): string | null => {
    const userId = searchParams.get("userId");
    const token = searchParams.get("token");

    const {
      minChar,
      containNumber,
      uppercaseChar,
      specialChar,
      lowercaseChar
    } = strength;

    if (!password || !rePassword)
      return "Password must be provided.";

    if (
      minChar !== "success" &&
      containNumber !== "success" &&
      uppercaseChar !== "success" &&
      specialChar !== "success" &&
      lowercaseChar !== "success"
    ) return "Password must be strong";

    if (password !== rePassword)
      return "Passwords doesn't match, try again.";

    if (!userId || !token) {
      return "Invalid Reset Password Token!"
    }

    return null;
  }

  const handleSubmit = async () => {
    const userId = searchParams.get("userId") as string;
    const token = searchParams.get("token") as string;
    const error = checkErrors();

    if (error) {
      setError(error);
      return;
    }
    updatePassword({
      userId: userId,
      body: {
        token: token,
        password: password
      }
    });
  };

  const handlePasswordChange = (key: string, value: string) => {
    handleInputChange(key, value);
    setError("");
    if (key === "rePassword") return;
    const strength = passwordStrengthChecker(value);
    setStrength(strength);
  };

  return (
    <>
      <InputPassword
        password={password}
        hasError={!!hasError}
        onChange={handlePasswordChange}
        placeholder="New Password"
      />
      <PasswordStrength strength={strength} />
      <InputPassword
        password={rePassword}
        hasError={!!hasError}
        onChange={handlePasswordChange}
        placeholder="Repeat new password"
        name="rePassword" 
      />
      {hasError &&
        <ErrorMessage
          message={hasError}
          onClick={() => setError("")} />
      }
      <CTAButton
        text="Update Password"
        click={handleSubmit} />
    </>
  );
}
