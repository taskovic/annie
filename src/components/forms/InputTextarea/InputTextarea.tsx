import "./input-textarea.scss";

interface IInputTextarea {
    onChange: Function,
    diagnostics: string,
    placeholder: string
}

export default function InputTextarea({
    onChange,
    diagnostics,
    placeholder
}: IInputTextarea) {
    return (
        <div className="annie-input-textarea">
            <textarea
                className="input-textarea"
                name="diagnostics"
                onChange={(e) => onChange(e)}
                value={diagnostics}
                placeholder={placeholder}
            />
        </div>
    )
}
