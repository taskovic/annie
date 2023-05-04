import "./input-checkbox.scss";

interface IInputCheckbox {
  onChange: Function,
  name: string,
  placeholder: string
}

export default function InputCheckbox({
  onChange,
  name,
  placeholder
}: IInputCheckbox) {
  return (
    <span>
      <input type="checkbox" id={name} name={name} value="check" onChange={(e) => onChange(e)} />
      <label htmlFor={name}>{ placeholder }</label>     
    </span>
  )
}