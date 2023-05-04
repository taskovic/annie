import { Link } from "react-router-dom"
import Key from "components/icons/Key/Key"
import "./forgot-password-button.scss";

interface IForgotPasswordButton {
  path: string
}

export default function ForgotPasswordButton({
  path
}: IForgotPasswordButton) {
  return (
    <Link className="forgot-password" to={path}>Forgot password <span><Key /></span></Link>
  )
}