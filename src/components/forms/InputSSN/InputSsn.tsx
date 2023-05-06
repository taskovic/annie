import SSN from "~/components/icons/Ssn/Ssn";
import "./input-ssn.scss";

interface IInputSSN {
    onChange: Function,
    ssn: string,
    placeholder: string
}

export default function InputSSN({
    onChange,
    ssn,
    placeholder
}: IInputSSN) {
    return (
        <div className="annie-input-ssn">
            <div>
                <SSN />
            </div>
            <input
                className="input-ssn"
                type="text"
                name="ssn"
                onChange={(e) => onChange(e)}
                value={ssn}
                placeholder={placeholder}
            />
        </div>
    )
}
