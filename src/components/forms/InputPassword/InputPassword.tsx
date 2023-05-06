import { useState } from "react";
import Lock from "components/icons/Lock/Lock";
import ShowPassword from "components/icons/ShowPassword/ShowPassword";
import "./input-password.scss";

interface IInputPassword {
  onChange: Function,
  password: string,
  placeholder: string,
  name?: string
}

export default function InputPassword({
  onChange,
  password,
  placeholder,
  name="password"
}: IInputPassword) {
  //const [isPasswordVisible, setPasswordVisibility] = useState(false);

  return (
    <div className="annie-input-password">
      <Lock />
      <input
        className="input-email"
        type={"password"}
        name={name}
        onChange={(e) => onChange(e)}
        value={password}
        placeholder={placeholder}
      />
      <ShowPassword onClick={() => console.log("da")} />      
    </div>
  )
}
