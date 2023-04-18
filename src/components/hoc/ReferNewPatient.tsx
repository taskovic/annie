import { useEffect, useState } from "react"

export default function ReferNewPatient() {
  const dummyHospice = [
    {
      name: "Pera",
      last_name: "Peric"
    }
  ];

  const [hospices, setHospices] = useState(dummyHospice);
  const [filteredHospices, setFilteredHospices] = useState(dummyHospice);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    /**
     * Initial api call for hospices
     * Set hospices with response data
     * Set filtered hospices with response data
     * Set push notification if error occurs
     */
    console.warn("Hospice API call missing!");
  }, []);
  
  return <></> // here will be placed filters and flat list components
}