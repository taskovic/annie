import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ReferCheckbox from "components/forms/ReferCheckbox";
import Filters from "features/Filters";
import SearchableInput from "components/forms/SearchableInput";

import { useState, useContext } from "react";
import LoactionIcon from "assets/icons/location.svg";
import CapabilitiesIcon from "assets/icons/capabilities.svg";
import LanguageIcon from "assets/icons/language.svg";
import Rating from "components/ui/Rating";
import { Badge } from "@mui/material";
import circle from "assets/icons/circle-checkmark.svg";

import { TContext } from "types";
import { Context } from "contexts";
import HospiceFlatListBadge from "./HospiceFlatListBadge/HospiceFlatListBadge";

type Hospice = {
  name: string;
  lastName: string;
};

interface IHospiceFlatList {
  hospices: Hospice[];
}

export default function HospiceFlatList({ hospices }: IHospiceFlatList) {
  console.log("HOSPICE_FLAT_LIST: ", hospices);



  const gray = true;
  // const listItemStyle = gray ? "gray-list-item" : "white-list-item";

  const { setOpenReferalModal } = useContext(Context) as TContext;

  function handleOpenModal() {
    setOpenReferalModal(true)
  }

  return (
    <div className="annie-hospice-flat-list">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow
              key={"sasad"}
              className="annie-flat-list-head"
              onClick={handleOpenModal}
            >
              <TableCell className="list-head-item-1"></TableCell>
              <TableCell className="list-head-item-2">Hospice</TableCell>
              <TableCell className="list-head-item-3">Open to New Patients</TableCell>
              <TableCell className="list-head-item-4">Conversio Rate</TableCell>
              <TableCell className="list-head-item-5">Time To Treat</TableCell>
              <TableCell className="list-head-item-6">Patient Ratings</TableCell>
              <TableCell className="list-head-item-7">Revocation Rate</TableCell>
              <TableCell className="list-head-item-8">Late Live Discarge</TableCell>
              <TableCell className="list-head-item-9">Quality</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              key={"sasad"}
              className="annie-flat-list-item gray-list-item"
              onClick={handleOpenModal}
            >
              <TableCell className="list-item-1">
                <ReferCheckbox
                  isSelected={false}
                  handleClick={() => console.log("im click")}
                />
              </TableCell>
              <TableCell className="list-item-2">
                Hospice of The Valley
              </TableCell>
              <TableCell className="list-item-3">
                <img src={circle} alt="checkmark" />
              </TableCell>
              <TableCell className="list-item-4">2 hrs</TableCell>
              <TableCell className="list-item-5">12 hrs</TableCell>
              <TableCell className="list-item-6">
                <Rating rating={4} />
              </TableCell>
              <TableCell className="list-item-7">9</TableCell>
              <TableCell className="list-item-8">10%</TableCell>
              <TableCell className="list-item-9">
                <HospiceFlatListBadge value={7} />
              </TableCell>
            </TableRow>
            <TableRow
              key={"sasad"}
              className="annie-flat-list-item white-list-item"
              onClick={handleOpenModal}
            >
              <TableCell className="list-item-1">
                <ReferCheckbox
                  isSelected={false}
                  handleClick={() => console.log("im click")}
                />
              </TableCell>
              <TableCell className="list-item-2">
                Hospice of The Valley
              </TableCell>
              <TableCell className="list-item-3">
                <img src={circle} alt="checkmark" />
              </TableCell>
              <TableCell className="list-item-4">2 hrs</TableCell>
              <TableCell className="list-item-5">12 hrs</TableCell>
              <TableCell className="list-item-6">
                <Rating rating={4} />
              </TableCell>
              <TableCell className="list-item-7">9</TableCell>
              <TableCell className="list-item-8">10%</TableCell>
              <TableCell className="list-item-9">
                <HospiceFlatListBadge value={8.5} />
              </TableCell>
            </TableRow>
            <TableRow
              key={"sasad"}
              className="annie-flat-list-item gray-list-item"
              onClick={handleOpenModal}
            >
              <TableCell className="list-item-1">
                <ReferCheckbox
                  isSelected={false}
                  handleClick={() => console.log("im click")}
                />
              </TableCell>
              <TableCell className="list-item-2">
                Hospice of The Valley
              </TableCell>
              <TableCell className="list-item-3">
                <img src={circle} alt="checkmark" />
              </TableCell>
              <TableCell className="list-item-4">2 hrs</TableCell>
              <TableCell className="list-item-5">12 hrs</TableCell>
              <TableCell className="list-item-6">
                <Rating rating={4} />
              </TableCell>
              <TableCell className="list-item-7">9</TableCell>
              <TableCell className="list-item-8">10%</TableCell>
              <TableCell className="list-item-9">
                <HospiceFlatListBadge value={6} />
              </TableCell>
            </TableRow>
            <TableRow
              key={"sasad"}
              className="annie-flat-list-item white-list-item"
              onClick={handleOpenModal}
            >
              <TableCell className="list-item-1">
                <ReferCheckbox
                  isSelected={false}
                  handleClick={() => console.log("im click")}
                />
              </TableCell>
              <TableCell className="list-item-2">
                Hospice of The Valley
              </TableCell>
              <TableCell className="list-item-3">
                <img src={circle} alt="checkmark" />
              </TableCell>
              <TableCell className="list-item-4">2 hrs</TableCell>
              <TableCell className="list-item-5">12 hrs</TableCell>
              <TableCell className="list-item-6">
                <Rating rating={4} />
              </TableCell>
              <TableCell className="list-item-7">9</TableCell>
              <TableCell className="list-item-8">10%</TableCell>
              <TableCell className="list-item-9">
                <HospiceFlatListBadge value={6} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
