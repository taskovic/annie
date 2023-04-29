import { Modal as ModalBase, Fade, IconButton } from "@mui/material";
import CloseIcon from "../assets/icons/square-x-close.svg";

interface ModalProps {
  open: boolean;
  handleClose: any;
  children: any;
}

export default function Modal({ open, handleClose, children }: ModalProps) {
  return (
    <div>
      <ModalBase
        className="annie-modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <div className="annie-modal-content">
            {children}
            <IconButton
              className="annie-modal-close-button"
              onClick={handleClose}
            >
              <img src={CloseIcon} alt="Close" />
            </IconButton>
          </div>
        </Fade>
      </ModalBase>
    </div>
  );
}
