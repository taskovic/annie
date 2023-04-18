import React, { useState } from "react";
import Icon from "./Icon";
import Text from "./Text";

interface SelectList {
  handler: Function,
  options: string[],
  placeholder: string
}

export default function SelectList({
  handler,
  options,
  placeholder="Placeholder text"
}: SelectList) {

  const [isListOpened, setListOpen] = useState(true);
  //TODO: If the text of custom select list placeholder is longer that 25 char, cut string and concatinate ...
  const toggleList = () => {
    setListOpen(!isListOpened)
  }

  return (
    <div className="annie-select-list">
      { !isListOpened &&
        <div className="select-list-placeholder" onClick={toggleList}>
          <Icon name="hospital" />
          <Text content={placeholder} />
          <Icon name="arrowDown" />
        </div>
      }
      {isListOpened && 
        <>
          <div className="select-list-search">
            <input type="text" placeholder="Search" />
          </div>
          <div className="annie-select-list-options">
            <ul>
              <li onClick={toggleList}>No Records</li>
            </ul>
          </div>
        </>
      }
    </div>
  )
}