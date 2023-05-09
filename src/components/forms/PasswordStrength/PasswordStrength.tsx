import { useEffect, useState } from "react";
import "./password-strength.scss";
import NeutralCheckmark from "components/icons/NeutralCheckmark/NeutralCheckmark";
import GreenCheckmark from "components/icons/GreenCheckmark/GreenCheckmark";
import Error from "components/icons/Error/Error";
import { TSetNewPasswordStrength } from "types";


interface IPasswordStrength {
  strength: TSetNewPasswordStrength
}

export default function PasswordStrength({
  strength
}: IPasswordStrength) {

  const strengthIcon = (strength: string) => {
    switch(strength) {
      case "idle":
        return <NeutralCheckmark />;
      case "success": 
        return <GreenCheckmark />;
      case "error":
        return <Error />;
    }
  }

  return (
    <div className="annie-password-strength">
      <p><span>{ strengthIcon(strength.minChar) }</span> Min. 6 characters</p>
      <p><span>{ strengthIcon(strength.containNumber) }</span> Contain number</p>
      <p><span>{ strengthIcon(strength.uppercaseChar) }</span> Uppercase character</p>
      <p><span>{ strengthIcon(strength.specialChar) }</span> Contain special character</p>
      <p><span>{ strengthIcon(strength.lowercaseChar) }</span> Lowercase character</p>
    </div>
  )
}