import React from "react";
import './manageaccounts.css' ;
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { maxHeight } from "@mui/system";
import TableViewIcon from '@mui/icons-material/TableView';
import EditIcon from '@mui/icons-material/Edit';

function createData(
    id,
    name,
    lastname,
    mail,
  ) {
    return { id, name, lastname, mail};
  }
  
  const rows = [
    createData(1,"Mahdi", "Ayadi", "mahdi@mail.com"),
    createData(2, "Mohamed","Chaabouni","mohamed@mail.com"),
    createData(3, "Ahmed","Ahmed","ahmed@mail.com"),
    createData(4, "Ahmed","Ahmed","ahmed@mail.com"),
    createData(5, "Ahmed","Ahmed","ahmed@mail.com"),
    createData(6, "Ahmed","Ahmed","ahmed@mail.com")
  ];

const Manageaccounts = ()=> {
    return (
        <div className="manageaccounts">

        <TableContainer component={Paper} sx={{color:'blue'}}>
          <Table sx={{ minWidth: 650}} aria-label="simple table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="center" >Name</TableCell>
                <TableCell align="center" >Last Name</TableCell>
                <TableCell align="center" >Email</TableCell>
                <TableCell align="center"  >TimeTable</TableCell>
                <TableCell align="center" >Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                  <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="center" >{row.name}</TableCell>
                  <TableCell align="center" >{row.lastname}</TableCell>
                  <TableCell align="center" >{row.mail}</TableCell>
                  <TableCell align="center" ><TableViewIcon/></TableCell>
                  <TableCell align="center" ><EditIcon/></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
              </div>
      );
}
export default Manageaccounts