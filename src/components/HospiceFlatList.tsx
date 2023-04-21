import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ReferCheckbox from './ReferCheckbox';
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

  const gray = true;
  // const listItemStyle = gray ? "gray-list-item" : "white-list-item";

  return (
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
  )
}
