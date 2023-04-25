import { ButtonBaseProps, Button, Box, IconButton } from "@mui/material";
import AvatarIcon from '../assets/icons/avatar.svg'

interface Props {
  onClick?: any
}

export default function ProfileButton({ onClick }: Props) {
  return (
    <IconButton
      className="annie-profile-button"
      type="button"
      onClick={onClick && onClick}
    >
      <img src={AvatarIcon} alt="Avatar" />
    </IconButton>
  );
}
