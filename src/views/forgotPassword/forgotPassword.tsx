import ForgotPasswordForm from "features/ForgotPasswordForm/ForgotPasswordForm";
import LogoWhite from "components/ui/LogoWhite/LogoWhite";
import RedirectButton from "components/ui/RedirectButton/RedirectButton";
import forgotPasswordIcon from "assets/images/forgot-password.svg";
import "./forgot-password.scss";

export default function ForgotPassword() {
  return (
    <div className="annie-forgot-password-view">
      <div className="forgot-wrapper">
        <div className="forgot-description">
          <LogoWhite />
          <h1>
            <span>Compassionate</span> care for life's most precious moments.
          </h1>
          <p>
            Together, we can ensure exceptional care for every family, 
            starting with our most vulnerable patients nearing end-of-life
          </p>
        </div>
        <div className="login-form">
          <RedirectButton path={"/login"} text={"Back to Login"} />
          <img className="forgot-icon" src={forgotPasswordIcon} alt="Forgot password icon" />
          <h1>Forgot password?</h1>
          <p>We will send you an email with a link to reset your login credentials.</p>
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
}