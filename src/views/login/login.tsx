import LoginForm from "features/LoginForm/LoginForm";
import LogoWhite from "~/components/ui/LogoWhite/LogoWhite";
import RedirectButton from "~/components/ui/RedirectButton/RedirectButton";
import "./login.scss";

export default function Login() {
  return (
    <div className="annie-login-view">
      <div className="login-wrapper">
        <div className="login-description">
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
          <RedirectButton path={"/dasdsa"} text={"Back to Home"} />
          <h1>Welcome back!</h1>
          <p>Please enter your email address and password</p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
