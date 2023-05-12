import ReferHospiceIcon from "assets/icons/refer-hospice.svg";
import ArrowRightIcon from "assets/icons/arrow-right.svg";
import { Form, Formik } from "formik";
import { array, object, string } from "yup";
import { FileUploader } from "../../components/forms/FileUploader/FileUploader";
import { useState } from "react";
import RadioGroup from "~/components/forms/RadioGroup/RadioGroup";
import InputDOB from "~/components/forms/InputDOB/InputDOB";
import InputSSN from "~/components/forms/InputSSN/InputSsn";
import InputPhone from "~/components/forms/InputPhone/InputPhone";
import InputEmail from "~/components/forms/InputModalEmail/InputEmail";
import InputTextarea from "~/components/forms/InputTextarea/InputTextarea";
import Rating from "~/components/ui/Rating";

interface Props {
  hospice: any;
  onSubmit: Function
}

export default function ReferalModal({ hospice, onSubmit }: Props) {
  const selectedHospices = hospice.filter((x: any) => x.checked === true);
  const question1Options = ["Yes", "No"];

  const [formData, setFormData] = useState({
    patientID: "",
    dob: "",
    ssn: "",
    phone: "",
    email: "",
    diagnostics: "",
    question1: "No",
    question2: "No"
  });

  const { patientID, dob, ssn, phone, email, diagnostics } = formData;

  function handleInputChange(e: any) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit() {
    onSubmit()
    return new Promise((res) => setTimeout(res, 1000));
  }

  const hospices = selectedHospices.map((hospice: any, index: number) => {//TODO: This needs to be hospice card placed inside referalModal/components
    return (
      <div key={hospice.id}>
        <div className="refer-hospice-list-item">
          <p>{hospice.name}</p>
          <div>
            <div>
              {hospice.value7}
            </div>
            <Rating rating={hospice.value4} color="white" />
          </div>
        </div>
        {
          index !== selectedHospices.length - 1 &&
          <div className="refer-hospice-list-divider"></div>
        }
      </div>
    )
  })

  return (
    <div className="annie-referal-modal">
      <div className="refer-hospice">
        <div className="refer-hospice-list-root">
          <p>Refer Hospice</p>
          { hospices }
        </div>
        <img src={ReferHospiceIcon} />
      </div>
      <div className="referal-modal-form-container">
        <div className="referal-modal-form">
          <div>
            <p>Patient Details</p>
            <InputDOB
              onChange={handleInputChange}
              dob={dob}
              placeholder="DOB" />
            <InputSSN
              onChange={handleInputChange}
              ssn={ssn}
              placeholder="SSN" />
            <InputPhone
              onChange={handleInputChange}
              phone={phone}
              placeholder="Phone Number" />
            <InputEmail
              onChange={handleInputChange}
              email={email}
              placeholder="Email" />
            <InputTextarea
              onChange={handleInputChange}
              diagnostics={diagnostics}
              placeholder="Principal Diagnosis" />
          </div>
          <div>
            <Formik
              initialValues={{}}
              validationSchema={object({
                files: array(
                  object({
                    url: string().required(),
                  })
                ),
              })}
              onSubmit={(values: any) => {
                if (values.files.length === 1) {
                  handleSubmit()

                } else {
                  return new Promise((res) => setTimeout(res, 2000));
                }

              }}
            >
              {({ values, isSubmitting }: { values: any, isSubmitting: boolean }) => (
                <Form style={{ flex: 1 }}>
                  {
                    isSubmitting
                  }
                  <div className="referal-modal-form-attachments">
                    <div>
                      <p>History & Physical Document <span>*Require</span></p>
                      <FileUploader name="files" required={true} requiredError={values.files && values.files.length === 0 && isSubmitting} />
                    </div>
                    <div>
                      <p>Most Recent Labs Document</p>
                      <FileUploader name="files1" required={false} />
                    </div>
                    <div>
                      <p>Additional Notes/Documents</p>
                      <FileUploader name="files2" required={false} />
                    </div>
                    <div className="referal-modal-question-wrapper">
                      <div className="referal-modal-question">
                        <div className="question-text">
                          Has the patient already discussed and agreed to hospice care with the referring provider?
                        </div>
                        <RadioGroup options={question1Options} onChange={handleInputChange} name={"question1"} />
                      </div>
                      <div className="referal-modal-question">
                        <div className="question-text">
                          Is this a priority referral that requires immediate response and same day enrollment?
                        </div>
                        <RadioGroup options={question1Options} onChange={handleInputChange} name={"question2"} />
                      </div>
                    </div>
                    <div>
                      <button
                        className="send-referral-button"
                        type="submit"
                      >
                        <div>
                          Send Referral
                          <div className="send-referral-button-icon">
                            <img src={ArrowRightIcon} />
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
