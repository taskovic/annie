import { IconButton } from "@mui/material";
import NotificationIcon from "components/icons/Notification";

interface Props {
  onClick?: any;
}

export default function Notification({ onClick }: Props) {
  return (
    <IconButton
      className="annie-notification-button"
      type="button"
      onClick={onClick && onClick}
    >
      <NotificationIcon />
    </IconButton>
  );
}
