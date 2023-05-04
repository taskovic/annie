/**
 * Screen will be called from router
 * Inside the screen will be complete business logic alongs with screen state management
 * Screen style will be just grid styling, the basic screen style will be done in components
 */
import Header from "../layouts/Header/Header";
import { useState, useEffect } from "react";
import { Context } from "contexts";
import { navbarTabs } from "configs";
import ReferNewPatient from "features/ReferNewPatient";
import { getHospices } from "api/dashboard";
import Modal from "~/layouts/Modal/Modal";
import ReferalModal from "~/features/ReferalModal/ReferalModal";

export default function Dashboard() {
  const [activeTabName, setActiveTabName] = useState(navbarTabs[2]);
  const [hospices, setHospices] = useState([]);
  const [filteredHospices, setFilteredHospices] = useState([]);
  const [filters, setFilters] = useState(null);
  const [isFetching, setFetchingStatus] = useState(true);
  const [openReferalModal, setOpenReferalModal] = useState(false);

  useEffect(() => {
    getHospices()
      .then((hospice) => {
        const { data } = hospice;
        setHospices(data);
        setFilteredHospices(data);
        setFetchingStatus(!isFetching);
      })
      .catch((err) => {
        console.error(err);
        /**
         * If there is some kind of err push notification and loading screen stays for a while
         */
        //setFetchingStatus(!isFetching);
      });
  }, [filters]);

  function getComponent(name: string) {
    if (!name) return <h1>No View</h1>; // this can be loader

    switch (name) {
      case navbarTabs[0]:
        return () => <h1>View 1</h1>; // Change this with proper component which will be called
      case navbarTabs[1]:
        return () => <h1>View 2</h1>; // Change this with proper component which will be called
      case navbarTabs[2]:
        return () => <ReferNewPatient />;
      case navbarTabs[3]:
        return () => <h1>View 4</h1>; // Change this with proper component which will be called
      default:
        return () => <h1>No View</h1>; // Change this with proper component which will be called
    }
  }

  const Component: any = getComponent(activeTabName);

  const ProviderRegistry = {
    activeTabName,
    setActiveTabName,
    filteredHospices,
    isFetching,
    openReferalModal,
    setOpenReferalModal
  };

  return (
    <Context.Provider value={ProviderRegistry}>
      <div className="annie-dashboard">
        <Header />
        <Component />
        <Modal open={openReferalModal} handleClose={()=>{setOpenReferalModal(false)}}>
          <ReferalModal />
        </Modal>
      </div>
    </Context.Provider>
  );
}