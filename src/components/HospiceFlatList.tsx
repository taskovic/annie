import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ReferCheckbox from './ReferCheckbox';
import Filters from './Filters';
import SearchableInput from './SearchableInput';

import { useState } from 'react'
import LoactionIcon from '../assets/icons/location.svg'
import CapabilitiesIcon from '../assets/icons/capabilities.svg'
import LanguageIcon from '../assets/icons/language.svg'
import Rating from './Rating';
import { Badge } from '@mui/material';
import circle from '../assets/icons/circle-checkmark.svg'

type Hospice = {
  name: string,
  lastName: string
}

interface IHospiceFlatList {
  hospices: Hospice[]
}

export default function HospiceFlatList({
  hospices
}: IHospiceFlatList) {

  console.log("HOSPICE_FLAT_LIST: ", hospices);

  const selectData1 = ["One", "Two", "Three"]
  const selectLoactionData = ["10010", "20010", "30010"]
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const [value3, setValue3] = useState("")

  const gray = true;
  // const listItemStyle = gray ? "gray-list-item" : "white-list-item";

  return (
    <>
      <Filters>
        <div className='filters-label'>
          Select Zip
        </div>
        <div className='filters-input'>
          <SearchableInput
            type='select'
            value={value1}
            icon={LoactionIcon}
            options={selectLoactionData}
            placeholder='Select Location'
            searchable={true}
            onChange={setValue1}
          />
        </div>
        <div className='filters-input'>
          <SearchableInput
            type='select'
            value={value2}
            icon={CapabilitiesIcon}
            options={selectData1}
            placeholder='Select Capabilities'
            searchable={false}
            onChange={setValue2}
          />
        </div>
        <div className='filters-input'>
          <SearchableInput
            type='select'
            value={value3}
            icon={LanguageIcon}
            options={selectData1}
            placeholder='Select Language'
            searchable={false}
            onChange={setValue3}
          />
        </div>
      </Filters>
      <div className="annie-hospice-flat-list">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableBody>
              <TableRow
                key={"sasad"}
                className='annie-flat-list-item gray-list-item'>

                <TableCell className="list-item-1">
                  <ReferCheckbox
                    isSelected={false}
                    handleClick={() => console.log("im click")} />
                </TableCell>
                <TableCell className="list-item-2">
                  Hospice of The Valley
                </TableCell>
                <TableCell className="list-item-3">
                  <img src={circle} alt="checkmark" />
                </TableCell>
                <TableCell className="list-item-4">
                  2 hrs
                </TableCell>
                <TableCell className="list-item-5">
                  12 hrs
                </TableCell>
                <TableCell className="list-item-6">
                  <Rating rating={4} />
                </TableCell>
                <TableCell className="list-item-7">
                  9
                </TableCell>
                <TableCell className="list-item-8">
                  10%
                </TableCell>
                <TableCell className="list-item-9">
                  <Badge badgeContent={14} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}
