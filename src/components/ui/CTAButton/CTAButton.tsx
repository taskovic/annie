import CTA from "components/icons/CTA/CTA"
import "./cta-button.scss";

interface ICTAButton {
  text: string,
  click: Function
}

export default function CTAButton({
  text,
  click
}: ICTAButton) {
  return (
    <button
      className="annie-cta-button" 
      onClick={() => click()}>
      { text }
      <span>
        <CTA />
      </span>
    </button>
  )
}