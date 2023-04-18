
interface ITab {
  tab: string,
  onClick?: Function | undefined
}

export default function Tab({
  tab,
  onClick
}: ITab) {
  return (
    <div className="annie-tab" onClick={() => onClick}>
      <p>{ tab }</p>
    </div>
  )
}