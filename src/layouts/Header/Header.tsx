import { useState, useContext } from "react";
import { Context } from "contexts";
import Logo from "components/ui/Logo";
import { Box } from "@mui/material";
import SearchInput from "components/forms/SearchInput";
import Notification from "features/Notification";
import Profile from "features/Profile";
import { navbarTabs } from "configs";
import NavBar from "~/layouts/NavBar/NavBar";
import { TContext } from "types";

export default function Header() {
  const [notification, setNotification] = useState([
  ]);

  const { activeTabName, setActiveTabName } = useContext(Context) as TContext;

  return (
    <div className="annie-header">
      <div className="annie-header-top-menu">
        <div className="logo-section">
          <Logo />
        </div>
        <div className="search-section">
          <SearchInput placeholder="Search" />
        </div>
        <div className="annie-header-right-menu">
          <div className="notification-section">
            <Notification
              onClick={() => {
                alert("Notification");
              }}
            />
          </div>
          <div className="profile-section">
            <Profile />
          </div>
        </div>
      </div>
      <div className="navbar-section">
        <NavBar
          value={activeTabName}
          tabs={navbarTabs}
          notifications={notification}
          handleChange={setActiveTabName}
        />
      </div>
    </div>
  );
}
