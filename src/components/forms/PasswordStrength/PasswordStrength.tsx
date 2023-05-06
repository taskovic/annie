import "./password-strength.scss";
import NeutralCheckmark from "components/icons/NeutralCheckmark/NeutralCheckmark";
import GreenCheckmark from "components/icons/GreenCheckmark/GreenCheckmark";
import Error from "components/icons/Error/Error";

export default function PasswordStrength() {
  return (
    <div className="annie-password-strength">
      <p><span><NeutralCheckmark /></span> Min. 6 characters</p>
      <p><span><NeutralCheckmark /></span> Contain number</p>
      <p><span><NeutralCheckmark /></span> Uppercase character</p>
      <p><span><NeutralCheckmark /></span> Contain special character</p>
      <p><span><NeutralCheckmark /></span> Lowercase character</p>
    </div>
  )
}