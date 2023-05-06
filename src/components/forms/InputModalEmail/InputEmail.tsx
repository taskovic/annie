
import Mail from "~/components/icons/Mail/Mail";
import "./input-email.scss";

interface IInputmail {
    onChange: Function,
    email: string,
    placeholder: string
}

export default function InputEmail({
    onChange,
    email,
    placeholder
}: IInputmail) {
    return (
        <div className="annie-input-modal-email">
            <div>
                <Mail />
            </div>
            <input
                className="input-modal-email"
                type="text"
                name="email"
                onChange={(e) => onChange(e)}
                value={email}
                placeholder={placeholder}
            />
        </div>
    )
}
