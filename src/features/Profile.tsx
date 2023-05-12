import { IconButton } from "@mui/material";
import Avatar from "components/icons/Avatar/Avatar";
import CircleXCloseBlackIcon from "~/components/icons/CircleXCloseBlack/CircleXCloseBlack";
import KeySquare from "~/components/icons/KeySquare/KeySquare";
import ArrowRightIcon from "assets/icons/arrow-right.svg";
import Hospital from "~/components/icons/Hospital/Hospital";
import People from "~/components/icons/People/People";
import MailBlack from "~/components/icons/EmailBlack/EmailBlack";
import { useState } from "react";

export default function Profile() {

  const [open, setOpen] = useState(false)
  return (
    <div className="annie-profile-button-wrapper">
      <IconButton
        className="annie-profile-button"
        type="button"
        onClick={() => { setOpen(true) }}
      >
        <Avatar />
      </IconButton>
      {
        open &&
          <div className="annie-profile-card">
            <div>
              <CircleXCloseBlackIcon onClick={() => { setOpen(false) }} />
            </div>
            <div>
              <div>
                <Avatar />
              </div>
              <div>
                <div>John Smithasdasdasdasdasdasdasd</div>
                <div className="annie-profile-card-divider"></div>
                <div>
                  <MailBlack />
                  <p>john.smithsadsadsasdasdasadasd@mail.com</p>
                </div>
                <div>
                  <Hospital />
                  <p>Hospice of The Valley</p>
                </div>
                <div>
                  <People />
                  <p>Care Taker</p>
                </div>
                <div className="annie-profile-card-divider"></div>
                <div>
                  <p>Admin Owner</p>
                  <KeySquare />
                </div>
              </div>
            </div>
            <div>
              <button
                className="button"
              >
                <div>
                  See Profile
                  <div className="button-icon">
                    <img src={ArrowRightIcon} />
                  </div>
                </div>
              </button>
            </div>
          </div>
      }
    </div>
  );
}
