import "./referal-sent-modal.scss"
import Image from 'assets/images/referal_sent.svg'
import CloseIcon from "assets/icons/square-x-close.svg";
import CloseIconWhite from "assets/icons/square-x-close-white.svg";

interface Props{
    handleClose: Function
}

export default function ReferalSentModal({handleClose}: Props) {
    return (
        <div className="annie-referal-sent-modal">
            <img src={Image} alt="Referat sent image" />
            <p>Referral Sent!</p>
            <p>Patient will receive an email</p>
            <div>
                <button
                    className="button-1"
                    onClick={()=>handleClose()}
                >
                    <div>
                        View Patient Survey
                        <div className="button-icon">
                            <img src={CloseIconWhite} />
                        </div>
                    </div>
                </button>
                <button
                    className="button-2"
                    onClick={()=>handleClose()}
                >
                    <div>
                        Close
                        <div className="button-icon">
                            <img src={CloseIcon} />
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}