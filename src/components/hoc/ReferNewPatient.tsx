import { useEffect, useState } from "react";
import { getHospices } from "../../api/dashboard";
import HospiceFlatList from "../HospiceFlatList";

export default function ReferNewPatient() {

  const [hospices, setHospices] = useState([]);
  const [filteredHospices, setFilteredHospices] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    getHospices()
    .then(hospice => {
      const { data } = hospice;
      setHospices(data);
      setFilteredHospices(data);
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <>
      <HospiceFlatList hospices={filteredHospices} />
    </>
  )
}
