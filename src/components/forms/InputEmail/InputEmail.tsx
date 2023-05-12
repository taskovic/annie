import Mail from "components/icons/Mail/Mail";
import "./input-email.scss";

interface IInputEmail {
  onChange: Function,
  email: string,
  hasError?: boolean,
  placeholder: string
}

export default function InputEmail({
  onChange,
  email,
  hasError,
  placeholder
}: IInputEmail) {
  return (
    <div className="annie-input-email">
      <Mail />
      <input
        className={`input-email ${hasError && "input-error"}`}
        type="text"
        name="email"
        onChange={(e) => onChange(e.target.name, e.target.value)}
        value={email}
        placeholder={placeholder}
      />      
    </div>
  )
}
