import XIcon from 'assets/icons/circle-x-red.svg'

interface Props {
    message: string;
    handleClose: Function;
}

export default function ErrorMessage({ message, handleClose }: Props) {
    return (
        <div className="annie-file-uploadeer-error-message-root">
            <img src={XIcon} alt="Close" onClick={()=>{handleClose()}}/>
            <p>{message}</p>
        </div>
    )
}