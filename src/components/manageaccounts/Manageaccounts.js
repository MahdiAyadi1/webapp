import React from "react";
import "./manageaccounts.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableViewIcon from "@mui/icons-material/TableView";
// import EditIcon from "@mui/icons-material/Edit";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import Editaccount from "../editaccount/Editaccount";
import { useState,useEffect } from "react";
import { Createaccount } from "..";
import { db } from "../../firebase-config";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";


const Manageaccounts = (props) => {
  const [edit, setEdit] = useState(false);
  const [chauffeurList, setchauffeurList] = useState([]);
  const [bool, setbool] = useState(true);
  const chauffeurCollectionRef = collection(db, "chauffeur");
  
  useEffect(() => {
    const getchauffeurs = async () => {
      const data = await getDocs(chauffeurCollectionRef);
      setchauffeurList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getchauffeurs();
  }, [bool]);

  const deleteChauffeur = async (id) => {
    const postDoc = doc(db, "chauffeur", id);
    await deleteDoc(postDoc);
    setbool((old)=>{return !old})
  };
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
            <TableCell align="center">CIN</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Password</TableCell>
              <TableCell align="center">TimeTable</TableCell>
              <TableCell align="center">Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {chauffeurList.map((row) => (
              <TableRow
                key={row.cin}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.cin}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.lastName}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.password}</TableCell>
                <TableCell align="center">
                  <TableViewIcon className="TableViewIcon" onClick={()=>{props.setNav('timetable');props.setTarget(row.id)}} />
                </TableCell>
                <TableCell align="center"
                //  onClick={toggleEdit}
                 >
                  <PersonRemoveIcon  className="editIcon" onClick={() => {
                  deleteChauffeur(row.cin);
                  }}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Createaccount setCreate setbool={setbool}/>
    </div>
  );
};
export default Manageaccounts;
