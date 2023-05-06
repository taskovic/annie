import showPassword from "assets/icons/show-password.svg";

interface IShowPassword {
  onClick: Function
}

export default function ShowPassword({
  onClick
}: IShowPassword) {
  return <img className="show-password" src={showPassword} alt="Show password icon" onClick={onClick()} />;
}
