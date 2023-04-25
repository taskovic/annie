import { IconButton } from "@mui/material";
import NotificationsIcon from '../assets/icons/notifications.svg'

interface Props {
  onClick?: any
}

export default function NotificationButton({ onClick }: Props) {
  return (
    <IconButton
      className="annie-notification-button"
      type="button"
      onClick={onClick && onClick}
    >
      <img src={NotificationsIcon} alt="Notifications" />
    </IconButton>
  );
}
