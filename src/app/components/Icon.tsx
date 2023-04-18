import { ICONS } from "../../assets/icons/"

interface Icon {
  name: string
}

export default function Icon({
  name
}: Icon) {
  const { src, alt } = ICONS[name]
  return <img className="annie-icon" src={src} alt={alt} />
}