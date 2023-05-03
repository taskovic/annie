import InputEmail from "components/forms/InputEmail/InputEmail";
import { useState } from "react";
import { login } from "api/auth";
import LocalStorage from "services/local-storage";
import { useNavigate } from "react-router-dom";
import InputPassword from "~/components/forms/InputPassword/InputPassword";
import RedirectButton from "~/components/ui/RedirectButton/RedirectButton";

export default function LoginForm() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const [hasError, setError] = useState("");
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
      console.log("LOGIN ERROR: ", error)
    })
  }

  function handleInputChange(e: any) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }


  return (
    <div className="annie-login-form">
      <RedirectButton path={"/dasdsa"} text={"Back to Home"} />
      <div>
        <InputEmail 
          onChange={handleInputChange} 
          email={email}
          placeholder="Email Address" />
      </div>
      <div>
        <InputPassword 
          onChange={handleInputChange} 
          password={password}
          placeholder="Password" />
      </div>
      <button type="submit" disabled={!email || !password} onClick={handleSubmit}>
        Submit
      </button>
      { hasError &&
        <p>{hasError}</p>
      }
    </div>
  );
}
