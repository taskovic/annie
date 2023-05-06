import SetNewPasswordForm from "features/SetNewPasswordForm/SetNewPasswordForm";
import LogoWhite from "components/ui/LogoWhite/LogoWhite";
import RedirectButton from "components/ui/RedirectButton/RedirectButton";
import setNewPassword from "assets/images/set-new-password.svg";
import "./set-new-password.scss";

export default function SetNewPassword() {
  return (
    <div className="annie-set-new-password-view">
      <div className="new-password-wrapper">
        <div className="new-password-description">
          <LogoWhite />
          <h1>
            <span>Compassionate</span> care for life's most precious moments.
          </h1>
          <p>
            Together, we can ensure exceptional care for every family, 
            starting with our most vulnerable patients nearing end-of-life
          </p>
        </div>
        <div className="new-password-form">
          <RedirectButton path={"/login"} text={"Back to Login"} />
          <img className="forgot-icon" src={setNewPassword} alt="Set new password icon" />
          <h1>Set a new password</h1>
          <p>Your new password must be different to your previously used password.</p>
          <SetNewPasswordForm />
        </div>
      </div>
    </div>
  );
}
