import { useState } from "react";
import Lock from "components/icons/Lock/Lock";
import ShowPassword from "components/icons/ShowPassword/ShowPassword";
import "./input-password.scss";

interface IInputPassword {
  onChange: Function,
  password: string,
  hasError?: boolean,
  placeholder: string,
  name?: string
}

export default function InputPassword({
  onChange,
  password,
  hasError,
  placeholder,
  name="password"
}: IInputPassword) {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  function handleShowPassword() {
    console.log("desava se klik");
    setPasswordVisibility(!isPasswordVisible);
  }

  return (
    <div className="annie-input-password">
      <Lock />
      <input
        className={`input-email ${hasError && "input-error"}`}
        type={isPasswordVisible ? "text" : "password"}
        name={name}
        onChange={(e) => onChange(e)}
        value={password}
        placeholder={placeholder}
      />
      <ShowPassword onClick={handleShowPassword} />      
    </div>
  )
}
