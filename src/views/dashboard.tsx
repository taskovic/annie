import Header from "../layouts/Header/Header";
import { useState, useEffect } from "react";
import { Context } from "contexts";
import { navbarTabs } from "configs";
import ReferNewPatient from "layouts/ReferNewPatient/ReferNewPatient";

export default function Dashboard() {
  const [activeTabName, setActiveTabName] = useState(navbarTabs[2]);
  const [openReferalModal, setOpenReferalModal] = useState(false);

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
    openReferalModal,
    setOpenReferalModal
  };

  return (
    <Context.Provider value={ProviderRegistry}>
      <div className="annie-dashboard">
        <Header />
        <Component />
      </div>
    </Context.Provider>
  );
}
