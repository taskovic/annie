import Mail from "components/icons/Mail/Mail";
import "./input-email.scss";

interface IInputEmail {
  onChange: Function,
  email: string,
  placeholder: string
}

export default function InputEmail({
  onChange,
  email,
  placeholder
}: IInputEmail) {
  return (
    <div className="annie-input-email">
      <Mail />
      <input
        className="input-email"
        type="text"
        name="email"
        onChange={(e) => onChange(e)}
        value={email}
        placeholder={placeholder}
      />      
    </div>
  )
}
