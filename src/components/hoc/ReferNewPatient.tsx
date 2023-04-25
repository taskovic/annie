import { useContext } from "react";
import HospiceFlatList from "../HospiceFlatList";
import { Context } from "../../contexts";
import { TContext } from "../../types/";

export default function ReferNewPatient() {
  const { filteredHospices, isFetching } = useContext(Context) as TContext;

  return (
    <>
      <HospiceFlatList hospices={filteredHospices} />
    </>
  );
}
