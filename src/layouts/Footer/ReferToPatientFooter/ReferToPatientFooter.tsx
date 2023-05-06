import FooterImage from "assets/images/refer_to_patient.svg"
import ArrowRightIcon from "assets/icons/arrow-right.svg";
import { useContext } from "react";
import { Context } from "~/contexts";
import { TContext } from "~/types";

interface Props {
  data: any;
  setOpenReferalModal: Function
}

export default function ReferToPatientFooter({ data, setOpenReferalModal }: Props) {

  //const { setOpenReferalModal } = useContext(Context) as TContext;

  function handleOpenModal() {
    setOpenReferalModal(true)
  }
  return (
    <>
      {
        data.filter((x: any) => x.checked === true).length > 0 &&
        < div className="annie-refet-to-patient-footer">
          <img src={FooterImage} alt="Footer image" />
          <div>
            <div>
              <div>
                {data.filter((x: any) => x.checked === true).length} out of {data.filter((x: any) => x.value1 === true).length}
              </div>
              <div>
                Refer directly to 1 hospice, or choose up to 3 hospice options to share with the patient
              </div>
            </div>
            <div>
              <button
                className="send-referral-button"
                onClick={handleOpenModal}
              >
                <div>
                  Refer to Patient
                  <div className="send-referral-button-icon">
                    <img src={ArrowRightIcon} />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div >
      }
    </>
  )
}