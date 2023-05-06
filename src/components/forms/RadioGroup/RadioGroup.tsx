import InputRadio from "../InputRadio/InputRadio";
import "./radio-group.scss"

interface IRadioGroup {
    options: string[];
    onChange: Function;
    name: string
}

export default function RadioGroup({ options, onChange, name }: IRadioGroup) {
    return (
        <div className="annie-radio-button-group-wrapper">
            {options.map((option: string, index: number) => {
                return (
                    <InputRadio
                        name={name}
                        id={name+index}
                        placeholder={option}
                        value={option}
                        onChange={onChange}
                    />
                )
            })}
        </div>
    )
}