import { Button } from "@mui/material";
import { useState } from "react";
import Checkmark from "components/icons/Checkmark/Checkmark";
import Text from "components/ui/Text";

interface IReferCheckbox {
  isSelected: boolean;
  handleClick: Function;
}

export default function ReferCheckbox({
  isSelected = false,
  handleClick,
}: IReferCheckbox) {
  const [selected, setSelected] = useState(isSelected); //TODO: This will be removed after real impl

  function handleCheckClick(e: any) {
    handleClick();
    e.stopPropagation()
    //setSelected(!selected);
  }

  const buttonVariant = isSelected ? "checked" : "unchecked";

  return (
    <Button
      className={`annie-refer-checkbox-${buttonVariant}`}
      onClick={handleCheckClick}
    >
      <Text className="annie-checkmark-text" content="Refered" />
      <div className="annie-checkmark-box">
        <Checkmark />
      </div>
    </Button>
  );
}
