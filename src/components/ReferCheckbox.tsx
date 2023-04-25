import { Button } from "@mui/material";
import tickSquare from "../assets/icons/tick-square.svg";
import { useState } from "react";

interface IReferCheckbox {
  isSelected: boolean;
  handleClick: Function;
}

export default function ReferCheckbox({
  isSelected = false,
  handleClick,
}: IReferCheckbox) {
  const [selected, setSelected] = useState(isSelected); //TODO: This will be removed after real impl

  function handleCheckClick() {
    console.log("klik ide");
    //handleClick();
    setSelected(!selected);
  }

  const buttonVariant = selected ? "checked" : "unchecked";

  return (
    <Button
      className={`annie-refer-checkbox-${buttonVariant}`}
      onClick={handleCheckClick}
    >
      <p className="annie-checkmark-text">Refered</p>
      <div className="annie-checkmark-box">
        <img src={tickSquare} alt="checkmark" />
      </div>
    </Button>
  );
}
