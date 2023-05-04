import { useContext, useState } from "react";
import HospiceFlatList from "features/HospiceFlatList";
import { Context } from "contexts";
import { TContext } from "types";
import LoactionIcon from "assets/icons/location.svg";
import CapabilitiesIcon from "assets/icons/capabilities.svg";
import LanguageIcon from "assets/icons/language.svg";
import Filters from "features/Filters";
import SearchableInput from "components/forms/SearchableInput";
import ReferToPatientFooter from "~/layouts/Footer/ReferToPatientFooter/ReferToPatientFooter";

export default function ReferNewPatient() {
  const { filteredHospices, isFetching } = useContext(Context) as TContext;

  const selectData1 = ["One", "Two", "Three"];
  const selectLoactionData = ["10010", "20010", "30010"];
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  return (
    <>
      <Filters>
        <div className="filters-label">Select Zip</div>
        <div className="filters-input">
          <SearchableInput
            type="select"
            value={value1}
            icon={LoactionIcon}
            options={selectLoactionData}
            placeholder="Select Location"
            searchable={true}
            onChange={setValue1}
          />
        </div>
        <div className="filters-input">
          <SearchableInput
            type="select"
            value={value2}
            icon={CapabilitiesIcon}
            options={selectData1}
            placeholder="Select Capabilities"
            searchable={false}
            onChange={setValue2}
          />
        </div>
        <div className="filters-input">
          <SearchableInput
            type="select"
            value={value3}
            icon={LanguageIcon}
            options={selectData1}
            placeholder="Select Language"
            searchable={false}
            onChange={setValue3}
          />
        </div>
      </Filters>
      <HospiceFlatList hospices={filteredHospices} />
      <ReferToPatientFooter />
    </>
  );
}
