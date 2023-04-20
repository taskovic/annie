import { useState } from "react";
import Logo from "./Logo";
import { Box, Tab } from "@mui/material"
import SearchInput from "./SearchInput";
import NotificationButton from "./NotificationButton";
import ProfileButton from "./ProfileButton";
import { navbarTabs } from "../configs";
import NavBar from "./NavBar";

export default function Header() {

  const [value, setValue] = useState(navbarTabs[0]);
  const [notification, setNotification] = useState([{tab: navbarTabs[3],value: 3}]);

  const handleChangeTab = (value: string) =>{
    setValue(value)
    setNotification(notification.filter(x => x.tab !== value))
  }

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
          value={value}
          tabs={navbarTabs}
          notifications={notification}
          handleChange={setValue}
        />
      </Box>
    </Box>
  )
}