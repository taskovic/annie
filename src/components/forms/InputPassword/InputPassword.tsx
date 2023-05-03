import Lock from "components/icons/Lock/Lock";
import "./input-password.scss";

interface IInputPassword {
  onChange: Function,
  password: string,
  placeholder: string
}

export default function InputPassword({
  onChange,
  password,
  placeholder
}: IInputPassword) {
  return (
    <div className="annie-input-password">
      <Lock />
      <input
        className="input-email"
        type="password"
        name="password"
        onChange={(e) => onChange(e)}
        value={password}
        placeholder={placeholder}
      />      
    </div>
  )
}
