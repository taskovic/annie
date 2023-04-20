import { useState, useContext } from "react";
import { Context } from "../contexts/";
import Logo from "./Logo";
import { Box } from "@mui/material"
import SearchInput from "./SearchInput";
import NotificationButton from "./NotificationButton";
import ProfileButton from "./ProfileButton";
import { navbarTabs } from "../configs";
import NavBar from "./NavBar";
import { TContext } from "../types/";

export default function Header() {
  const [notification, setNotification] = useState([{tab: navbarTabs[3],value: 3}]);

  const {
    activeTabName,
    setActiveTabName
  }= useContext(Context) as TContext;

  return (
    <Box className="annie-header">
      <Logo />
      <Box className="search-section">
        <SearchInput placeholder="Search" />
      </Box>
      <Box className="notification-section">
        <NotificationButton onClick={() => { alert("Notification") }} />
      </Box>
      <Box className="profile-section">
        <ProfileButton onClick={() => { alert("Profile") }} />
      </Box>
      <Box className="navbar-section">
        <NavBar
          value={activeTabName}
          tabs={navbarTabs}
          notifications={notification}
          handleChange={setActiveTabName}
        />
      </Box>
    </Box>
  )
}
