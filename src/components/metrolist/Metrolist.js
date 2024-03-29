import React from 'react'
import './metrolist.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { db } from "../../firebase-config";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { useState , useEffect} from 'react'
import { Createmetro } from "..";
const Metrolist = () => {
  const [metroList, setmetroList] = useState([]);
  const metroCollectionRef = collection(db, "liste_metro");
  const [bool, setbool] = useState(true);
  
  useEffect(() => {
    const getmetros = async () => {
      const data = await getDocs(metroCollectionRef);
      setmetroList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getmetros();
  }, [bool]);
  const deleteMetro = async (id) => {
    const postDoc = doc(db, "liste_metro", id);
    await deleteDoc(postDoc);
    setbool((old)=>{return !old})
  };
  return (
    <div className="manageaccounts">
      <div className="page--title"> Metro List</div>
        <TableContainer component={Paper} sx={{color:'blue'}}>
          <Table sx={{ minWidth: 650}} aria-label="simple table" >
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="center" >type</TableCell>
                <TableCell align="center" >made in</TableCell>
                <TableCell align="center" >capacity</TableCell>
                <TableCell align="center" >Manage</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {metroList.map((row) => (
                <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="center" >{row.type}</TableCell>
                  <TableCell align="center" >{row.madein}</TableCell>
                  <TableCell align="center" >{row.capacity}</TableCell>
                  <TableCell align="center"><DeleteIcon className="editIcon" onClick={() => {
                  deleteMetro(row.id);
                }}/></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Createmetro setbool={setbool}/>
              </div>
  )
}

export default Metrolist