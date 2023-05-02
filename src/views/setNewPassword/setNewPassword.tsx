import { useState, useEffect } from "react";
import LocalStorage from "services/local-storage";
import { useNavigate } from "react-router-dom";
import { updatePassword } from "api/auth";
import "./style.scss";

export default function SetNewPassword() {
  const initalFormData = {
    oldPassword: null,
    newPassword: null,
    repeatPassword: null
  }

  const [formData, setFormData] = useState(initalFormData);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { newPassword, repeatPassword } = formData;
  useEffect(() => {
    return () => {
      setFormData(initalFormData)
      setError("");
    }
  }, []);

  function handleSubmit(): void {
    if (newPassword !== repeatPassword) return setError("Password don't match. Try again.");
    const userData = LocalStorage.getUserData();
    const { user: { id } } = userData;
    const passwords = {
      newPassword: formData.newPassword,
      oldPassword: formData.oldPassword
    }
    updatePassword(id, passwords)
      .then(() => {
        LocalStorage.clear();
        navigate("/login");
      }).catch(() => {
        setError("Error while updating password. Try again.")
      });
  }

  return (
  <div className="annie-set-new-password">
    <div>
      <div>
        <input type="password" name="oldPassword" placeholder="Old password" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
      </div>
      <div>
        <input type="password" name="newPassword" placeholder="New password" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
      </div>
      <div>
        <input type="password" name="repeatPassword" placeholder="Repeat password" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
      </div>
      <button type="submit" disabled={!repeatPassword || !newPassword} onClick={handleSubmit}>
        Submit
      </button>
      <p>{error}</p>
    </div>
  </div>
  );
}
