import "./input-checkbox.scss";

interface IInputCheckbox {
  onChange: Function,
  name: string,
  placeholder: string,
  checked: boolean
}

export default function InputCheckbox({
  onChange,
  name,
  placeholder,
  checked=true
}: IInputCheckbox) {
  return (
    <span>
      <input type="checkbox" id={name} name={name} value="check" onChange={() => onChange(name, !checked)} checked={checked} />
      <label htmlFor={name}>{ placeholder }</label>     
    </span>
  )
}