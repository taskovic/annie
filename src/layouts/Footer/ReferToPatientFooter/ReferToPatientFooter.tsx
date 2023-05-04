import FooterImage from "assets/images/refer_to_patient.svg"
import ArrowRightIcon from "assets/icons/arrow-right.svg";


export default function ReferToPatientFooter() {
    return (
        <div className="annie-refet-to-patient-footer">
            <img src={FooterImage} alt="Footer image" />
            <div>
                <div>
                    <div>
                        2 out of 3
                    </div>
                    <div>
                        Refer directly to 1 hospice, or choose up to 3 hospice options to share with the patient
                    </div>
                </div>
                <div>
                <button
                        className="send-referral-button"
                        type="submit"
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
        </div>
    )
}