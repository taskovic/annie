interface Icon {
  name: string
}

export default function Icon({
  name
}: Icon) {
  return <img className="annie-icon" src={name} alt={"image alt"} />
}