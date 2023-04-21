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

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0)
];

export default function HospiceFlatList({
  hospices
}: any) {

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
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  className='annie-flat-list-item gray-list-item'
                >
                  <TableCell>
                    <ReferCheckbox />
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}
