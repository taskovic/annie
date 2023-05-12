import SSN from "~/components/icons/Ssn/Ssn";
import "./input-text.scss";

interface IInputText {
    onChange: Function,
    value: string,
    name: string,
    placeholder: string
}

export default function InputText({
    onChange,
    value,
    name,
    placeholder
}: IInputText) {

    const renderIcon = () =>{
        switch(name){
            case "ssn":
                return <SSN />
            default:
                return <>?</>
        }
    }
    return (
        <div className="annie-input-text">
            <div>
                {renderIcon()}
            </div>
            <input
                className="input-text"
                type="text"
                name={name}
                onChange={(e) => onChange(e)}
                value={value}
                placeholder={placeholder}
            />
        </div>
    )
}
