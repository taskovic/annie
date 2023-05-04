import BadgeIcon from "assets/icons/badge-icon.svg";
import "./style.scss";

interface Props {
  onClick?: Function
}

export default function ThreeDotsCircleIcon({ onClick }: Props) {

  function handleClick(event: any) {
    event.stopPropagation()
    if (onClick !== undefined)
      onClick()
  }
  return <img src={BadgeIcon} onClick={handleClick} alt="Three dots icon" width={24} height={24} />;
}