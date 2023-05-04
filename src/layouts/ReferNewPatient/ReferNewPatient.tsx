import { useContext } from "react";
import HospiceFlatList from "features/HospiceFlatList";
import { Context } from "contexts";
import { TContext } from "types";
import ReferToPatientFooter from "~/layouts/Footer/ReferToPatientFooter/ReferToPatientFooter";
import ReferNewPatientFilters from "../../features/ReferNewPatientFilters/ReferNewPatientFilters";

export default function ReferNewPatient() {
  const { filteredHospices, isFetching } = useContext(Context) as TContext;

  return (
    <>
      <ReferNewPatientFilters />
      <HospiceFlatList hospices={filteredHospices} />
      <ReferToPatientFooter />
    </>
  );
}
