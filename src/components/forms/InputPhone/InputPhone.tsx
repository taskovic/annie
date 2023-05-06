
import Phone from "~/components/icons/Phone/Phone";
import "./input-phone.scss";

interface IInputPhone {
    onChange: Function,
    phone: string,
    placeholder: string
}

export default function InputPhone({
    onChange,
    phone,
    placeholder
}: IInputPhone) {
    return (
        <div className="annie-input-phone">
            <div>
                <Phone />
            </div>
            <input
                className="input-phone"
                type="text"
                name="phone"
                onChange={(e) => onChange(e)}
                value={phone}
                placeholder={placeholder}
            />
        </div>
    )
}
