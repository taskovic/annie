import CTA from "components/icons/CTA/CTA"
import "./cta-button.scss";

interface ICTAButton {
  text: string,
  onClick: Function
}

export default function CTAButton({
  text,
  onClick
}: ICTAButton) {
  return (
    <button
      className="annie-cta-button" 
      onClick={onClick()}>
      { text }
      <span>
        <CTA />
      </span>
    </button>
  )
}