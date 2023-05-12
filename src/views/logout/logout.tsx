import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LocalStorage from "services/local-storage";
import { useLogoutMutation } from "api/authSlice";
import "./style.scss";

export default function Logout() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("")

  const [
    logout,
    { 
      isLoading, 
      isSuccess,
      isError,
      error 
    }
  ] = useLogoutMutation();

  if (isLoading) {
    console.log("Loading... ");
  }

  if (isSuccess) {
    LocalStorage.clear();
    navigate("/login");
  }

  if (isError) {
    console.error("LoginError: ", error);
  }

  useEffect(() => {
    logout("");
  }, []);

  return (
    <div className="annie-logut">
      <h1>{ errorMessage } {"---->"}  <Link to={"/logout"}>Try again!</Link></h1>
    </div>
  )
}