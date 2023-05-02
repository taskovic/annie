import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LocalStorage from "services/local-storage";
import { resetPassword } from "api/auth";
import "./style.scss";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    const userEmail = LocalStorage.userEmail();
    if (!userEmail) return setErrorMessage("Error while trying to get reset password screen");
    resetPassword(userEmail)
      .then((response) => {
        navigate("/set-new-password");
      }).catch(() => {
        return setErrorMessage("Error while trying to get reset password screen");
      });
  }, []);

  return (
    <div className="annie-reset-password">
      <h1>{ errorMessage } {"---->"}  <Link to={"/reset-password"}>Try again!</Link></h1>
    </div>
  )
}