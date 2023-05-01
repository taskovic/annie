import ReferHospiceIcon from "assets/icons/refer-hospice.svg";
import ArrowRightIcon from "assets/icons/arrow-right.svg";
import { Form, Formik } from "formik";
import { array, object, string } from "yup";
import { FileUploader } from "../../components/forms/FileUploader/FileUploader";

interface Props {
}

export default function ReferalModal({}: Props) {

  return (
    <div className="annie-referal-modal">
      <div className="refer-hospice">
        <img src={ReferHospiceIcon} />
      </div>
      <div className="referal-modal-form-container">
        <div className="referal-modal-form">
          <div>
            <p>Patient Details</p>
          </div>
          <div>
            <p>Attachments:</p>
            <Formik
              initialValues={{}}
              validationSchema={object({
                files: array(
                  object({
                    url: string().required(),
                  })
                ),
              })}
              onSubmit={(values) => {
                console.log("values", values);
                return new Promise((res) => setTimeout(res, 2000));
              }}
            >
              {({ values, errors, isValid, isSubmitting }) => (
                <Form style={{ flex: 1 }}>
                  <div className="referal-modal-form-attachments">
                    <div>
                      <FileUploader name="files" />
                    </div>
                    <div>
                      <button
                        className="send-referral-button"
                        disabled={!isValid || isSubmitting}
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
