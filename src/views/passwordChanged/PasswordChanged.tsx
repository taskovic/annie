import LogoWhite from "components/ui/LogoWhite/LogoWhite";
import RedirectButton from "components/ui/RedirectButton/RedirectButton";
import passwordChangedImg from "assets/images/password-changed.svg"
import "./password-changes.scss";

export default function PasswordChanged() {
  return (
    <div className="annie-password-changed-view">
      <div className="changed-wrapper">
        <div className="changed-description">
          <LogoWhite />
          <h1>
            <span>Compassionate</span> care for life's most precious moments.
          </h1>
          <p>
            Together, we can ensure exceptional care for every family, 
            starting with our most vulnerable patients nearing end-of-life
          </p>
        </div>
        <div className="changed-message">
          <img src={passwordChangedImg} alt="Password changed" />
          <h1>Password Changed!</h1>
          <p>Your Password has been changed successfully.</p>
          <RedirectButton path={"/login"} text={"Back to Login"} />
        </div>
      </div>
    </div>
  );
}
