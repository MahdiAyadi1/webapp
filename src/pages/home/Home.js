import React, { useState,useEffect } from "react";
import './home.css' ;
import { getDocs, collection, deleteDoc, doc} from "firebase/firestore";
import { db } from "../../firebase-config";
import {LeafletMap,Metroinfo,Manageaccounts,Sidebar,Timetable, Declarations , Metrolist} from '../../components'
import { auth } from "../../firebase-config";
import {onAuthStateChanged} from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Home = ()=> {
    const [nav,setNav]= useState('map')
    const [filtre,setFiltre]= useState([])
    const [target,setTarget] = useState('empty')
    const [declarationList, setdeclarationList] = useState([]);
    var nbDeclarations=declarationList.length
    const declarationCollectionRef = collection(db, "declaration");
    const navigate = useNavigate();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login')
      }
    });
    const [bool, setbool] = useState(true);
    useEffect(() => {
        const getdeclaraions = async () => {
          const data = await getDocs(declarationCollectionRef);
          setdeclarationList(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        };
        getdeclaraions();
      }, [bool]);
      nbDeclarations=declarationList.length;
      console.log(nbDeclarations)
    const handleDelete = async (id) => {
        const postDoc = doc(db, "declaration", id);
        await deleteDoc(postDoc);
        setbool((old)=>{return !old})
      };

    return (
        <div className="home">
            <Sidebar nav={nav}  setNav={setNav} nbDeclarations={nbDeclarations}/>
            {nav=='map' && <LeafletMap filtre={filtre} />}
            {nav=='map' && <Metroinfo setFiltre={setFiltre}  filtre={filtre}/>}
            {nav=='manageaccounts' &&<Manageaccounts setTarget={setTarget} setNav={setNav} />}
            {nav=='timetable' && <Timetable target={target} />}
            {nav=='declarations' && <Declarations declarationList={declarationList} handleDelete={handleDelete} />}
            {nav=='metrolist' && <Metrolist/>}
        </div>
    )
}
export default Home