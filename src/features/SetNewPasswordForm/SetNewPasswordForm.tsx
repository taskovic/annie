import InputPassword from "components/forms/InputPassword/InputPassword";
import { useState } from "react";
import LocalStorage from "services/local-storage";
import { useNavigate } from "react-router-dom";
import CTAButton from "components/ui/CTAButton/CTAButton";
import ErrorMessage from "components/ui/ErrorMessage/ErrorMessage";
import PasswordStrength from "components/forms/PasswordStrength/PasswordStrength";

export default function SetNewPasswordForm() {

  const [formData, setFormData] = useState({
    password: "",
    rePassword: ""
  });
  
  const [hasError, setError] = useState("Incorrect email or password");
  const navigate = useNavigate();
  const { password, rePassword } = formData;

  function handleSubmit() {
    // if (!email || !password) return setError("EMAIL OR PASSWORD MUST BE PROVIDED");
    // login(formData)
    // .then((response) => {
    //   if (response) {
    //     const { data } = response;
    //     LocalStorage.setUser(data);
    //     navigate('/dashboard');
    //   }
    // }).catch(error => {
    //   setError(error);
    //   console.log("LOGIN ERROR: ", error)
    // })
  }

  function handleInputChange(e: any) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <>
    <InputPassword
      password={password} 
      onChange={handleInputChange}
      placeholder="New Password"
      />
    
    <PasswordStrength />

    <InputPassword
      password={rePassword} 
      onChange={handleInputChange}
      placeholder="Repeat new password"
      name="rePassword"
      />
    { hasError &&
    <ErrorMessage 
      message={hasError} 
      onClick={() =>setError("")} />
    }
    <CTAButton
      text="Update Password"
      onClick={handleSubmit} />
    </>
  );
}
