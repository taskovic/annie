import CircleXClose from "../../../assets/icons/circle-x-close-white.svg";
import "./style.scss";

interface Props {
  onClick?: Function
}

export default function CircleXCloseWhiteIcon({ onClick }: Props) {

  function handleClick(event: any) {
    event.stopPropagation()
    if (onClick !== undefined)
      onClick()
  }
  return <img src={CircleXClose} onClick={handleClick} alt="Close icon" width={24} height={24} />;
}
