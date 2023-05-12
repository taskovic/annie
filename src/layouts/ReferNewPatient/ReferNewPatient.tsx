import { useState } from "react";
import HospiceFlatList from "features/HospiceFlatList";
import ReferToPatientFooter from "~/layouts/Footer/ReferToPatientFooter/ReferToPatientFooter";
import ReferNewPatientFilters from "../../features/ReferNewPatientFilters/ReferNewPatientFilters";
import Modal from "layouts/Modal/Modal";
import ReferalModal from "features/ReferalModal/ReferalModal";
import ReferalSentModal from "~/features/ReferalSentModal/ReferalSentModal";
import NoData from "~/layouts/NoData/NoData";
import NoHospice from "~/components/ui/NoHospice/NoHospice";

export default function ReferNewPatient() {
  const [hospicesArr, setHospiceArr] = useState([
    {
      id: 1,
      checked: false,
      name: "Hospice of The Valley",
      value1: true,
      value2: 85,
      value3: 12,
      value4: 4.5,
      value5: 5,
      value6: 10,
      value7: 7.0
    },
    {
      id: 2,
      checked: false,
      name: "Compassion Care",
      value1: true,
      value2: 90,
      value3: 36,
      value4: 4,
      value5: 7,
      value6: 20,
      value7: 8.5
    },
    {
      id: 3,
      checked: false,
      name: "Bristol Hospice",
      value1: true,
      value2: 70,
      value3: 48,
      value4: 5,
      value5: 4,
      value6: 35,
      value7: 6
    },
    {
      id: 4,
      checked: false,
      name: "The Dawn Greene Hospice",
      value1: false,
      value2: 80,
      value3: 48,
      value4: 5,
      value5: 12,
      value6: 25,
      value7: 6
    },
  ])
  const [openReferalModal, setOpenReferalModal] = useState(false)
  const [openReferalSentModal, setOpenReferalSentModal] = useState(false)

  function handleCheckHospice(hospice: any) {
    setHospiceArr([...hospicesArr].map(object => {
      if (object.id === hospice.id) {
        return {
          ...object,
          checked: !object.checked
        }
      }
      else return object;
    }))
  }

  return (
    <>
      <ReferNewPatientFilters />
      {
        hospicesArr.length < 0 ?
          <NoData>
              <NoHospice />
          </NoData>
          :
          <HospiceFlatList hospices={hospicesArr} handleCheck={handleCheckHospice} />
      }
      <ReferToPatientFooter data={hospicesArr} setOpenReferalModal={setOpenReferalModal} />
      <Modal className="annie-referal-modal-root" open={openReferalModal} handleClose={() => { setOpenReferalModal(false) }}>
        <ReferalModal hospice={hospicesArr} onSubmit={() => { setOpenReferalSentModal(true); setOpenReferalModal(false) }} />
      </Modal>
      <Modal className="annie-referal-sent-modal-root" open={openReferalSentModal} handleClose={() => { setOpenReferalSentModal(false) }}>
        <ReferalSentModal handleClose={() => { setOpenReferalSentModal(false) }} />
      </Modal>
    </>
  );
}
