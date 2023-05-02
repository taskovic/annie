import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "api/auth";
import LocalStorage from "services/local-storage";
import "./style.scss";

export default function Logout() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    logout()
      .then(() => {
      LocalStorage.clear();
      navigate("/login");
    }).catch(() => {
      setErrorMessage("Error while signing out!");
      LocalStorage.clear();
    })
  }, []);

  return (
    <div className="annie-logut">
      <h1>{ errorMessage } {"---->"}  <Link to={"/logout"}>Try again!</Link></h1>
      
    </div>
  )
}