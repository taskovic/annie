import Error from "components/icons/Error/Error"
import "./error-message.scss";

interface IErrorMessage {
  message: string,
  onClick: Function
}

export default function ErrorMessage({
  message,
  onClick
}: IErrorMessage) {
  return (
    <div className="annie-error-message" onClick={() => onClick()}> 
      <Error /> <span>{ message }</span>
    </div>
  )
}