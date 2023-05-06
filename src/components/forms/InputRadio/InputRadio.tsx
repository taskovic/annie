import "./input-radio.scss";

interface IInputRadio {
    onChange: Function,
    name: string,
    placeholder: string,
    value: string,
    id: any
}

export default function InputRadio({
    onChange,
    name,
    placeholder,
    value,
    id
}: IInputRadio) {
    return (
        <div className="radio-button-wrapper">
            <span>
                <input type="radio" id={id} name={name} value={value} onChange={(e) => onChange(e)} />
                <label htmlFor={id}>{placeholder}</label>
            </span>
        </div>
    )
}