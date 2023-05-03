import { useNavigate } from "react-router-dom";
import Redirect from "components/icons/Redirect/Redirect";
import "./redirect-button.scss";

interface IRedirectButton {
  path: string,
  text: string
}

export default function RedirectButton({
  path,
  text = "DUMMY TEXT"
}: IRedirectButton) {
  const navigate = useNavigate();

  function handleRedirect() {
    if (!path) return;
    navigate(path);
  }

  return (
    <button
      className="annie-redirect-button" 
      onClick={handleRedirect}>
      { text }
      <span>
        <Redirect />
      </span>
    </button>
  )
}
