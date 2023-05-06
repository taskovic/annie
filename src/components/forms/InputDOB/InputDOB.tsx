import "./input-dob.scss";
import DOB from "~/components/icons/Dob/Dob";

interface IInputDOB {
    onChange: Function,
    dob: string,
    placeholder: string
}

export default function InputDOB({
    onChange,
    dob,
    placeholder
}: IInputDOB) {
    return (
        <div className="annie-input-dob">
            <div>
                <DOB />
            </div>
            <input
                className="input-dob"
                type="text"
                name="dob"
                onChange={(e) => onChange(e)}
                value={dob}
                placeholder={placeholder}
            />
        </div>
    )
}
