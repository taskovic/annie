import Logo from "components/ui/Logo";
import { useInterceptorError } from "~/hooks/useInterceptorError";

export default function LoginForm({
  onSubmit,
  handleInputChange,
  formData: { email, password },
  hasError,
}: any) {

  return (
    <div className="annie-login-form">
      <Logo />
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            name="email"
            onChange={handleInputChange}
            value={email}
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            value={password}
            placeholder="Password"
          />
        </div>
        <button type="submit" disabled={!email || !password}>
          Submit
        </button>
        { hasError &&
          <p>{hasError}</p>
        }
      </form>
    </div>
  );
}
