import { useEffect, useState } from "react";
import { getHospices } from "../../api/dashboard";

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

  console.log("HOSPICES: ", hospices)
  console.log("FILTERED_HOSPICES: ", filteredHospices)

  return <>Refer new patient</> // here will be placed filters and flat list components
}