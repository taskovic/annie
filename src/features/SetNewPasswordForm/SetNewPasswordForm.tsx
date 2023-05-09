import InputPassword from "components/forms/InputPassword/InputPassword";
import { useState } from "react";
import LocalStorage from "services/local-storage";
import { useNavigate, useSearchParams } from "react-router-dom";
import CTAButton from "components/ui/CTAButton/CTAButton";
import ErrorMessage from "components/ui/ErrorMessage/ErrorMessage";
import PasswordStrength from "components/forms/PasswordStrength/PasswordStrength";
import passwordStrengthChecker from "utils/password-strength-checker";
import { TSetNewPasswordStrength } from "~/types";
import { updatePassword } from "api/auth";


export default function SetNewPasswordForm() {
  const [searchParams] = useSearchParams();
  const [hasError, setError] = useState<string | null>("");
  const [formData, setFormData] = useState({
    password: "",
    rePassword: ""
  });
  const [strength, setStrength] = useState<TSetNewPasswordStrength>({
    minChar: "idle",
    containNumber: "idle",
    uppercaseChar: "idle",
    specialChar: "idle",
    lowercaseChar: "idle"
  });

  const navigate = useNavigate();
  const { password, rePassword } = formData;

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
    const userId = searchParams.get("userId");
    const token = searchParams.get("token");

    const error = checkErrors();

    if (error) {
      setError(error);
      return;
    }

    try {
      await updatePassword(userId as string, {
        token: token as string,
        password: password
      });
      LocalStorage.clear();
      navigate("/password-changed");
    } catch(err) {
      setError("Something is wrong. Server error");
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
    if (name === "rePassword") return;
    const strength = passwordStrengthChecker(value);
    setStrength(strength);
  };

  return (
    <>
      <InputPassword
        password={password}
        hasError={!!hasError}
        onChange={handleInputChange}
        placeholder="New Password"
      />
      <PasswordStrength strength={strength} />
      <InputPassword
        password={rePassword}
        hasError={!!hasError}
        onChange={handleInputChange}
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
