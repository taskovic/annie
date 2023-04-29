import { IconButton } from "@mui/material";
import Avatar from "components/icons/Avatar/Avatar";

interface Props {
  onClick?: any;
}

export default function Profile({ onClick }: Props) {
  return (
    <IconButton
      className="annie-profile-button"
      type="button"
      onClick={onClick && onClick}
    >
      <Avatar />
    </IconButton>
  );
}
