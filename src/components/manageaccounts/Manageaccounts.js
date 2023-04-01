import React from "react";
import "./manageaccounts.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { maxHeight } from "@mui/system";
import TableViewIcon from "@mui/icons-material/TableView";
import EditIcon from "@mui/icons-material/Edit";
import Editaccount from "../editaccount/Editaccount";
import { useState,useEffect } from "react";
import { Createaccount } from "..";
import { db } from "../../firebase-config";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";


const Manageaccounts = (props) => {
  const [edit, setEdit] = useState(false);
  const [chauffeurList, setchauffeurList] = useState([]);
const chauffeurCollectionRef = collection(db, "chauffeur");
  
  useEffect(() => {
    const getchauffeurs = async () => {
      const data = await getDocs(chauffeurCollectionRef);
      setchauffeurList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getchauffeurs();
  }, []);
  const toggleEdit = () => {
    setEdit(true);
  };
  return (
    <div className="manageaccounts">
      <div className="page--title"> Chauffeurs List</div>
      {edit && <Editaccount toggleEdit={toggleEdit} edit setEdit={setEdit} />}
      <TableContainer component={Paper} sx={{ color: "blue" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">TimeTable</TableCell>
              <TableCell align="center">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {chauffeurList.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.lastName}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">
                  <TableViewIcon className="TableViewIcon"/>
                </TableCell>
                <TableCell align="center" onClick={toggleEdit}>
                  <EditIcon  className="editIcon"/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Createaccount setCreate />
    </div>
  );
};
export default Manageaccounts;
