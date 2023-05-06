import LogoWhite from "components/ui/LogoWhite/LogoWhite";
import RedirectButton from "components/ui/RedirectButton/RedirectButton";
import emailSendedImg from "assets/images/email-sended.svg"
import "./email-sended.scss";

export default function EmailSended() {
  return (
    <div className="annie-email-sended-view">
      <div className="sended-wrapper">
        <div className="sended-description">
          <LogoWhite />
          <h1>
            <span>Compassionate</span> care for life's most precious moments.
          </h1>
          <p>
            Together, we can ensure exceptional care for every family, 
            starting with our most vulnerable patients nearing end-of-life
          </p>
        </div>
        <div className="sended-message">
          <img src={emailSendedImg} alt="Email sended" />
          <h1>Email Sent!</h1>
          <p>We’ve sent you an email intruction to reset your password.</p>
          <RedirectButton path={"/login"} text={"Back to Login"} />
        </div>
      </div>
    </div>
  );
}
